import { client } from 'helpers/MongoClient';

export default client.model('Team', {
  name: String,
  slug: String,
  url: String,
  logo: String,
  players: Array
});