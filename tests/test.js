import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.should();

describe('Packages', () => {
  describe('GET /', () => {
    it('should get all packages', (done) => {
      chai.request(app)
        .get('/api/v1/pckgs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should get a single package', (done) => {
      const id = 1;
      chai.request(app)
        .get(`/api/v1/pckgs/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should not get a single package', (done) => {
      const id = 5;
      chai.request(app)
        .get(`/api/v1/pckgs/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('POST /', () => {
    it('should create a new package', (done) => {
      const pckg = {
        weight: 1.5,
        weightmetric: 'kg',
        from: 'lagos',
        to: 'benin',
      };
      chai.request(app)
        .post('/api/v1/pckgs')
        .send(pckg)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.pckg.should.have.property('weight');
          res.body.pckg.should.have.property('weightmetric');
          res.body.pckg.should.have.property('from');
          res.body.pckg.should.have.property('to');
          done();
        });
    });
  });

  describe('DELETE /', () => {
    it('should cancel/delete a package', (done) => {
      const pckg = {
        id: 1,
        weight: 1.0,
        weightmetric: 'kg',
        from: 'paris',
        to: 'benin',
      };
      chai.request(app)
        .delete(`/api/v1/pckgs/${pckg.id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should return error if package to delete not found', (done) => {
      const pckg = {
        weight: 1.0,
        weightmetric: 'kg',
        from: 'paris',
        to: 'benin',
      };
      chai.request(app)
        .delete(`/api/v1/pckgs/${pckg.id}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
