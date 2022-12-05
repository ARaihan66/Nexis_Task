exports.authentication = async (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) res.status(401).json({
        success: false,
        message: "Access Denied.!!!"
    })

    token = token.split(" ")[1].trim();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Invalid Token"
        })
    }
}