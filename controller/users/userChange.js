const { users } = require("../../models");

module.exports = {
  put: async (req, res) => {
    const { email, username, birth, password } = req.body;
    const { user_id } = req.params;
    try {
      const result = await users.update({
        email: email,
        username: username,
        birth: birth,
        password: password
      }, {
        where: {
          id: user_id
        }})
      if (result) {
        res.status(200).send("Success")
      } else {
        res.status(404).send("Failure to userinfo")
      }
    } catch(err) {
      res.status(500).send('err')
    }
  }
};