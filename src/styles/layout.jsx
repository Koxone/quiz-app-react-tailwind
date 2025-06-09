import React from "react";
import MainHeader from "../components/header/MainHeader";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#313e51] text-gray-900 dark:text-white">
      {/* Header */}


      {/* Main content */}
      <main className="flex-1 p-4 overflow-hidden">{children}</main>
    </div>
  );
}
