import assert from 'assert';

import User from '../models/User';

describe('Creating User', () => {
  it('should create a user', (done) => {
    const newUser = new User({ email: 'johndoe@gmail.com', password: '1234' });
    newUser
      .save()
      .then(() => {
        assert(!newUser.isNew);
        done();
      });
  });
});
