'use client';

import { useState } from 'react';
import Link from 'next/link';

type HeaderProps = {
  relative: boolean;
};
export default function Header({ relative }: HeaderProps) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(prev => !prev);
    }
  };

  return (
    <>
      <nav className={`splash-navbar ${relative ? 'relative' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-stack">
              <h1 className="amazing">Amazing</h1>
              <h1 className="party">Party Rental</h1>
            </div>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>☰</div>
          <div className={`nav-menu ${menuOpen ? 'show' : ''}`} id="navMenu">
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li className={`has-dropdown ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <Link href="/collections">Rentals <span className="arrow">▾</span></Link>
                <ul className="dropdown">
                  <li><Link href="#">Standard Jumpers</Link></li>
                  <li><Link href="#">Combo Jumpers</Link></li>
                  <li><Link href="#">Water Combos</Link></li>
                  <li><Link href="#">Water Slides</Link></li>
                  <li><Link href="#">Obstacle Courses</Link></li>
                  <li><Link href="#">Interactive Games</Link></li>
                  <li><Link href="#">Canopies, Tables &amp; Chairs</Link></li>
                  <li><Link href="#">Concessions</Link></li>
                  <li><Link href="#">Extras</Link></li>
                </ul>
              </li>
              <li><Link href="#">Party Packages</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#delivery-area">Delivery Area</Link></li>
              <li><Link href="#">Info</Link></li>
            </ul>
            <Link href="#" className="nav-btn">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
