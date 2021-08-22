import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

export const getServerSideProps = async ({ req }) => {
  const { data } = await axios.get(
    // http://SERVICE_NAME.NAMESPACE.svc.cluster.local/
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
    {
      // headers: {
      //   Host: "ticketing.dev",
      // },
      headers: req.headers,
    }
  );

  return {
    props: {
      ...data,
    },
  };
};

export default LandingPage;
