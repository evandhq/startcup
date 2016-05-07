import { client } from 'helpers/MongoClient';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export default client.model('Table', {
  teams: [
    {
      team: {type: ObjectId, ref: 'Team'},
      games: Number,
      goalsScored: Number,
      goalsAgainst: Number,
      points: Number
    }
  ]
});