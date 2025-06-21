const productSchema = require("../models/product");

const InsertProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const checkProduct = await productSchema.findOne({ name, category });
    if (checkProduct) {
      res.json({ success: false, message: "Product already exists!" });
    } else {
      const newProduct = await new productSchema({
        name,
        price,
        category,
        description,
      }).save();
      res.json({ success: true, message: "New product added!" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error occurred!" });
  }
};
const ViewProducts = async (req, res) => {
  try {
    const products = await productSchema.find();
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error occurred!" });
  }
};
const ViewSingleProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error occurred!" });
  }
};
const UpdateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error occurred!" });
  }
};
const DeleteProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error occurred!" });
  }
};

module.exports = {
  InsertProduct,
  ViewProducts,
  ViewSingleProduct,
  UpdateProduct,
  DeleteProduct,
};
