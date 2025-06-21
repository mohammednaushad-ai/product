const express = require("express");
const router = express.Router();
const {
  InsertProduct,
  ViewProducts,
  ViewSingleProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/user_controllers");

router.post("/insert", InsertProduct);
router.get("/view-all", ViewProducts);
router.get("/view-single/:id", ViewSingleProduct);
router.put("/update/:id", UpdateProduct);
router.delete("/delete/:id", DeleteProduct);

module.exports = router;
