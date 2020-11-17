const { stamps } = require("../../models");

module.exports = {
  post: (req, res) => {
    if (req.session.userId) {
      const { name, number, count } = req.body;
      stamps
        .create({
          name: name,
          number: number,
          count: count,
          user_id: req.session.userId,
        })
        .then(result => {
          res.status(200).send(result);
        });
    } else {
      res.status(401).send("Please sign in");
    }
  },
};
