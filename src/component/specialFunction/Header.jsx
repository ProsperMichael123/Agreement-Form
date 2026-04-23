import React from 'react';
import { Menu, Bell } from 'lucide-react';
import logo from "../../assets/swiftImage.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 ">
      
      <div className="flex items-center justify-between px-6 h-14  ">
        
        
        <div>
          <img src={logo} alt="logo" className="h-11 w-auto" />
        </div>

        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-slate-900 border-b-2 border-slate-900 pb-1">
            Contract
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-600 border-2 border-dashed border-slate-200 px-2 py-1 rounded">
            Register
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-600 border-2 border-dashed border-slate-200 px-2 py-1 rounded">
            Admin
          </a>

          <div className="bg-slate-800 p-1.5 rounded-lg text-orange-400">
            <Bell className="w-4 h-4" fill="currentColor" />
          </div>
        </nav>

        {/* Mobile Right (Optional second item if you want) */}
        <div className="md:hidden">
          <Bell className="w-5 h-5 text-slate-600" />
        </div>

      </div>
    </header>
  );
};

export default Header;