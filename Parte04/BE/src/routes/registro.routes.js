const { Router } = require ('express');
const {
    getAllRegistro,
    getRegistro,
    createRegistro,
    deleteRegistro,
    updateRegistro,
    createRegistroAfil
} = require ('../controllers/registro.controller')

const userController = require('../controllers/login.controller')
const { signup, login } = userController
const userAuth = require('../middlewares/userAuth')


const router = Router();

router.get('/Registro', getAllRegistro)

router.get('/Registro/:idclient', getRegistro)

router.post('/Registro', userAuth.saveUser, createRegistro)

router.post('/Registro/afil', createRegistroAfil)



//router.post('/signup', userAuth.saveUser, signup)
router.post('/login', login )




router.delete('/Registro/:idclient', deleteRegistro)

router.put('/Registro/:idclient', updateRegistro)


module.exports = router;