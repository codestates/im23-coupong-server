const { users } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    const { user_id } = req.params;
    try {
      const result = await users.destroy({
        where: {
          id: user_id
        },
      })
      if (result) {
        await req.session.destroy((err) => {
          if (err) {
            res.status(404).send("invalid user");
          } else {
            res.status(200).send("Withdrawal completed");
          }
        });
      }
    } catch(err) {
      res.status(500).send('err')
    }
  },
};