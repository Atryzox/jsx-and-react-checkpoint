import React from "react";
import image from "../Images/image.jpg";

function ProfilePhoto() {
  return (
    <div>
      <img
        src={image}
        alt="Profile"
        className="ProfilePhoto"
        style={{height: 250,
        width: 500}}
        
        
      />
    </div>
  );
}

export default ProfilePhoto;
