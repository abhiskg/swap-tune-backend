import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const AssignJwt = async (email: string) => {
  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN as string, {
    expiresIn: "1d",
  });
  return token;
};