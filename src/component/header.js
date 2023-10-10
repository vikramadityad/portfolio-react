// @ts-check
import React from 'react';

function Header({ currentSection, setCurrentSection, navigationOptions }) {
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <header>
      <h1 className="my_name">Vikram Devaguptapu</h1>
      <nav className="nav-section">
        <ul className="nav-list">
          {navigationOptions.map((section) => (
            <li
              key={section}
              onClick={() => handleNavigationClick(section)}
              className={currentSection === section ? 'nav-item active' : 'nav-item'}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

