import buildClient from "../../api/build-client";
import useRequest from "../../hooks/use-request";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    method: "post",
    url: "/api/orders",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => console.log(order),
  });

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>Price: {ticket.price}</h4>
      {errors}
      <button className="btn btn-primary" onClick={() => doRequest()}>
        Purchase
      </button>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { ticketId } = context.query;

  const client = buildClient(context);
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { props: { ticket: data } };
};

export default TicketShow;
