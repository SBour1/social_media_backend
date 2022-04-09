const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/usercontroller');

router.route("/")
    .get(getAllUsers)
    .post(createUser);

router.route("/:id")
    .get(getUserById)
    .post(updateUser)
    .delete(deleteUser);

router.route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
