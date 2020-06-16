const functions = require("@react-native-firebase/functions");
const auth = require("@react-native-firebase/auth");


function createUser (data,context) {
    auth()
    .createUser({
      email: data.email,
      password: data.password,
      displayName: data.displayName,
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      return err;
    });
};


module.exports = {
    createUser,
  };