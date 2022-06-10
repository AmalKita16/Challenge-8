/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('GET/v1/cars', () => {
  const page = 1;
  const pageSize = 5;

  it('get all cars from request ', async () => {
    return await request(app)
      .get("/v1/cars?page=" + page + "&pageSize=" + pageSize)
      .set('Content-Type', 'application/json')
      .then((res) => {
        console.log (res.status, res.body);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            cars: expect.arrayContaining([expect.any(Object)]),
            meta: expect.objectContaining({ pagination: expect.any(Object) }),
          }),
        );
      });
    });
  });