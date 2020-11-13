const { users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    const result = await users.findOne({
      where: {
        email,
        password,
      },
    });
    if (result) {
      req.session.userId = result.id;
      res.status(200).send(result);
    } else {
      res.status(401).send("Invalid user");
    }
  },
};
