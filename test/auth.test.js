import mongoose from 'mongoose';
import { expect } from 'chai';
import request from 'supertest';

import app from '../app';

const agent = request.agent(app);

describe('User authentication', () => {
  before((done) => {
    mongoose.connection.collections.users.drop(() => done());
  });

  it('should create a user', (done) => {
    agent
      .post('/auth/signup')
      .send({ email: 'johndoe@gmail.com', password: '1234' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should fail login if wrong password', (done) => {
    agent
      .post('/auth/login')
      .send({ email: 'johndoe@gmail.com', password: 'wrong password' })
      .end((err, res) => {
        expect(res.body.statusCode).to.equal(401);
        done();
      });
  });

  it('should log user and set session cookie', (done) => {
    agent
      .post('/auth/login')
      .send({ email: 'johndoe@gmail.com', password: '1234' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should show all users once logged in', (done) => {
    agent
      .get('/users')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should log out user', (done) => {
    agent
      .get('/auth/logout')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should forbid access to users once logged out', (done) => {
    agent
      .get('/users')
      .end((err, res) => {
        expect(res.body.statusCode).to.equal(401);
        done();
      });
  });
});
