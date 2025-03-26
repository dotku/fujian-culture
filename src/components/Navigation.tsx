import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const NavItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href="#" 
    className="hover:text-red-100 transition-colors block py-2 px-4 sm:p-0" 
    onClick={onClick}
  >
    {children}
  </a>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-red-700 text-white sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <nav className="relative">
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-100 transition-colors"
              aria-label={isOpen ? "关闭菜单" : "打开菜单"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="relative">
              <input
                type="search"
                placeholder="站内检索"
                className="py-1 px-3 rounded text-black pr-8 text-sm w-40"
              />
              <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:hidden absolute left-0 right-0 top-full mt-2 bg-red-700 rounded-lg shadow-lg py-2`}
          >
            <NavItem onClick={closeMenu}>首页</NavItem>
            <NavItem onClick={closeMenu}>文化动态</NavItem>
            <NavItem onClick={closeMenu}>文化之旅</NavItem>
            <NavItem onClick={closeMenu}>文化遗产</NavItem>
            <NavItem onClick={closeMenu}>闽台文化</NavItem>
            <NavItem onClick={closeMenu}>福建文库</NavItem>
            <NavItem onClick={closeMenu}>讲坛荟萃</NavItem>
            <NavItem onClick={closeMenu}>展览在线</NavItem>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center justify-between">
            <div className="flex gap-6 text-lg">
              <NavItem>首页</NavItem>
              <NavItem>文化动态</NavItem>
              <NavItem>文化之旅</NavItem>
              <NavItem>文化遗产</NavItem>
              <NavItem>闽台文化</NavItem>
              <NavItem>福建文库</NavItem>
              <NavItem>讲坛荟萃</NavItem>
              <NavItem>展览在线</NavItem>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="站内检索"
                className="py-1 px-3 rounded text-black pr-8"
              />
              <Search className="absolute right-2 top-2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
