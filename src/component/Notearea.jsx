import React from "react";
import './notearea.css'

function Notearea({notename,newNote,setNewNote,saveNewText}) {
  console.log(notename);
  

  return (
    <div className="notearea">
      <header className="header">
       <div className="header_initial" style={{backgroundColor:notename ? notename.color:""}}>{notename ? notename.initials:""}</div><div className="header_name">{notename ? notename.name : "Select a note group"}</div>
       </header>
       <div className="note_display">
       {notename && notename.notes.map((note, index) => (
          <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{width:"30%"}}>{new Date(note.timestamp).toLocaleString()}</p>
            <p style={{width:"70%", boxSizing:"border-box"}}>{note.Text}</p>
          </div>
        ))}
       </div>
       <footer className="note_input">
       <input
        value={newNote}
        type="text"
        onChange={(e) => setNewNote(e.target.value)}
        className="text_area"
        placeholder="Enter Your Text Here...."
      />
      <button onClick={() => saveNewText(newNote)}>addnote</button>
      </footer>
    </div>
    
  );
 
}

export default Notearea;
