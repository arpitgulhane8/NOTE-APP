import React from "react";
import "./notearea1.css";
import noteimg from "../assest/note_img.png"
import lock from "../assest/lock.png"
import vector from "../assest/Vector.png"


function Notearea({ notename, newNote, setNewNote, saveNewText }) {

 
  if (!notename) {
     //Render only the image if notename is null
    return (
      <div className="notearea_home">
        <img src={noteimg} alt="note_img" className="note_img" />
        <p1>Pocket Notes</p1>
        <p2>Send and receive messages without keeping your phone online.
         Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p2>
       
       <div className="encrypted"><img src={lock} alt="lockimg" className="lockimg"/><p>end-to-end encrypted</p></div>
      </div>
    );
  }

  return (
    <div className="notearea">
      <header className="header">
        <p
          className="header_initial"
          style={{ backgroundColor: notename ? notename.color : "" }}
        >
          {notename ? notename.initials : ""}
        </p>

        <div className="header_name">
          {notename ? notename.name : "Select a note group"}
        </div>
      </header>

     
      <div className="note_display">
        {notename &&
          notename.notes.map((note, index) => (
            <div className="container"
              key={index}
            >
      
              <div className="display_date">
                {new Date(note.timestamp).toLocaleString()}
        
              </div>

              <div className="ndisplay_text">
              {note.Text}
            
              </div>
            </div>
          ))}
      </div>
      

      <footer className="note_input">
        <textarea
          value={newNote}
          type="text"
          onChange={(e) => setNewNote(e.target.value)}
          className="text_area"
          placeholder="Enter Your Text Here...."
        />

        <button className="add_btn" onClick={() => saveNewText(newNote)}>
          <img  style={{width:"10px",height:"10px"}} src={vector} alt="vector"/>
        </button>
      </footer>
    </div>
  );
}

export default Notearea;

