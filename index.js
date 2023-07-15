const express = require("express");
const app = express();
const path = require("path");
const route = require("./Routes/routes");
const ejs = require("ejs").__express;

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.engine("ejs", ejs);

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.set("layout", "layout");

app.use(express.static(__dirname + "/public"));
app.use("/", route);

const http = require("http").createServer(app);
http.listen(PORT, () => console.log(`Julain app running on http://localhost:${PORT}`));
