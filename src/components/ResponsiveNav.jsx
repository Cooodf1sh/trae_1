import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveNav.css';

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="responsive-nav">
      {/* 汉堡菜单按钮 - 仅在移动设备显示 */}
      <button 
        className="hamburger-btn" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
      </button>

      {/* 导航菜单 */}
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>首页</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>关于</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNav;