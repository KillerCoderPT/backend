const UserController = require('../api/controllers/UserController')
var express = require('express');

var router = express.Router();

router.use(UserController.middlewareAuth);
router.get('/', UserController.list);

router.post('/add', UserController.add);
router.delete('/remove', UserController.remove);

module.exports = router;

