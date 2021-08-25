import request from "supertest";
import { app } from "../../app";

// models
import { Ticket } from "../../models/ticket";
import { Order } from "../../models/order";

// helpers
import { signin } from "../../helpers/auth-test";

it("fetches the order", async () => {
  // Create a ticket
  const ticket = Ticket.build({
    title: "concett",
    price: 20,
  });
  await ticket.save();

  const user = signin();

  // make a request to build an order with this ticket
  const { body: order } = await request(app)
    .post("/app/orders")
    .set("Cookie", user)
    .send({ ticketId: ticket.id })
    .expect(201);

  // make request to fetch the order
  const { body: fetchedOrder } = await request(app)
    .get(`/api/orders/${order.id}`)
    .set("Cookie", user)
    .send()
    .expect(200);

  expect(fetchedOrder.id).toEqual(order.id);
});

it("returns an error if one user tries to fetch another users order", async () => {
  // Create a ticket
  const ticket = Ticket.build({
    title: "concett",
    price: 20,
  });
  await ticket.save();

  // make a request to build an order with this ticket
  const { body: order } = await request(app)
    .post("/app/orders")
    .set("Cookie", signin())
    .send({ ticketId: ticket.id })
    .expect(201);

  // make request to fetch the order
  await request(app)
    .get(`/api/orders/${order.id}`)
    .set("Cookie", signin())
    .send()
    .expect(401);
});
