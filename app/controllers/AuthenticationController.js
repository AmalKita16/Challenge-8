/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../app");

describe("GET /v1/cars", () => {
  const car = {
    name: "Avanza Test",
    price: 300000,
    size: "SMALL",
    image: "https://source.unsplash.com/505x505",
  };

  //Login using the registered admin account
  const admin = {
    email: "klee@gmail.com",
    password: "123456"
  };

  const customer = {
    email: "Fikri@binar.co.id",
    password: "123456"
  }
  
  it("user is admin and successfully create car with response 201 as status code", async () => {
    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email: admin.email, password: admin.password })
      .then((res) => {
        request(app)
          .post("/v1/cars")
          .set("authorization", "Bearer " + res.body.accessToken)
          .send(car)
          .then((res) => {
            expect(res.statusCode).toBe(201);
            expect(res.body.name).toEqual(car.name);
            expect(res.body.price).toEqual(car.price);
            expect(res.body.size).toEqual(car.size);
            expect(res.body.image).toEqual(car.image);
          });
      });
  });

  it("user failed to create car(Not Admin) with response 401 as status code", async () => {
    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email: customer.email, password: customer.password })
      .then((res) => {
        request(app)
          .post("/v1/cars")
          .set("authorization", "Bearer " + res.body.accessToken)
          .send(car)
          .then((resp) => {
            expect(resp.statusCode).toBe(401);
            expect(resp.body).toEqual({
              error: {
                name: "Error",
                message: "Access forbidden!",
                details: {
                  role: "CUSTOMER",
                  reason: "CUSTOMER is not allowed to perform this operation.",
                },
              },
            });
          });
      });
  });
});