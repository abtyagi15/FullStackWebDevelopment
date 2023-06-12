const Todo = require('../models/Todo');

const getTodo = async(req,res) => {
    try{
        // getch all the todos from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success: true,
            database: todos,
            message: "Entire todo data is fetched"
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error:err.message,
            message: "Error in the server"
        })
        }
    }


module.exports = getTodo;

exports.getTodoById = async(req,res) => {
    try{
        const  id = req.params.id;
        const todo = await Todo.findById({_id: id});


        // data not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id"
            })
        }
        res.status(200).json({
            success:true,
            data: todo,
            message: `todo ${id} data successfuly fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message:"Server Error"
        })
        }
    }


