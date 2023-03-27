import React from "react";

export default function Story({ username, img }) {
  return (
    <div>
      <img src={img} alt="photo-story" />
      <p>{username}</p>
    </div>
  );
}
