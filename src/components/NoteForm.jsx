import { useState } from "react"
function NoteForm() {
    // const [title, setTile] = useState("");
    // const [priority, setPriority] = useState("");
    // const [category, setCategory] = useState("");
    // const [description, setDescription] = useState("");


    const [noteObj, setNoteObj] = useState(
        {
            title: "",
            priority:"",
            category:"",
            description:""
        }
    );

    const updateNoteObj = (key, value)=> {
        const noteObjCopy = {...noteObj};
        noteObjCopy[key] = value;
        setNoteObj(noteObjCopy)
    }

  return (
    <form >
        <div className="inputBox">
            <label htmlFor="title">Title</label>
            <input placeholder="Title" onChange={(e)=> updateNoteObj("title", e.target.value)} type="text" id="title" />
        </div>
        <div className="inputBox">
            <label htmlFor="title">Priority</label>
            <select value={noteObj.priority} onChange={(e)=> updateNoteObj("priority",e.target.value)} name="" id="">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
        <div className="inputBox">
            <label htmlFor="category">Category</label>
            <select value={noteObj.category}  onChange={(e)=> updateNoteObj("category",e.target.value)} name="" id="">
                <option hidden disabled value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Ideas">Ideas</option>
            </select>
        </div>
        <div className="descBox">
            <label htmlFor="Description">Description</label>
            <textarea onChange={(e)=> updateNoteObj("description",e.target.value)} name="" id=""></textarea>        
        </div>
        <button>Submit</button>
    </form>  
    )
}

export default NoteForm