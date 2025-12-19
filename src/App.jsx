import React, { useState } from "react";
import Header from "./components/Header";
import RoleSelectionSection from "./components/RoleSelectionSection";
import RegistrationFormSection from "./components/RegistrationFormSection";
import InfoBanner from "./components/InfoBanner";

export default function App() {
  const [selectedRole, setSelectedRole] = useState("Shopper");
  const [showRegistration, setShowRegistration] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const handleContinue = () => {
    setShowRegistration(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {!showRegistration ? (
          <RoleSelectionSection
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            onContinue={handleContinue}
          />
        ) : (
          <div className="flex justify-center">
            <RegistrationFormSection role={selectedRole} />
          </div>
        )}
      </main>

      {showBanner && <InfoBanner onClose={() => setShowBanner(false)} />}
    </div>
  );
}
