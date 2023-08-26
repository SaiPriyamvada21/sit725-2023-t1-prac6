let express=require('express');
let router = express.Router();

let controller=require('../controllers/controller');

router.get('/', (req,res) => {
    controller.getAllState(req,res);
});

router.post('/', (req,res)=>{
    
    controller.postState(req,res);
});

router.delete('/', (req,res)=>{
    
    controller.deleteState(req,res);
});

module.exports = router;