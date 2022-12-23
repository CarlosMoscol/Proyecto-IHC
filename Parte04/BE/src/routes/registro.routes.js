const { Router } = require ('express');
const {
    getAllRegistro,
    getRegistro,
    createRegistro,
    deleteRegistro,
    updateRegistro
} = require ('../controllers/registro.controller')

const router = Router();

router.get('/Registro', getAllRegistro)

router.get('/Registro/:idclient', getRegistro)

router.post('/Registro', createRegistro)

router.delete('/Registro/:idclient', deleteRegistro)

router.put('/Registro/:idclient', updateRegistro)


module.exports = router;