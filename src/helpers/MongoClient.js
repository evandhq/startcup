// This file is actually a piece of "kos sher" :D Not sure why I made it!
import { mongoDsn } from 'config';
const mongoose = require('mongoose');
mongoose.connect(mongoDsn);

export const client = mongoose;
