import Entry from './entry.model'

export const get = async (req, res, next) => {
 try {
    const entries = await Entry.find({}).populate('user').populate('project');
    res.send(entries);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
}

export const getById = async (req, res, next) => {
    try {
        const entry = await Entry.findById(req.params.id);
        res.send(stage);
    } catch (error) {
       res.status(400).json({ message: error.message });
    }
   }

export const create = async (req, res, next) => {
    const { 
        hours, comment, billable, project, user
     } = req.body;

    const entry = new Entry({
        hours, comment, billable, project, user
    });

    try {
        const newEntry = await entry.save();
        res.send(201);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const put = async (req, res, next) => {
    try {
        const entry = await Entry.findOneAndUpdate(
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
        const entry = await Entry.findOneAndRemove({
            _id: req.params.id
        });
        res.send(204);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}