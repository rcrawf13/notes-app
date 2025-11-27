const TextBox = ({noteObj,updateNoteObj}) => {
  return (
        <div className="inputBox">
            <label htmlFor="title">Title</label>
            <input value={noteObj.title} placeholder="Title" onChange={(e)=> updateNoteObj("title", e.target.value)} type="text" id="title" />
        </div>
  )
}

export default TextBox