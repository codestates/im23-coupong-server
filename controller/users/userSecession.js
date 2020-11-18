const { users } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    const { email, password } = req.body;
    const result = await users.destroy({
      where: {
        email,
        password
      }
    })
    if (result) {
      result.destroy({
        truncate: true
      })
        res.status(200).send(result)
        res.redirect("/");
    } else {
        res.status(500).send('Failure to withdraw')
    }
  },
};