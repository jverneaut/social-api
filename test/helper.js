import mongoose from 'mongoose';

import app from '../app';

before((done) => {
  mongoose.connect(process.env.MONGO_TEST_URI, { useNewUrlParser: true }).then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
      done();
    });
  });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => done());
});
