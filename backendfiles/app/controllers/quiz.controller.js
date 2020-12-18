const db = require("../models");
const Quiz = db.quiz;
const QuizScore = db.quizscore;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {

  Quiz.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.create = (req, res) => {
  var flag = false;
  var myarray = [];
  const quiz = {
    quizname: req.body.quizname,
    category: req.body.category,
  };
  Quiz.findAll({
    where: { quizname: quiz.quizname }
  })
    .then(data => {
      myarray = data;
      res.send(data);
      myarray.forEach(element => {
        if (element.quizname == quiz.quizname) {
          flag = true;
        } else {
          flag = false;
        }
      })
      if (!flag) {
        Quiz.create(quiz);
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Quiz.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.deleteQuiz = (req, res) => {
  const id1 = req.params.id;
  console.log("hi-------===============" + id1);


  QuizScore.destroy({
    where: {
      quizid: id1 //this will be your id that you want to delete
    }
  }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
    if (rowDeleted === 1) {
      console.log('Deleted successfully');
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    }
    Quiz.destroy({
      where: {
        id: id1 //this will be your id that you want to delete
      }
    }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
      if (rowDeleted === 1) {
        console.log('Deleted successfully');
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    }).catch((err) => {
      console.log(err);
      res.send(err);
    })
  }).catch((err) => {
    console.log(err);
    res.send(err);
  })



}

exports.update = (req, res) => {
  const id = req.params.id;

  Quiz.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// exports.deleteAll = (req, res) => {
//   Quiz.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };
