import mongoose from 'mongoose';

before((done) => {
  mongoose.connect(process.env.MONGO_TEST_URI, { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', err => console.warn(err));
});
