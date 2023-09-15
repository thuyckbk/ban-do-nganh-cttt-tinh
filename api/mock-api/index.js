const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");
const port = 3002;
const app = express();


app.use(cors({ origin: true, credentials: true }));

app.use("/api", apiMocker("mock-api"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));