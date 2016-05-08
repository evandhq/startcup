import { client } from 'helpers/MongoClient';

export default client.model('Team', {
  name: String,
  slug: String,
  url: String,
  mobile: String,
  email: String,
  logo: String,
  players: Array
});