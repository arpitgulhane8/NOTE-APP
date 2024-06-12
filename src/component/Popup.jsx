import React from "react";
import { useState } from "react";
import './popup.css'
function Popup({ onSave, onClose }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#B38BFA");

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const getInitials = (name) => {
    const words = name.trim().split(" ");
    const initials = words.slice(0, 2).map(word => word[0].toUpperCase()).join("");
    return initials;
  };

  const saveGroup = () => {
    if (!name.trim()) return;
    const newGroup = {
      name,
      color,
      notes: [],
      initials:getInitials(name)
    };
    onSave(newGroup)
    onClose()
  };

  return (
    <div
      className="popup"
    >
      <p className="popup_note">Create New Notes group</p>
      <div className="group_name">
       <label className="group_label">Group Name</label> 
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your group name...."
          style={{ borderRadius: "5px", width: "300px" }}
        />
      </div>
      <div className="color_picker">
        <label className="color_option">Color Option </label>
        {colors.map((colors, index) => (
          <button className="color_btn"
            key={index}
            value={colors}
            style={{
              backgroundColor: colors,
            }}
            onClick={() => setColor(colors)}
          />
        ))}
      </div>
      <button
        onClick={saveGroup}
        style={{
          backgroundColor: "black",
          color: "white",
          marginLeft: "350px",
        }}
      >
        Create
      </button>
    </div>
  );
}

export default Popup;
