const express = require('express');
const OngController = require('./controllers/ongs/OngController');
const IncidentsController = require('./controllers/incidents/IncidentsController');
const ProfileController = require('./controllers/profile/ProfileController');
const SessionsController = require('./controllers/sessions/SessionController');

const routes = express.Router();

/**
 * Login Route
 */
routes.post('/sessions', SessionsController.create);

/**
 * Routes Ongs
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Routes Incidents
 */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

/**
 * Routes profile
 */
routes.get('/profile', ProfileController.index);

module.exports = routes;
