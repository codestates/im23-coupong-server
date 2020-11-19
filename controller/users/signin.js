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
      req.session.userid = result.id;
      let userInfo = {
        id: req.session.userid,
        username: result.dataValues.username,
        email: result.dataValues.email,
      }
      res.status(200).send(userInfo)
    } else {
      res.status(401).send("Invalid user");
    }
  },
};