const { users } = require("../../models");

module.exports = {
  get: async (req, res) => {
    if (req.session.userId) {
      const result = await users.findOne({
        where: {
          id: req.session.userId,
        },
      });
      res.status(200).send(result);
    } else {
      res.status(404).send("not existing user");
    }
  },
};
