const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");
const auth_controller = require("../Controllers/auth.controller");

route.get(public_routes.login, (_req, res) => {
  res.render("Auth/login");
});

route.post(public_routes.login, auth_controller.login);

module.exports = route;
