const express = require('express');

const router = express.Router();

// Import Controllers
import LoginController from './controllers/LoginController';

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

// Registration routes
router.post('/v1/register', LoginController.register);
router.post('/v1/login', LoginController.login);

module.exports = router;
