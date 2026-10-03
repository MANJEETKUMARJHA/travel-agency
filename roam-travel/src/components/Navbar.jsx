import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    ['Explore', '#stories'],
    ['Journeys', '#map'],
    ['Journal', '#feelings'],
    ['About', '#about'],
  ];

  return (
    <nav className={`nav${menuOpen ? ' menu-open' : ''}`}>
      <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
        ROAM <i>/ 01</i>
      </a>
      <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="primary-navigation">
        {navLinks.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </div>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}