import User from "../models/user.js";

export function getUsers(req, res) {
  User.find({}).then((data) => res.json(data));
}

export function getUser(req, res) {
  const { id } = req.params;
  User.findById(id).then((data) => res.json(data));
}

export function createUser(req, res) {
  const user = req.body;
  User.create(user).then((data) => res.json(data));
}

export function updateUser(req, res) {}

export function deleteUser(req, res) {}
