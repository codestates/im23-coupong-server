const { users } = require('../../models');

module.exports = {
  get: async (req, res) => {
    const session = req.session.userId
    if (session) {
      const result = await users.findOne({
        where : {
          id : session
        }
      })
      res.status(200).send(result)
    } else {
      res.status(404).send("not existing user")
      res.end();
    }
  }
};
