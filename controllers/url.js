const shortid = require("shortid");
const URL = require("../models/url");

async function handlegenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });

  const shortID = shortid.generate();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = {
  handlegenerateNewShortURL,
};
