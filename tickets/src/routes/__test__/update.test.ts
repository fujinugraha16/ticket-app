import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";
import { signin } from "../../helpers/auth-test";

it("returns a 404 if the provided id does not exist", async () => {
  const id = mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", signin())
    .send({
      title: "asdfas",
      price: 20,
    })
    .expect(404);
});

it("returns a 401 if the user is not authenticated", async () => {
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({
      title: "asdfas",
      price: 20,
    })
    .expect(401);
});

it("returns a 404 if the user does not own the ticket", async () => {});

it("returns a 400 if the user provides an invalid title or price", async () => {});

it("updates the ticket provided valid inputs", async () => {});
