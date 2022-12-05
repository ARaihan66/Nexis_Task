const User = require('../Model/UserModel');

//User Registration
exports.createUser = async (req, res) => {
    const { firstname, lastname, email, phoneNo, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({
            success: false,
            message: "User Already Register With This email!!!"
        });
    }



    const user = await User.create({
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