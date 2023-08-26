let collection = require('../models/state');

const postState=(req,res)=>{
    let state = req.body;
    collection.postState(state, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
});
}

const getAllState=(req,res)=>{
    collection.getAllState((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all states successful'});
        }
    });
}

const deleteState=(req,res)=>{
    let state=req.body;
    collection.deleteState(state,(err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'succsess'});
        }
    });
}
module.exports={postState,getAllState,deleteState}