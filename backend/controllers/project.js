'use strict'

var Project = require('../models/project');
var fs = require('fs');

var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    saveProject: function (req, res) {
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.tags = params.tags;
        project.lang = params.lang;
        project.year = params.year;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: "Error al guardar" });

            if (!projectStored) return res.status(404).send({ message: "No se ha podido guardar el proyecto" });

            return res.status(200).send({ project: projectStored });
        });
    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) {
            return res.status(404).send({ message: "El proyecto no existe" });
        }

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({ message: "Error al devolver los datos" });
            if (!project) return res.status(404).send({ message: "El proyecto no existe" });
            return res.status(200).send({ project });
        });
    },

    getProjects: function (req, res) {

        Project.find({}).sort('-year').exec((err, projects) => {

            if (err) return res.status(500).send({ message: "Error al devolver los datos" });
            if (!projects) return res.status(404).send({ message: "No hay proyectos para mostrar" });
            return res.status(200).send({ projects });
        });
    },

    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: "Error al actualizar los datos" });
            if (!projectUpdated) return res.status(404).send({ message: "No se ha podido actualizar" });
            return res.status(200).send({ projectUpdated });
        })
    },

    deleteProject: function (req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectDeleted) => {
            if (err) return res.status(500).send({ message: "Error al eliminar la entrada" });
            if (!projectDeleted) return res.status(404).send({ message: "La entrada no existe" });
            return res.status(200).send({ project: projectDeleted });
        })
    },
    uploadImages: function (req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if (req.files) {
            var filepath = req.files.image.path;
            var filesplit = filepath.split('\\');
            var fileName = filesplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];


            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'jpeg') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, updatedProject) => {
                    if (err) return res.status(500).send({ message: "La imagen no se ha subido" });
                    if (!updatedProject) return res.status(404).send({ message: "No se pudo encontrar el proyecto" });
                    return res.status(200).send({ files: fileName });
                });
            } else {
                fs.unlink(filepath, (err)=>{
                    return res.status(200).send({message:"La extension es invalida"});
                });
            }
        }
    }
};

module.exports = controller;