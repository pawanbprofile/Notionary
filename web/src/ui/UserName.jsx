import React from "react";
import Initial from "./Initial";

function UserName({ name }) {
  return (
    <div className="flex items-center justify-between p-2 gap-2">
      <Initial name={name} />
      <span className="text-lg font-medium">{name}</span>
    </div>
  );
}

export default UserName;
