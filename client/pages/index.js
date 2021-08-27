import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You aren't signed in</h1>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default LandingPage;
