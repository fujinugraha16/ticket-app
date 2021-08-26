import { Message } from "node-nats-streaming";
import {
  Listener,
  Subjects,
  ExpirationCompleteEvent,
  OrderStatus,
} from "@fujingrtickets/common";
import { queueGroupName } from "./queue-group-name";

// models
import { Order } from "../../models/order";

// events
import { OrderCancelledPublisher } from "../publisher/order-cancelled-publisher";

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
  queueGroupName = queueGroupName;

  async onMessage(data: ExpirationCompleteEvent["data"], msg: Message) {
    const order = await Order.findById(data.orderId).populate("ticket");

    if (!order) {
      throw new Error("Order not found");
    }

    order.set({
      status: OrderStatus.Cancelled,
    });
    await order.save();

    // publish
    await new OrderCancelledPublisher(this.client).publish({
      id: order.id,
      ticket: {
        id: order.ticket.id,
      },
      version: order.version,
    });

    msg.ack();
  }
}
