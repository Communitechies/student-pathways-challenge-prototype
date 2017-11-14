const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/v1/test', (req, res) => {
  // Temp values
  res.json([{
    id: 1,
    username: 'samsepi0l',
  }, {
    id: 2,
    username: 'D0loresH4ze',
  }]);
});


module.exports = router;
