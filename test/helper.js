import mongoose from 'mongoose';

require('dotenv').config();

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect(process.env.MONGO_TEST_URI, { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', err => console.warn('Warning', err));
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => done());
});
