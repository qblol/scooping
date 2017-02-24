var express = require('express');
var router = express.Router();
var ScoopController = require('../controllers/ScoopController.js');

/*
 * GET
 */
router.get('/', ScoopController.list);

/*
 * GET
 */
router.get('/:id', ScoopController.show);

/*
 * POST
 */
router.post('/', ScoopController.create);

/*
 * PUT
 */
router.put('/:id', ScoopController.update);

/*
 * DELETE
 */
router.delete('/:id', ScoopController.remove);

module.exports = router;
