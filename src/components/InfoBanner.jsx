import React from "react";

const InfoBanner = ({ onClose }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-50 border rounded-lg px-6 py-3 flex gap-4">
      <span className="text-sm text-blue-900">
        Enjoy Figma Design for up to 3 days while admin reviews.
      </span>
      <button onClick={onClose}>✕</button>
    </div>
  );
};

export default InfoBanner;
