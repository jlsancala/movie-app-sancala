import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header({ searchTerm, setSearchTerm, onSearch }) {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-3">
        <img src="/netflix.png" alt="NGEFLIX Logo" className="h-10 w-auto" />
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-red-600">NGE</span>FLIX
        </h1>
      </div>

      {/* Right: Navigation + Search */}
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-4 text-sm md:text-lg font-semibold">
          <Link
            to="/"
            className={`relative px-3 py-1 rounded-md transition-all duration-200 ${
              location.pathname === "/"
                ? "bg-red-600 text-white"
                : "hover:bg-red-600 hover:text-white text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={`relative px-3 py-1 rounded-md transition-all duration-200 ${
              location.pathname === "/favorites"
                ? "bg-red-600 text-white"
                : "hover:bg-red-600 hover:text-white text-gray-300"
            }`}
          >
            Favorites
          </Link>
        </nav>

        {/* Search button + input */}
        <div className="relative">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-md bg-[#222] hover:bg-red-600 transition duration-200"
          >
            {/* Search icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z"
              />
            </svg>
          </button>

          {/* Search Input */}
          {showSearch && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
              placeholder="Search..."
              className="absolute right-0 top-10 bg-[#222] text-white text-sm px-3 py-2 rounded-md w-48 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all duration-300 shadow-lg"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
