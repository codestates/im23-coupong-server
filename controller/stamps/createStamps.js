const { stamps } = require("../../models");

module.exports = {
  post: (req, res) => {
    if (req.header('User-Id')) {
      const { name, number, count } = req.body;
      stamps
        .create({
          name: name,
          number: number,
          count: count,
          user_id: req.body.id
        })
        .then(result => {
          res.status(200).send(result);
        });
    } else {
      res.status(401).send("Please sign in");
    }
  },
};