import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

jest.mock("../nats-wrapper");

process.env.STRIPE_KEY =
  "sk_test_51HMmc8CL9BnStSAZJDeU3gL8KtGeaDjUhKHVmlje1GQhcl81ozLD8iOX6i0fDDDOcuZShjA2bjHVmxCLUeMBHBGy00gqrMCHYY";

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdf";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany;
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
