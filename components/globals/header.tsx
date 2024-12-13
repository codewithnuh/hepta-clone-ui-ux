import { MenuIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 container text-white">
      <nav className="flex justify-between">
        <span className="font-bold text-3xl ">HEPTA</span>
        <MenuIcon />
      </nav>
    </header>
  );
};

export default Header;
