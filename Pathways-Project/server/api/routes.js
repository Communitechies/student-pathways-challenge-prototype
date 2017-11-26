import express from 'express';

// Import Controllers
import LoginController from './controllers/LoginController';
import UserController from './controllers/UserController';
import PathwayController from './controllers/PathwayController';

const router = express.Router();

/* GET home page. */
router.get('/v1/test', (req, res) => res.json({ message: 'pong' }));

// Registration Routes
router.post('/v1/register', LoginController.register);
router.post('/v1/login', LoginController.login);

// User Routes
router.get('/v1/user/:studentID', UserController.getUser);

// Pathways Routes
router.get('/v1/pathways', PathwayController.getAvailablePathways);
router.get('/v1/pathways/:key', PathwayController.getPathway);

module.exports = router;
