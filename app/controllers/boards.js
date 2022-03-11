const Boards = require('../models/boards');

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const board = {
    title: req.body.title,
    stage: 1
  };
  Boards.create(board)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const stage = req.body.stage;

  Boards.update({stage: stage}, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
        res.status(201).send({ok: true});
    } else {
        res.status(401).send({ok: false});
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Error updating Boards with id=${id} error=${err}`
    });
  });
};

exports.getAll = (req, res) => {
  Boards.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });
};
