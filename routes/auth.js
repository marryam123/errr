const { Router } = require("express")
const verifyToken = require("../middleware/verifyToken")
const router = Router();

const { signupUser, loginUser, getUserData,Adminsignup,adminlogin, getAdminData,getAllUsers,getusercategory} = require("../controllers/user")
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/getUserData', verifyToken, getUserData)
router.get('/users',getAllUsers);
router.get('/users/:category', getusercategory);
router.post('/adminsignup', Adminsignup)
router.post('/adminlogin', adminlogin)
router.get('/getadmindata', verifyToken, getAdminData)


module.exports = router