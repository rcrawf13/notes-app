import "./App.css"

import ToggleVisBttn from "./components/ToggleVisBttn"
import { useState } from "react"
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList"




function App() {
  const [notes,setNotes] = useState([])
  const [isVisible, setIsVisible] = useState(true);
  const [css,setCss] = useState({});
  const hideFakebox = () => {
    const hideCss = {display:"none"};
    setCss(hideCss);
  }
  


  if (isVisible) {
      return (
    <div className="gridContainer">
      <ToggleVisBttn 
      setIsVisible={setIsVisible} 
      isVisible={isVisible}
      />


          <NoteForm
          notes={notes} 
          setNotes={setNotes}/>

        

        <div className="savedNotesContainer">
          <NoteList notes={notes}/>
        </div>
    </div>
  )
  }

  else {
    return (
      (
          <div style={{display:"flex",flexDirection:"column"}} className="gridContainer">
          
            <div style={css} onAnimationEnd={()=>hideFakebox} className="fakeBox"></div>
            <div>
              <ToggleVisBttn 
              setIsVisible={setIsVisible}
              isVisible={isVisible}
              /></div>
              
                <NoteList notes={notes}/>
              
          </div>
      )
    )
  }

}

export default App
