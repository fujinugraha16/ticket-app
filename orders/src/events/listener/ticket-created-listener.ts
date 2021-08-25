import { Message } from "node-nats-streaming";
import { Subjects, Listener, TicketCreatedEvent } from "@fujingrtickets/common";

// models
import { Ticket } from "../../models/ticket";

// constanta
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    const { title, price } = data;

    const ticket = Ticket.build({
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
