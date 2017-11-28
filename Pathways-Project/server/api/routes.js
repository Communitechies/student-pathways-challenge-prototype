import express from 'express';

// Import Controllers
import LoginController from './controllers/LoginController';
import UserController from './controllers/UserController';
import PathwayController from './controllers/PathwayController';

// Import Policies
import isAuth from './policies/isAuth';

const router = express.Router();

/* GET home page. */
router.get('/v1/test', [isAuth], (req, res) => res.json({ message: 'pong' }));
router.get('/v1/ping', (req, res) => res.json({ message: 'pong' }));

// Registration Routes
router.post('/v1/register', LoginController.register);
router.post('/v1/login', LoginController.login);

// User Routes
router.get('/v1/user/favourite', [isAuth], UserController.getFavourites);
router.get('/v1/user/pathway', [isAuth], UserController.getPathway);
router.post('/v1/user/pathway', [isAuth], UserController.editPathway);
router.post('/v1/user/favourite/:key', [isAuth], UserController.addFavourite);

// Pathways Routes
router.get('/v1/pathways', PathwayController.getAvailablePathways);
router.get('/v1/pathways/:key', PathwayController.getPathway);

module.exports = router;
