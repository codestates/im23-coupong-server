module.exports = {
  post: async (req, res) => {
    if (req.session.userid) {
      await req.session.destroy();
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  },
};
