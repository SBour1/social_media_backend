const router = require("express").Router();

const {
  getAllusers,
  getUserByid,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/usercontroller");

router.route("/")
    .get(getAllusers)
    .post(createUser);

router.route("/:id")
    .get(getUserByid)
    .post(updateUser)
    .delete(deleteUser);

router.route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
