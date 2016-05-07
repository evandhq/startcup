import { client } from 'helpers/MongoClient';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export default client.model('Game', {
  home: {
    type: ObjectId,
    ref: 'Team'
  },
  away: {
    type: ObjectId,
    ref: 'Team'
  },
  homeGoals: Number,
  awayGoals: Number,
  date: Date
});