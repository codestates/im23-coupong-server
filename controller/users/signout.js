const session = require("express-session");

module.exports = {
  post: async (req, res) => {
    await req.session.destroy();
    res.redirect('/');
  }
};
