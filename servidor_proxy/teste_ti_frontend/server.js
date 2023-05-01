import express from "express";
import fetch from "node-fetch";

const key = PROCESS.ENV.GOODREADS_API_KEY;
const goodReadsURL = GOODREADS_API_URL;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("*", (req, res) => {
  const url = new URL(`${goodReadsURL}${req.originalUrl}`);
  url.searchParams.append("key", key);

  console.log(`Forwarding request to ${url.href}`);
  fetch(url.href)
    .then((result) => {
      console.log({ result });
      return result.json();
    })
    .then((json) => res.send(json))
    .catch((error) => {
      console.log({ error });
      res.status(400).send({ message: "Erro na requisição.", error });
    });
});

const server = app.listen(3000, function () {
  const port = server.address().port;

  console.log(`Server listening at http://localhost:${port}/`);
});
