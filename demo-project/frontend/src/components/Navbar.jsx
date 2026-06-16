import {PlusIcon} from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (

  <div className="navbar bg-base-100 shadow-sm">
   <div className="navbar-start">
    <h1 className="text-3xl font-bold text-primary tracking-tight">ThinkBoard</h1>
    </div>
  
     <div className="navbar-end">
      <Link to="/create" className="btn btn-primary">
      <PlusIcon className="w-5 h-5 mr-2" />
      <span>New Note</span>
      </Link>
     </div>
     
  </div>

  )
}

export default Navbar
