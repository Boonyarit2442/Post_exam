const express = require('express');
const router = express.Router();

const login_controller = require('../controllers/user_controller');

router.get('/',login_controller.get_user_login);
router.post('/',login_controller.Login)
module.exports = router;