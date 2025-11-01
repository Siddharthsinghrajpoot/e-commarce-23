import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Please enter product name"],
 
    },
    items: {
      type: Array,
      required: [true, "Please enter product description"],
    },
    amount: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    address: {
      type: Object,
      required: [true, "Please provide product image URL"],
    },
    status: {
      type: String,
      required: [true, "Please select a category"],
    },
    paymentMethod: {
      type: String,
    required: [true, "Please select a category"],
    },
    payment: {
      type: Boolean, 
          required: [true, "Please select a category"],
    
    },
date:{type:Number,required:true}


  },
 
);

const OrderModel = mongoose.model("order", orderSchema);

export default OrderModel;
