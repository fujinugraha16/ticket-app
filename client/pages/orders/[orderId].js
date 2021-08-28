import { useEffect, useState } from "react";
import buildClient from "../../api/build-client";
import StripeCheckout from "react-stripe-checkout";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  return (
    <div>
      <p>Time left to pay: {timeLeft} seconds</p>
      <div>
        <StripeCheckout
          token={(token) => console.log(token)}
          stripeKey="pk_test_51HMmc8CL9BnStSAZy0lXU0vhgrCg8c05xRkDTciFuaFPDPCkBpRl2tiU2sZbMJv0LItldUZoqqT2FghcNHDbFJgZ005GWLW2wJ"
          amount={order.ticket.price * 100}
          email={currentUser.email}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { orderId } = context.query;
  const client = buildClient(context);
  const { data } = await client.get(`/api/orders/${orderId}`);

  return {
    props: {
      order: data,
    },
  };
};

export default OrderShow;
