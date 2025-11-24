import "./App.css"

import ToggleVisBttn from "./components/ToggleVisBttn"
import { useState } from "react"
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList"




function App() {
  const [notes,setNotes] = useState([])
  const [isVisible, setIsVisible] = useState(true);

  


  if (isVisible) {
      return (

    <div className="appContainer">
        
      <ToggleVisBttn 
      setIsVisible={setIsVisible} 
      isVisible={isVisible}
      />

        <div className="box">
          <h1>Notes</h1>
          <NoteForm
          notes={notes} 
          setNotes={setNotes}/>
        </div>

      <div className="savedNotesContainer">
        <NoteList notes={notes}/>
      </div>
    </div>
  )
  }

  else {
    return (
      (
        <>
          <ToggleVisBttn 
            setIsVisible={setIsVisible}
            isVisible={isVisible}
          />

          <div 
            style={{}} 
            className="savedNotesContainer">
            <NoteList notes={notes}/>
          </div>
        </>

        

      )
    )
  }

}

export default App
