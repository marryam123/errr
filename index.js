const express = require ('express')
const app = express()
const cors = require('cors');
const Auth = require('./routes/auth.js')
const atten = require('./routes/attendencerout.js');
const PORT = 1000;
const path = require("path");
require("./conne/db.js")
app.use(cors());
app.use(express.json());
app.use('/api',Auth);
app.use('/at',atten);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Example app listening on port: `)
})
