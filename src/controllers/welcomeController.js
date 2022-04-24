const request = require("request");

const greeting = (req, res) => {
  res.status(200).json({
    msg: "Hi ...",
  });
  res.send(console.log("AIA be test"));
};

const getTest = (req, res) => {
  request({
    uri: "http://www.giantbomb.com/api/search",
    qs: {
      api_key: "123456",
      query: "World of Warcraft: Legion",
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(body);
      } else {
        res.json(error);
      }
    },
  });
};

const test = (req, res) => {
  request({
    uri: "https://arka-vehicle-rental.herokuapp.com/welcome",
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(body);
      } else {
        res.json(error);
      }
    },
  });
};

module.exports = { greeting, getTest, test };

// https://arka-vehicle-rental.herokuapp.com/welcome
