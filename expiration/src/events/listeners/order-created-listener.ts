import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent, Subjects } from "@fujingrtickets/common";
import { queueGroupName } from "./queue-group-name";

// gull queue
import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    await expirationQueue.add({
      orderId: data.id,
    });

    msg.ack();
  }
}
