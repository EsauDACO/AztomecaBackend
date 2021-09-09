const router = require ('express').Router()
const { getAllProducts, createProduct, findProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.post('/createProduct', createProduct)
router.get('/allProducts', getAllProducts)
router.get('/detail/:id',findProduct)
router.patch('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

module.exports = router