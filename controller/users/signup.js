const { users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const body = req.body
    const [result, created] = await users.findOrCreate({
      where : {
        email: body.email,
        username: body.username,
        password: body.password
      }
    });
    if (!created) {
      res.status(409).send("already existing user")
    } else {
      res.status(200).send(result)
    }
  }
};
