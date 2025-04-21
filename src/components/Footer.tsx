import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-700 py-4 sticky bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Ping Pilot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
