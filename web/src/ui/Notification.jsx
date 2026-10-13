import React from "react";
import { LuBell } from "react-icons/lu";

function Notification({ hasNotification }) {
  return (
    <div className="relative inline-flex">
      <LuBell className="text-2xl text-gray-500" />
      {hasNotification && (
        <span className="absolute -right-0.5 -top-1 ring-2 h-2 w-2 ring-white rounded-full bg-red-700" />
      )}
    </div>
  );
}

export default Notification;
