const { users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { email, password, username } = req.body;

    const [result, created] = await users.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        password: password,
        username: username,
      },
    });
    if (!created) {
      res.status(409).send("already existing user");
    } else {
      let userInfo = {
        email: result.email,
        username: result.username,
      };
      res.status(200).send(userInfo);
    }
  },
};
