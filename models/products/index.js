const mongoose = require("mongoose");
const productsSchema = require("./products.schema");

const products = mongoose.model("products", productsSchema);

module.exports = products;
