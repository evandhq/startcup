import { client } from 'helpers/MongoClient';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export default client.model('Bracket', {
  games: [{type: ObjectId, ref: 'Game'}]
});