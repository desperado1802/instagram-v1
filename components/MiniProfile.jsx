import { useSession, signOut } from "next-auth/react";
import React from "react";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-6">
      <img
        className="h-16 w-16 object-cover rounded-full border p-[2px]"
        src={session?.user.image}
        alt="profile-pic"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}
