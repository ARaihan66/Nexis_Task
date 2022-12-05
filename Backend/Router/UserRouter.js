const router = require("express").Router();

const { createUser, userLogin } = require('../Controller/UserController')
const { } = require('../Middleware/auth')

router.route('/register').post(createUser)
router.route('/login').post(userLogin)

module.exports = router;