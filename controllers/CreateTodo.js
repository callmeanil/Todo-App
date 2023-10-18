// import the model
const Todo = require("../models/Todo");

//define route handler

createTodo=async(req,res)=>{
    try{
        // extract title and description from request body

        const{title,description}=req.body;
        //create a new Tod object and insert with a success flag

        const response=await Todo.create({title,description});
        // send a json response with a success flag
        res.status(200).json(
            {
            success:true,
            data:response,
            message:'entry created successfully',
            }
        );
    
    }
    catch(err){
        console.err(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:'internal server error',
            message:err.message,
            
        })
        
    }
}
module.exports=createTodo;


