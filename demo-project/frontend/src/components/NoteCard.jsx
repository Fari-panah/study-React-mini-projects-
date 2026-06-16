import { PenSquareIcon, Trash2Icon } from "lucide-react"
import {Link} from "react-router-dom"
import { formatDate } from "../lib/utils"
import api from "../lib/axios"



const NoteCard = ({note}) => {
  const handleDelete = async(e, id) => {
    //ignores link, because component is defined in link
    e.preventDefault()

    if (!window.confirm("Are you sure you want to delete this note?"))
      return
    try {
     await api.delete(/notes/)
      
    } catch (error) {
      console.log("", error);
      
      
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
                <button className="btn btn-xs btn-ghost text-error" onClick={(e)=>handleDelete(e, id)}><Trash2Icon /></button>
            </div>
        </div>

      </Link>
    

    </div>
  
  

  )
}

export default NoteCard
