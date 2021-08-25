import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";

// helpers
import { signin } from "../../helpers/auth-test";

it("returns an error if the ticket does not exist", async () => {
  const ticketId = mongoose.Types.ObjectId();

  await request(app)
    .post("/api/orders")
    .set("Cookie", signin())
    .send({ ticketId })
    .expect(404);
});

it("returns an error if the ticket already reserved", async () => {});

it("reserve a ticket", async () => {});
