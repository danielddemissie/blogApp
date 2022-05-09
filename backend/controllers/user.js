//manage all users actions

const User = require("../models/user");

const userControllers = {
  //signup
  addUser: async (req, res) => {
    try {
      const user = await User.create({ ...req.body });
      //   await user.save();
      res.send({
        message: "user created successfully",
        data: user,
        success: 1,
      });
    } catch (error) {
      const errorArr = error.message.split(":");
      let path = errorArr[1];
      const unique = errorArr[0].startsWith("E1100");
      const pathError = (path) => {
        return `${path} is required`;
      };
      unique
        ? res.send({
            message: "user already existed",
            data: "",
            success: 2,
          })
        : res.send({
            message: pathError(path),
            data: "",
            success: 2,
          });
    }
  },
  //signin

  signinUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const nuser = await User.findOne({
        where: {
          username,
        },
      });

      nuser && password == nuser.password
        ? res.send({
            message: "user login successfully",
            data: nuser,
            success: 1,
          })
        : res.send({
            message: "invalid username or password",
            data: "",
            success: 2,
          });
    } catch (error) {
      return res.send({
        message: "invalid username or password",
        data: "",
        success: 2,
      });
    }
  },

  //updateUser

  updateUser: async (req, res) => {
    const { _id } = req.params;
    const { username, email, password } = req.body;
    try {
      const updateduser = await User.findOne({
        where: {
          _id,
        },
      });

      if (username) {
        updateduser.username = username;
      }
      if (email) {
        updateduser.email = email;
      }
      if (password) {
        updateduser.password = password;
      }
      await updateduser.save();
      return res.send({
        message: "user updated successfully.",
        data: updateduser,
        success: 1,
      });
    } catch (error) {
      return res.send({ message: error.message, data: "", success: 2 });
    }
  },

  //deleteUser

  deleteUser: async (req, res) => {
    const { _id } = req.params;
    try {
      const deleteuser = await User.findOne({
        where: {
          _id,
        },
      });
      const username = deleteuser.username;
      await deleteuser.remove();

      return res.send({
        message: `user ${username}'s account hasbeen deleted successfully `,
        data: "",
        success: 1,
      });
    } catch (error) {
      return res.send({
        message: `user ${username}'s doesnot exist. `,
        data: "",
        success: 2,
      });
    }
  },

  findUser: async (req, res) => {
    try {
      const { _id } = req.params;
      const user = await User.findOne({
        where: {
          _id,
        },
      });

      res.send({
        message: "user found",
        data: user,
        success: 1,
      });
    } catch (error) {
      res.send({
        message: "user not found",
        data: "",
        success: 2,
      });
    }
  },

  findAllUser: async (req, res) => {
    try {
      const users = await User.find();
      res.send({
        message: "all users found",
        data: users,
        success: 1,
      });
    } catch (error) {
      res.send({
        message: "users not found",
        data: "",
        success: 2,
      });
    }
  },
  //signout
  signoutUser: (req, res) => {
    res.send({ message: "user signout", data: "", success: 1 });
  },
};

module.exports = userControllers;
