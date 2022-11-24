import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name is Required"],
    },
    userEmail: {
      type: String,
      required: [true, "User Email is Required"],
    },
    phoneNo: {
      type: Number,
      required: [true, "Phone no is Required"],
    },
    productName: {
      type: String,
      required: [true, "Product Name is Required"],
    },
    productPrice: {
      type: Number,
      required: [true, "Product Price is Required"],
    },
    location: {
      type: String,
      required: [true, "Location is Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
