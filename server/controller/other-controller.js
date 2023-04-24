import Other from '../model/other.js';

// Get all Others
export const getOthers = async (request, response) => {
    try{
        const others = await Other.find();
        response.status(200).json(others);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the Other in database
export const addOther = async (request, response) => {
    const other = request.body;
    
    const newOther = new Other(other);
    try{
        await newOther.save();
        response.status(201).json(newOther);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a Other by id
export const getOtherById = async (request, response) => {
    try{
        const other = await Other.findById(request.params.id);
        response.status(200).json(other);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited Other in the database
export const editOther = async (request, response) => {
    let other = request.body;

    const editOther = new Other(other);
    try{
        await Other.updateOne({_id: request.params.id}, editOther);
        response.status(201).json(editOther);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of Other from the database
export const deleteOther = async (request, response) => {
    try{
        await Other.deleteOne({_id: request.params.id});
        response.status(201).json("Other deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}