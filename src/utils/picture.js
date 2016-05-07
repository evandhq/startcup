export function cover(event) {
  return event.cover && event.cover.original ? event.cover.original : null;
}

export function attendee(data) {
  return data && data.email_md5 ?
    `https://gravatar.com/avatar/${data.email_md5}?s=120&d=retro` :
    null;
}

export function avatar(data) {
  return data.avatar ? data.avatar.original : attendee(data);
}
