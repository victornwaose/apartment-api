"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
const _deleteTask =
    (exports.updateTask =
    exports.getSIngleTask =
    exports.createNewTask =
    exports.getAllTasks =
        void 0);
export { _deleteTask as deleteTask };

var getAllTasks = function getAllTasks(req, res) {
    res.send("all tasks from getAllTasks");
};

const _getAllTasks = getAllTasks;
export { _getAllTasks as getAllTasks };

var createNewTask = function createNewTask(req, res) {
    res.send("all tasks from getAllTasks");
};

const _createNewTask = createNewTask;
export { _createNewTask as createNewTask };

var getSIngleTask = function getSIngleTask(req, res) {
    res.send("get Single Task");
};

const _getSIngleTask = getSIngleTask;
export { _getSIngleTask as getSIngleTask };

var updateTask = function updateTask(req, res) {
    res.send("update Tasks");
};

const _updateTask = updateTask;
export { _updateTask as updateTask };

var deleteTask = function deleteTask(req, res) {
    res.send("Delete Tasks");
};

const _deleteTask = deleteTask;
export { _deleteTask as deleteTask };
