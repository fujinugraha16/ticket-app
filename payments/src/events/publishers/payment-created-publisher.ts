import {
  Publisher,
  PaymentCreatedEvent,
  Subjects,
} from "@fujingrtickets/common";

export class PaymentCreatedPublihser extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
