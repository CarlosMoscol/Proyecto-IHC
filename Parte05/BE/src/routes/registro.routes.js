const { Router } = require ('express');
const {
    getAllRegistro,
    getRegistro,
    createRegistro,
    deleteRegistro,
    updateRegistro,
    createRegistroAfil,
    getAfil
} = require ('../controllers/registro.controller')

const {
    createTransporte,
    deleteTransporte,
    getAllTransporte,
    getTransporte,
    updateTransporte
} = require ( '../controllers/transport.controller' )

const {
    createAlojamiento,
    deleteAlojamiento,
    getAllAlojamiento,
    getAlojamiento,
    updateAlojamiento
} = require ('../controllers/accommodation.controller')

const userController = require('../controllers/login.controller')
const { signup, login } = userController
const userAuth = require('../middlewares/userAuth')

const router = Router();
/**
 * Rutas de la API para el registro e inicio de sesión de 
 * clientes (ya sea turista o afiliado) que además incluye 
 * un servicio de autentificación.
 */

router.get('/Registro', getAllRegistro)
router.get('/Registro/:idclient', getRegistro)
router.get('/Registro/afil/:idclient', getAfil)
router.post('/Registro', userAuth.saveUser, createRegistro)
router.post('/Registro/afil', createRegistroAfil)

//router.post('/signup', userAuth.saveUser, signup)
router.post('/login', login )

router.delete('/Registro/:idclient', deleteRegistro)
router.put('/Registro/:idclient', updateRegistro)


/**
 * Rutas de la API para los transportes (CRUD)
 */

router.get('/Transporte', getAllTransporte)
router.get('/Transporte/:idaffiliate', getTransporte)
router.post('/Transporte', createTransporte)
router.delete('/Transporte/:idtransport', deleteTransporte)
router.put('/Transporte/:idtransport', updateTransporte)

/**
 * Rutas de la API para los sitios turisticos (CRUD)
 */



/**
 * Rutas de la API para los alojamientos (CRUD)
 */

router.get('/Alojamiento', getAllAlojamiento)
router.get('/Alojamiento/:idaffiliate', getAlojamiento)
router.post('/Alojamiento', createAlojamiento)
router.delete('/Alojamiento/:idtransport', deleteAlojamiento)
router.put('/Alojamiento/:idaccommodation', updateAlojamiento)




module.exports = router;