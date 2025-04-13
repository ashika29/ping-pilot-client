"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleAvatarClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic (e.g., clear auth tokens/cookies)
    console.log("Logging out...");
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold cursor-pointer">
                Ping Pilot
              </span>
            </Link>
          </div>

          {/* Center: Navigation Menu */}
          <div className="flex space-x-6">
            <Link href="/">
              <span className="text-gray-800 hover:text-gray-600 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-800 hover:text-gray-600 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/features">
              <span className="text-gray-800 hover:text-gray-600 cursor-pointer">
                Features
              </span>
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={handleAvatarClick}
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center focus:outline-none"
              aria-label="User menu"
            >
              P
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link href="/account">
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Account
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
