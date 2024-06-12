import React,{useState} from "react";
import './Slidebar.css'


function Slidebar({ onAddNotes, notelist,onSelectNote }) {
  
  const [selectedNoteGroup, setSelectedNoteGroup] = useState(null);

  const handelselectnote = (group) => {

    setSelectedNoteGroup(group);
    onSelectNote(group);
  }

  return (
    <div className="slidebar" >
      <p className="pocket_note">Pocket Notes</p>
      <div>
        <button
        className="create_note"
          onClick={onAddNotes}
        >
         + Create Notes groups
        </button>
        {notelist.map((group, index) => (
          <div className="group_btn"
            key={index}
            onClick={() => handelselectnote(group)}
            style={{
              backgroundColor: selectedNoteGroup.name === group.name ? "#F7ECDC" : "",
            }}
          >
            <div className="initials" style={{backgroundColor:group.color}}>{group.initials}</div><div className="group_name">{group.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slidebar;