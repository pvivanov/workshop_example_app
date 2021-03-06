var router = require('express').Router();

router.use('/metrics', require('./metrics'));
router.use('/config', require('./config'));
router.use('/weatherforecast', require('./weatherforecast'));

module.exports = router;
