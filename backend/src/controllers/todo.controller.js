const Todo=("../models/todo_model");
const createTodo=async(req,res)=>{
    try{
        const todo=await Todo.create(req.body);
        res.status(200).send("created successfully");
    }catch(err){
        res.status(500).json({error: error.message});
    }
};

const getTodo=async(req,res)=>{
    try{
        const todo=await todo.find();
        res.status(200).json({data:todo});
    }catch(err){
        res.status(500).json({error: error.messaage});
    }
};

const updateTodos = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        );

        res.status(200).json({ data: updatedTodo });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const deleteTodo = async (req, res)=>{
  try{
    const{ id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({ message:"delete successfully"})

  }
    catch(error){
      res.status(500).json({ error: error.message})

    }
  
}