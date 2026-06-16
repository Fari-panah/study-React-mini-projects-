import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
     try{
        const notes = await Note.find().sort({createdAt:-1}) //newest first
        res.status(200).json(notes)
     }catch(error){
        console.log("Error in getAllNotes", error);
        res.status(500).json({message: "Internal server error"})
        

     }

}

export async function createNote(req, res){
    try{
        const {title, content} = req.body
        const newNote = new Note({title , content})
        await newNote.save()
        res.status(201).json({message:"Note created successfullly"})
    }catch(error){
         console.log("Error in getAllNotes", error);
        res.status(500).json({message: "Internal server error"})
        

    }
}

export async function updateNote(req, res){
    try {
       const{title, content} = req.body
       await Note.findByIdAndUpdate(req.params.id, {title,content})
       res.status(200).json({message: "Note updated successfully"})
    } catch (error) {
         console.log("Error in updateNote", error);
        res.status(500).json({message: "Internal server error"})
        
    }
}
export async function getNoteById(req, res){
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({message:"Note not found!"})
            res.json(note)
        
    } catch (error) {
          console.log("Error in getNote", error);
        res.status(500).json({message: "Internal server error"})
        
    }
}


export async function deleteNote(req, res){
    try {
        const deletednote = await Note.findByIdAndDelete(req.params.id)
        if(!deletednote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message: "Note deleted successfully"})
    } catch (error) {
        console.log("Error in deletedNote", error);
        res.status(500).json({message: "Internal server error"})
        
    }
}
