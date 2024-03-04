const jwt = require('jsonwebtoken');

// this should be actually in .env.local or config file (also redefined in routes/auth.js)
const jwt_secret = "ykrubru08hjhc";

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, jwt_secret);
        req.user = data.user;
    }
    catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    next();
}

module.exports = fetchuser;