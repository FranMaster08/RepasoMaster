const db =require('../database/productos.json')
const controller = {
  getProduct: (req, res, next) => {
    res.render("index", { products: db});
  },
  getProducts: (req, res, next) => {
    res.render("index", { products: db});
  },
};
module.exports = controller;
