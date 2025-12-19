import React from "react";
import { Store, ShoppingBag, Send, Truck, Package } from "lucide-react";
import RoleCard from "./RoleCard";

const RoleSelectionSection = ({ selectedRole, setSelectedRole, onContinue }) => {
  const roles = [
    { label: "Business Owner", icon: Store },
    { label: "Shopper", icon: ShoppingBag },
    { label: "Sender", icon: Send },
    { label: "Transporter", icon: Truck },
    { label: "Courier", icon: Package },
  ];

  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-12">Select Your Role</h1>

      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {roles.map((role) => (
          <RoleCard
            key={role.label}
            icon={role.icon}
            label={role.label}
            selected={selectedRole === role.label}
            onClick={() => setSelectedRole(role.label)}
          />
        ))}
      </div>

      <button
        onClick={onContinue}
        className="px-12 py-3 bg-blue-900 text-white rounded-lg font-semibold"
      >
        Continue
      </button>
    </section>
  );
};

export default RoleSelectionSection;
