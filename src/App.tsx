import "./App.css"
import { useState } from "react"
import NoteForm from "./components/NoteForm.jsx"
import NoteList from "./components/NoteList"
function App() {
  const [notes,setNotes] = useState([])
  return (


    <div className="appContainer">
        <div className="box">
        <h1>Notes App</h1>
        <NoteForm notes={notes} setNotes={setNotes}/>
      </div>
      <div className="savedNotesContainer">
        <NoteList notes={notes}/>
      </div>
    </div>
  )
}

export default App
