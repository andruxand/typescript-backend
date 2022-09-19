import { expect } from 'chai';
import app from '../src/';
import {agent as request} from 'supertest';

describe('Prueba Inicial', () => {
  it('Deberia pasar siempre', function () {
      expect(true).to.equal(true);
  });
});


describe('Prueba de petición correcta a GET /api/v1/items', () => {
  it('Debe obtener todos los items', async () => {
    const res = await request(app).get('/api/v1/items');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an('array');
    // expects...
  });
});

describe('Prueba de petición incorrecta a GET /api/v1/all', () => {
  it('Debe obtener respuesta Not Found', async () => {
    const res = await request(app).get('/api/v1/all');
    expect(res.status).to.equal(404);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an('object');
    expect(res.body.errors).not.to.be.empty;
    expect(res.body.errors).to.be.an('object');
    expect(res.body.errors.msg).not.to.be.empty;
    expect(res.body.errors.msg).to.equal('Not Found');
    // expects...
  });
});