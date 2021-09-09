const controller = {
  getUser: (req, res, next) => {
    res.send(`Te busco el user ${req.params.id}`);
  },
  getUsers: (req, res, next) => {
    res.send("Soy una ruta saludo usuarios ");
  },
};
module.exports = controller;
