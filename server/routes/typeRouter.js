const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/chackRoleMiddleware')

router.post('/',checkRole("ADMIN"), typeController.craete);
router.get('/', typeController.getAll)

module.exports = router