import { useState } from "react"
import TextBox from "./TextBox"
import SelectComponent from "./SelectComponent"

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
    const priorityAry = ["High", "Medium", "Low"]
    const categoryAry = ["Work","Personal","Ideas"] 
  return (  
    <div className="box">
        <h1>Notes</h1>
        <form>  
            <TextBox noteObj={noteObj} updateNoteObj={updateNoteObj} />

            <SelectComponent 
            noteObj={noteObj} 
            updateNoteObj={updateNoteObj}
            optionsAry={priorityAry} 
            selectLabel={"Priority"}
            />



            <SelectComponent 
            noteObj={noteObj} 
            updateNoteObj={updateNoteObj}
            optionsAry={categoryAry} 
            selectLabel={"Category"}
            />

            <div className="descBox">
                <label htmlFor="description">Description</label>
                <textarea value={noteObj.description} onChange={(e)=> updateNoteObj("description",e.target.value)} name="" id=""></textarea>        
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>  
    </div> 
    )
}

export default NoteForm