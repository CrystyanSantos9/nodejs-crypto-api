const express = require('express');

const app = express();
const router = express.Router();

const routes = require('./src/routes');

// logando o método
router.use((req, res, next) => {
  console.log(`/${req.method}`);
  console.log(`from :: ${req.socket.remoteAddress}`);
  next();
});

// nested objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use('/', routes.Home);

module.exports = app;
