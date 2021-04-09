const Router = require('express')
const router = new Router()
const userController = require('../controllers/useController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.chack )

module.exports = router