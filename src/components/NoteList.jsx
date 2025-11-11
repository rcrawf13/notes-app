const NoteList = ({notes}) => {

    
const priorityCheck = (priorityLevel) => {
    switch(priorityLevel) {
        case "High":
            return "#FF5656";
        case "Medium":
            return "#FFA239";
        case "Low":
            return "#8CE4FF"
        default:
            return ""
    }
}
    const reversedNotes = notes.slice().reverse()

  return (
    reversedNotes.map((noteObj, index)=>{
        let priorityColor= "";
        priorityColor = priorityCheck(noteObj.priority);
        return(
            <div className="savedNote">
                <div style={{backgroundColor:`${priorityColor}`}} className="priorityColor" >
                </div>
                <div className="verticalCutOut"></div>
                <div className="fontLayout">
                    <h2>{noteObj.title}</h2>
                    <p>{noteObj.description}</p>
                </div>
            </div>
            )
    })
  )
}

export default NoteList