import { PenSquareIcon, Trash2Icon } from "lucide-react"
import {Link} from "react-router-dom"
import { formatDate } from "../lib/utils"
import api from "../lib/axios"
import toast from "react-hot-toast"



const NoteCard = ({note, setNotes}) => {
  const handleDelete = async(e, id) => {
    //ignores link, because component is defined in link
    e.preventDefault()

    if (!window.confirm("Are you sure you want to delete this note?"))
      return
    try {
     await api.delete(`/notes/${id}`)

     //after deleting the note, I want immedietlly delete that without refresh the page
     //Notes are saved in arry,so from homePage I called setNotes to filter array, because deleted note
     //React doesnt update immedietly states so needs callback update function
     setNotes(prev => prev.filter(note => note.id !== id))
     toast.success("Note deleted successfully")

      
    } catch (error) {
      console.log("error in handleDelete", error);
      toast.error("Failed to delete note")
      
    }
  
}
  return (
    <div  className="card card-border bg-base-100 w-96 border-t-4 border-success  shadow-sm">
          <Link to={`/note/${note._id}`} >
        <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p>{note.content}</p>
            <span className="text-sm text-base-content/60">{formatDate(new Date(note.createdAt))}</span>
            <div className="card-actions justify-end">
                <PenSquareIcon className="size-4" />
                <button className="btn btn-xs btn-ghost text-error" onClick={(e)=>handleDelete(e, note._id)}><Trash2Icon /></button>
            </div>
        </div>

      </Link>
    

    </div>
  
  

  )
}

export default NoteCard
