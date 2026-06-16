import { PenSquareIcon, Trash2Icon } from "lucide-react"
import {Link} from "react-router-dom"
import { formatDate } from "../lib/utils"

const NoteCard = ({note}) => {
  return (
    <div  className="card card-border bg-base-100 w-96 border-t-4 border-success  shadow-sm">
          <Link to={`/note/${note._id}`} >
        <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p>{note.content}</p>
            <span className="text-sm text-base-content/60">{formatDate(new Date(note.createdAt))}</span>
            <div className="card-actions justify-end">
                <PenSquareIcon className="size-4" />
                <button className="btn btn-xs btn-ghost text-error"><Trash2Icon /></button>
            </div>
        </div>

    </Link>
    

    </div>
  
  

  )
}

export default NoteCard
