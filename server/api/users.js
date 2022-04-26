const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, dateOfBirth } = req.body;

    if (!email || !password || !firstName || !lastName || !dateOfBirth)
      return res.send({ success: false, errorId: 1 });

    const newUser = new User(req.body);

    const user = await newUser.save();

    res.send({ success: true });
  } catch (error) {
    console.log("ERROR:", error.message);
    res.send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.send({ success: false, errorId: 1 });

    const newUser = new User(req.body);

    const user = await User.findOne({$or: [{ email}]}).select("email password");
    
    
    console.log("user is", user);
    if (!user) return res.send({success: false, errorId: 2})
    
    const passMatch = await user.comparePassword(password, user.password);
    console.log("passMatch is", passMatch);

    if (!passMatch) return res.send({ success: false, errorId: 3 });

    const token = await user.generateToken({id: user._id},  '1d');

        console.log('token is', token)

        res.cookie('recapcookie', token);

        const updatedUser = user.toObject()
        delete updatedUser.password
        console.log('user is type of', typeof updatedUser)

    res.send({ success: true, user: {...updatedUser}});
    
  } catch (error) {
    console.log("ERROR:", error.message);
    res.send(error.message);
  }
});

module.exports = router;
