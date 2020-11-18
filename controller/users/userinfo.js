const { users } = require("../../models");

module.exports = {
  get: async (req, res) => {
    if (req.session.userid) {
      const result = await users.findOne({
        where: {
          id: req.session.userid,
        },
      });
      let userInfo = {
        email: result.email,
        username: result.username,
        birth: result.birth,
        user_id: result.id
      };
      res.status(200).send(userInfo);
    } else {
      res.status(404).send("not existing user");
    }
  },
};
