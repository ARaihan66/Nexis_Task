const User = require('../Model/UserModel');

//User Registration
exports.createUser = async (req, res) => {
    const { firstname, lastname, email, phoneNo, password } = req.body;
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User Already Register With This email!!!"
        });
    }
    let user = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneNo: phoneNo,
        password: password
    })

    res.status(200).json({
        success: true,
        User: user
    })
}

//User Login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please Provide Email Or Password");
    }

    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).send("User Not Found!!!");
    }

    const isPasswordMatched = await user.comparePassword(password);


    if (!isPasswordMatched) {
        return res.status(401).send("Password Incorrect!!!");
    }

    const token = user.getJwtToken();

    res.status(200).json({
        success: true,
        user: user,
        token: token
    })
}