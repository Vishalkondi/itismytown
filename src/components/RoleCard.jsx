import React from "react";

const RoleCard = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-40 h-40 rounded-xl border flex flex-col items-center justify-center transition
        ${selected ? "border-green-700 bg-green-50" : "border-gray-300 bg-white"}
      `}
    >
      <div className={`p-4 rounded-full mb-3 ${selected ? "bg-green-700" : "bg-gray-100"}`}>
        <Icon className={`w-7 h-7 ${selected ? "text-white" : "text-gray-600"}`} />
      </div>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default RoleCard;
