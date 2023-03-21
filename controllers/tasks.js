const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ task: task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task: task})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id })

        if(!task) {
            return res.status(404).json({msg:`No task with id: ${req.params.id}`})
        }

        res.status(200).json({ task: task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = (req, res) => {
    res.send('update a task')
}

const deleteTask = (req, res) => {
    res.send('delete a task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}