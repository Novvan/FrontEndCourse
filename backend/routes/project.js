'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'});


router.get('/home',ProjectController.home);
router.post('/saveproject', ProjectController.saveProject);
router.get('/getproject/:id?',ProjectController.getProject);
router.get('/getprojects',ProjectController.getProjects);
router.put('/updateproject/:id', ProjectController.updateProject);
router.delete('/deleteproject/:id', ProjectController.deleteProject);
router.post('/uploadimage/:id', multipartMiddleware, ProjectController.uploadImages);


module.exports = router;