import React, { useEffect, useState } from "react";
import minifaker from "minifaker";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="ml-6 mt-4">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions For You</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt="profile-pic"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-gray-400 text-sm truncate w-[230px]">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="text-blue-400 font-semibold text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
