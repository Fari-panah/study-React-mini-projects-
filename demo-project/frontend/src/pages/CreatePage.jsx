import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { ArrowLeftIcon } from "lucide-react"
import toast from "react-hot-toast"
//import axios from "axios"
import api from "../lib/axios"

const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    //validation:
    if (!title.trim() || !content.trim()){
      toast.error("All fields are required")
      return
      
    }
    setLoading(true)
    try {
      await api.post("/notes",{
        title,
        content
      })
      toast.success("Note. created successfully!")
      navigate("/")
    } catch (error) {
      console.log("Error to create note",error);
      if (error.response.status === 429) {
        toast.error("Slow down! Y ou are creating notes too fast", {
          duration: 4000,
          icon:"💀"
        })
      }
      
      toast.error("Failed to create note.")
      
    }finally {
      setLoading(false)
    }


    
    
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
