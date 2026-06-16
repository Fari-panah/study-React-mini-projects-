import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"


const App = () => {
  return (
    // we can also here to add forest theme, not in index.html
    <div className="relative h-full w-full"> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />

      </Routes>
      
    </div>
  )
}

export default App

