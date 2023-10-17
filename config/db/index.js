const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");
const USER = 'usergunesh';
const PASSWORD = 'usergun';
const DB = 'zee5';
mongoose.connect(
  `mongodb+srv://${USER}:${PASSWORD}@cluster0.znykm.mongodb.net/${DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: "1"
  }
);

module.exports = mongoose;
