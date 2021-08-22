import request from "supertest";
import { app } from "../app";

export const signin = async () => {
  // Build a JWT payload. {id, email}
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjI1YzZjYzAyMGZiMDAyZTVmNzU3NiIsImVtYWlsIjoidGVzdDJAdGVzdC5jb20iLCJpYXQiOjE2Mjk2NDE4MzZ9.mPdFWLNNtFodUQYesfUtOD1z7Txt9ZBfHynl9kcm2cU
  // Create the JWT!
  // Build session object. {jwt: MY_JWT}
  // Turn that session into JSON
  // Take JSON and encoded it as base64
  // return a string thats the cookie with the encoded data
};
