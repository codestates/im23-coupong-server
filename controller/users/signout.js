module.exports = {
  post: async (req, res) => {
    if (req.session.userId) {
      await req.session.destroy();
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  },
};
