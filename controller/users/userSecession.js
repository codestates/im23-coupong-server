const { users } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    try {
      const result = await users.destroy({
            where: {
              id: req.session.userid,
            },
          })
      if (result) {
        await req.session.destroy((err) => {
          if (err) {
            res.status(404).send("invalid user");
          } else {
            res.status(200).send("Withdrawal completed");
            res.redirect("/");
          }
        });
      }
    } catch(err) {
      res.status(500).send('err')
    }
  },
};