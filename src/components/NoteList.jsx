const NoteList = ({notes}) => {
  return (
    notes.map((noteObj, index)=>{
        return(
            <div className="savedNote">
                <div className="priorityColor"></div>
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