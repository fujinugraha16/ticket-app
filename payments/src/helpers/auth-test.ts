import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const signin = (id?: string) => {
  // Fake Cookie for test
  // Build a JWT payload. {id, email}
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjI1YzZjYzAyMGZiMDAyZTVmNzU3NiIsImVtYWlsIjoidGVzdDJAdGVzdC5jb20iLCJpYXQiOjE2Mjk2NDE4MzZ9.mPdFWLNNtFodUQYesfUtOD1z7Txt9ZBfHynl9kcm2cU
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };

  // Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session object. {jwt: MY_JWT}
  const session = { jwt: token };

  // Turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encoded it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`];
};
