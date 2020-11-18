const { users } = require("../../models");

module.exports = {
    put: async (req, res) => {
    const { email, username, birth, password } = req.body;

    const result = await users.findOne({
        where: {
            email,
            username,
            birth,
            password
        }
    })
    if (result) {
        result.update({
            email: result.email,
            username: result.username,
            birth: result.birth,
            password: result.password
        })
        res.status(200).send("성공")
    } else {
        res.status(500).send("Failure to userinfo")
    }
    }
};