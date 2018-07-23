import { expect } from 'chai';
import request from 'supertest';

import app from '../app';

describe('Users route tests', () => {
  describe('GET /users', () => {
    it('should forbid access if not logged in', (done) => {
      request(app).get('/users')
        .end((err, res) => {
          expect(res.body.statusCode).to.equal(401);
          done();
        });
    });
  });
});
