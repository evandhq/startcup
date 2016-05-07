import { apiRoot } from '../variables';
import { setJwt } from '../redux/modules/auth';
const methods = ['get', 'post'];
const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class ApiClient {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct an object of ApiClient');
    }

    for (const method of methods) {
      this[method] = this.fetch.bind(this, method);
    }
  }

  static get client() {
    if (!this[singleton]) {
      this[singleton] = new ApiClient(singletonEnforcer);
    }

    return this[singleton];
  }

  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    return response.json().then(json => Promise.reject(json));
  }

  static parseJSON(response) {
    return response.json();
  }

  static prepareUrl(path) {
    return `${apiRoot}/${path}`;
  }

  setStore(store) {
    this.store = store;
  }

  storeJwt(response) {
    const state = this.store.getState();
    if (!state.auth.jwt) {
      const jwt = response.headers.get('Authorization');
      if (jwt) {
        this.store.dispatch(setJwt(jwt));
      }
    }

    return response;
  }

  fetch(method, url, { data, ...options } = {}) {
    const fetchOptions = options;
    fetchOptions.headers = fetchOptions.headers || {};
    fetchOptions.headers.Accept = 'application/json';

    if (data) {
      fetchOptions.body = JSON.stringify(data);
      fetchOptions.headers['Content-Type'] = 'application/json';
    }

    if (this.store) {
      const jwt = this.store.getState().auth.jwt;

      if (jwt) {
        fetchOptions.headers = fetchOptions.headers || {};
        fetchOptions.headers.Authorization = jwt;
      }
    }

    fetchOptions.method = method;

    return fetch(ApiClient.prepareUrl(url), fetchOptions)
      .then(ApiClient.checkStatus)
      .then(this.storeJwt.bind(this))
      .then(ApiClient.parseJSON);
  }

  authenticate(data) {
    return this.post('/auth/login', {data});
  }

  listEvents(userId) {
    return this.get(`/users/${userId}/events?per_page=-1&sort=start_date`);
  }

  listTickets(eventSlug) {
    return this.get(`/events/${eventSlug}/tickets?per_page=100`);
  }

  listAttendees(eventSlug) {
    return this.get(`/events/${eventSlug}/attendees?include=checkins&per_page=-1`);
  }

  checkIn(eventSlug, value) {
    return this.post(`/events/${eventSlug}/attendees/checkIn`, {data: {value}});
  }

  checkInGroup(eventSlug, data) {
    return this.post(`/events/${eventSlug}/attendees/checkInGroup`, {data});
  }
}

export const client = ApiClient.client;
