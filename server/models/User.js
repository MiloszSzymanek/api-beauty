const mongoose = require("mongoose");
const { Schema } = mongoose;

const jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        user.password = hash;

        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async (providedPassword, dbPassword) => {

    //console.log(comparePassword,dbPassword );

return await bcrypt.compare(providedPassword, dbPassword)

}

userSchema.methods.generateToken = async function (payload, expiration) {

  const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: expiration
  })

  console.log('generate token: token is', token)

  return token;

}  

const User = mongoose.model("User", userSchema);

module.exports = User;
