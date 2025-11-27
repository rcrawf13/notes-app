const SelectComponent = ({optionsAry, selectLabel,noteObj,updateNoteObj}) => {

  return (
        <div className="inputBox">
            <label htmlFor="priority">{selectLabel}</label>
            <select value={noteObj.selectLabel} onChange={(e)=> updateNoteObj("priority",e.target.value)} name="" id="">
                <option hidden disabled value="">Select {selectLabel}</option>
                {
                    optionsAry.map((item)=> {
                        return (
                            <option value={item}>{item}</option>
                            
                        )
                    })
                    
                
                }
            </select>  
            </div>    
        )
            
}

export default SelectComponent