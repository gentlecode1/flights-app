const db = require("../models");
const Comment = db.comments;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.comment) {
    res.status(400).send({ message: "Comment can not be empty!" });
    return;
  }

  if (!req.body.userId) {
    res.status(400).send({ message: "User Id can not be empty!" });
    return;
  }

  if (!req.body.flightId) {
    res.status(400).send({ message: "Flight Id can not be empty!" });
    return;
  }

  const comment = new Comment({
    comment: req.body.comment,
    flightId: req.body.flightId,
    userId: req.body.userId,
    tags: req.body.tags,
  });

  comment
    .save(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    });
};

exports.findCommentsBy = (req, res) => {
  const query = req.query;

  Comment.find({ ...query })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Comments" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Comment with id=" + id });
    });
};

