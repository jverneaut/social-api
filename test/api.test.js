import { expect } from 'chai';
import request from 'supertest';

import app from '../app';

describe('Api setup and error handling', () => {
  it('should throw 404 error if route undefined', (done) => {
    request(app)
      .get('/gibberish')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
