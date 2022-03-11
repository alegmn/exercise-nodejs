var express = require('express');
var router = express.Router();
const controllers= require('../controllers/boards');

router.post('/', controllers.create);
router.put('/:id', controllers.update);
router.get('/', controllers.getAll);

module.exports = router;
