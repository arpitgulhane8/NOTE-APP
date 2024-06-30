import React, { useState } from "react";
import "./slidebar1.css";

function Slidebar({ onAddNotes, notelist, onSelectNote }) {

  const [selectedNoteGroup, setSelectedNoteGroup] = useState("name:''");

  const handelselectnote = (group) => {
    setSelectedNoteGroup(group);
    onSelectNote(group);
  };

  return (
    <div className="slidebar">
      <p className="spocket_note">Pocket Notes</p>

      <div>
        <button className="screate_note" onClick={onAddNotes}>
          + Create Notes groups
        </button>
        <div style={{overflowY:"auto",height:"68vh"}}>
        {notelist.map((group, index) => (
          <div
            className="sgroup_btn"
            key={index}
            onClick={() => handelselectnote(group)}
            style={{
              backgroundColor:
                selectedNoteGroup.name === group.name ? "#F7ECDC" : "",
            }}
          >
   
            <div className="sinitials" style={{ backgroundColor: group.color }}>
              <p className="initialp">{group.initials}</p>
            </div>
   
            <div className="sgroup_name">{group.name}</div>
          
          </div>
        ))}
   </div>   
      </div>
    </div>
  );
}

export default Slidebar;

