import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
 
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    image: {
      type: Array,
      required: [true, "Please provide product image URL"],
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
    },
    subCategory: {
      type: String,
    required: [true, "Please select a category"],
    },
    sizes: {
      type: Array, 
          required: [true, "Please select a category"],
    
    },
    bestseller: {
      type: Boolean,
     
    },
    date: {
      type: Number,

          required: [true, "Please select a category"],
    },
  },
 
);

const Product = mongoose.model("Product", productSchema);

export default Product;
