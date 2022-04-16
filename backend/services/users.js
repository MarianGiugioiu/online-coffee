const passwordHash = require('./password');
const db = require('./db');
const jwt = require('./jwt');

//Finds the user with the email and password matching the parameters (password is optional)
async function getUserByEmailAndPassword(email, password) {
    const rows = await db.query(
        `SELECT firstName, lastName, email, password, role 
        FROM users
        WHERE email like '${email}' ${password ? `and password like '${password}'` : ""}`
    );
    if (rows.length > 0) {
        return rows[0];
    }
    return;
}

//Creates a simple user account
async function register(user){
    const { email, firstName, lastName, password, confirmPassword } = user;
    let message = 'Error in creating product';

    if (password === confirmPassword) {

        // Check if user with the same email is also registered
        if (await getUserByEmailAndPassword(email)) {
            message = 'Email already used';
            return {message};
        }

        const hashedPassword = passwordHash.getHashedPassword(password);
        let role = "user"

        //query
        const result = await db.query(
            `INSERT INTO users 
            (firstName, lastName, email, password, role)
            VALUES 
            ('${firstName}', '${lastName}', '${email}', '${hashedPassword}', '${role}')`
          );

        if (result.affectedRows) {
            message = 'User registered successfully';
        }
        
        return {message};
        
    } else {
        message = 'Password and ConfirmPassword field are not identical';
        return {message};
    }
}

async function login(user) {
    const hashedPassword = passwordHash.getHashedPassword(user.password);

    let savedUser = await getUserByEmailAndPassword(user.email, hashedPassword);

    if (savedUser) {
        let token = jwt.generateAccessToken(savedUser.email, savedUser.role);
        savedUser.token = token;

        delete savedUser.password;
        
        return savedUser;
    }
    return "Email or password incorrect"
}

module.exports = {
    getUserByEmailAndPassword,
    register,
    login
}
