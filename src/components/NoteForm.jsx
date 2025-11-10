import { useState } from "react"
function NoteForm({setNotes, notes}) {
    // const [title, setTile] = useState("");
    // const [priority, setPriority] = useState("");
    // const [category, setCategory] = useState("");
    // const [description, setDescription] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if(!noteObj.title || !noteObj.priority) return;

        const newNote = {id:Date.now(), ...noteObj};

        setNotes([newNote ,...notes])
        setNoteObj(
        {
            title: "",
            priority:"",
            category:"",
            description:""
        }
    )


    }

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
            <input value={noteObj.title} placeholder="Title" onChange={(e)=> updateNoteObj("title", e.target.value)} type="text" id="title" />
        </div>
        <div className="inputBox">
            <label htmlFor="priority">Priority</label>
            <select value={noteObj.priority} onChange={(e)=> updateNoteObj("priority",e.target.value)} name="" id="">
                <option hidden disabled value="">Select Priority</option>
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
            <label htmlFor="description">Description</label>
            <textarea value={noteObj.description} onChange={(e)=> updateNoteObj("description",e.target.value)} name="" id=""></textarea>        
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </form>  
    )
}

export default NoteForm