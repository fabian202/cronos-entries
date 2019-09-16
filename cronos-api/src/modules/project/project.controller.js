import Project from './project.model'
import { getTokenFromHeaders } from '../../services/auth'

export const get = async (req, res, next) => {
 try {
    const { _id } = getTokenFromHeaders(req);
    // const projects = await Project.find({}).populate('user');
    const projects = await Project.find({ user: _id });
    res.send(projects);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
}

export const getById = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        res.send(stage);
    } catch (error) {
       res.status(400).json({ message: error.message });
    }
   }

export const create = async (req, res, next) => {
    const { 
        name, user
     } = req.body;

    const project = new Project({
        name, 
        user
    });

    try {
        const newProject = await project.save();
        res.send(201);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const put = async (req, res, next) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.id },
            req.body
          );
          res.send(200);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

export const del = async (req, res, next) => {
    try {
        const project = await Project.findOneAndRemove({
            _id: req.params.id
        });
        res.send(204);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}