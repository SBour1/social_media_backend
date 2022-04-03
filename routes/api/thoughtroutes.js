const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtcontroller");

router.route("/")
    .get(getAllThoughts)
    .post(createThought);

router.route("/:id")
    .get(getThoughtsById)
    .post(updateThought)
    .delete(deleteThought);

router.route("/:thoughtId/reactions")
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;
