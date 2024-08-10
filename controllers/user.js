const bycrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');
const userCheck = require('../schema/userscema')
const adminCheck = require('../schema/adminscema')
const signupUser = async (req, res) => {
    const { name, email, password,category } = req.body
    console.log("req body", req.body)
    try {
        const salt = await bycrypt.genSalt(10)
        console.log("salt", salt)
        const hashedPassword = await bycrypt.hash(password, salt)
        console.log("hashedPassword", hashedPassword)
        const userCheckres = await userCheck({ email, name, password: hashedPassword,category })
        const saveRes = await userCheckres.save()
        console.log("saveRes", saveRes)
        res.send({
            status: 200,
            message: "signupUser Api is working",
            saveRes: saveRes,
            userCheckres: userCheckres
        })
    }
    catch (e) {
        console.log(e.message)
        res.send({
            status: 500,
            message: e.message,
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log("req body", req.body)
    try {
       
        const databaseUser = await userCheck.findOne({ email });
        console.log("Database user found:", databaseUser);
        if (databaseUser) {
            const hashedPassword = databaseUser.password;
            const compareRes = await bycrypt.compare(password, hashedPassword);
            console.log("Password ", compareRes);
            if (compareRes) {
                const JWT_SECRET_KEY = 'attendence';
                console.log("JWT_SECRET_KEY:", JWT_SECRET_KEY);
                const token = jwt.sign({ id: databaseUser._id, email: databaseUser.email }, JWT_SECRET_KEY, { expiresIn: '1h' });
                console.log("Generated token:", token);
                res.status(200).send({
                    message: "Login successful",
                    token: token
                });
            }else {
                console.log("Incorrect password");
                res.status(401).send({
                    message: "Incorrect password"
                });
            }
        } else {
            console.log("Incorrect email");
            res.status(401).send({
                message: "Incorrect email"
            });
        }
    } catch (e) {
        console.log("Login error:", e.message);
        res.status(500).send({
            message: e.message,
        });
    }
}

const getUserData = async (req, res) => {
   
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
                return res.status(401).send({ message: "No token provided" });
            }
            const decoded = jwt.verify(token, 'attendence');
            const email = decoded.email;
            const user = await userCheck.findOne({ email });
            if (user) {
                res.status(200).send({
                    message: "User data retrieved successfully",
                    user
                });
            } else {
                res.status(404).send({ message: "User not found" });
            }
        
    } catch (e) {
            console.error(e.message);
            res.status(500).send({ message: e.message });
        }
};

  const getAllUsers = async (req, res) => {
    try {
      const users = await userCheck.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Server Error');
    }
  };
  const getusercategory = async (req, res) => {
    try {
        const category = req.params.category;
        const users = await userCheck.find({ category: category });
    
        if (users.length === 0) {
          return res.status(404).json({ message: 'No users found for this category' });
        }
    
        res.json(users);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
  }

const Adminsignup = async (req, res) => {
    const { name, email, password } = req.body
    console.log("req body", req.body)
    try {
        const salt = await bycrypt.genSalt(10)
        console.log("salt", salt)
        const hashedPassword = await bycrypt.hash(password, salt)
        console.log("hashedPassword", hashedPassword)
        const adminCheckres = await adminCheck({ email, name, password: hashedPassword })
        const saveRes = await adminCheckres.save()
        console.log("saveRes", saveRes)
        res.send({
            status: 200,
            message: " admin singup Api is working",
            saveRes: saveRes,
            adminCheckres: adminCheckres
        })
    }
    catch (e) {
        console.log(e.message)
        res.send({
            status: 500,
            message: e.message,
        })
    }
}
const adminlogin = async (req, res) => {
    const { email, password } = req.body
    console.log("req body", req.body)
    console.log(adminCheck)
    try {
       
        const databaseUser = await adminCheck.findOne({ email });
        console.log("Database user found:", databaseUser);
        if (databaseUser) {
            const hashedPassword = databaseUser.password;
            const compareRes = await bycrypt.compare(password, hashedPassword);
            console.log("Password ", compareRes);
            if (compareRes) {
                const JWT_SECRET_KEY = 'attendence';
                console.log("JWT_SECRET_KEY:", JWT_SECRET_KEY);
                const token = jwt.sign({ id: databaseUser._id, email: databaseUser.email }, JWT_SECRET_KEY, { expiresIn: '1h' });
                console.log("Generated token:", token);
                res.status(200).send({
                    message: "Login successful",
                    token: token
                });
            }else {
                console.log("Incorrect password");
                res.status(401).send({
                    message: "Incorrect password"
                });
            }
        } else {
            console.log("Incorrect email");
            res.status(401).send({
                message: "Incorrect email"
            });
        }
    } catch (e) {
        console.log("Login error:", e.message);
        res.status(500).send({
            message: e.message,
        });
    }
}
const getAdminData = async (req, res) => {
   
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).send({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, 'attendence');
        const email = decoded.email;
        const admin = await adminCheck.findOne({ email });
        if (admin) {
            res.status(200).send({
                message: "Admin data retrieved successfully",
                admin
            });
        } else {
            res.status(404).send({ message: "Admin not found" });
        }
    
} catch (e) {
        console.error(e.message);
        res.status(500).send({ message: e.message });
    }
};
module.exports = {
    Adminsignup,
    adminlogin,
    getAllUsers,
    getusercategory,
   signupUser,
    loginUser,
    getUserData,
    getAdminData
   }; 

    


