const axios = require("axios");

const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/article", (req, res) => {
  axios.get(req.body.url).then(function (r2) {
    let dom = new JSDOM(r2.data, {
      url: req.body.url,
    });
    let article = new Readability(dom.window.document).parse();
    let start = article.textContent
      .toUpperCase()
      .indexOf(req.body.content.toUpperCase().slice(0, 15));
    let end = article.textContent.toUpperCase().indexOf("PUBLIÉ LE");
    res.json({ message: article.textContent.slice(start, end) });
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
