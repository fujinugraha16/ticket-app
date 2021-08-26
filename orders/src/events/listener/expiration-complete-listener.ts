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

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
  queueGroupName = queueGroupName;

  async onMessage(data: ExpirationCompleteEvent["data"], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order.set({
      status: OrderStatus.Cancelled,
      ticket: null,
    });
  }
}
