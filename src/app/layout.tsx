import React from "react";
import TopNavBar from "@/Components/TopNavBar";
import SideBar from "@/Components/SideBar";
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex">
        <SideBar />
        <div className="flex-1">
          <TopNavBar />
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
