import { MapPin, Store } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-yellow-400 rounded-lg px-3 py-2">
            <span className="text-black font-bold text-xl">IT IS</span>
          </div>
          <span className="text-gray-800 font-bold text-xl ml-1">MYTOWN</span>
        </div>
      </div>
    </header>
  );
};

export default Header; // 🔥 THIS LINE IS REQUIRED
