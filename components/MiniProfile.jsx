import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-6">
      <img
        className="h-16 w-16 object-cover rounded-full border p-[2px]"
        src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
        alt="profile-pic"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithsalim</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}
