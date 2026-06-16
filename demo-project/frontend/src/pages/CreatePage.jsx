import { Link } from "react-router-dom"
import { useState } from "react"
import { ArrowLeftIcon } from "lucide-react"

const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(content);
    
    
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">

        <Link to={"/"} className="btn btn-ghost mb-6">
         <ArrowLeftIcon className="size-5" />
         Back to Notes
        </Link>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Create New Note</legend>

          <label className="label">Title</label>
          <input type="text" className="input" placeholder="Note Title" 
            value={title} onChange={e => setTitle(e.target.value)}/>

          <label className="label">Content</label>
          <input type="text" className="input" placeholder="Write your note here..." 
           value={content} onChange={e => setContent(e.target.value)}/>
           <br />

          <button type= "submit" disabled={loading} className="btn  btn-primary">
            {loading ? "Creating..." : "Create Note"}
            </button>
        </fieldset>
      </form>




      </div>
      
    </div>
  )
}

export default CreatePage
