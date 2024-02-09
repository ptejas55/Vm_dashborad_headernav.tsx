import React, { useState } from 'react';
import './Navigation.css'; // Import your CSS file

const Navigation: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>(''); // State to track active menu item

  // Function to handle click on menu item
  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="navigation">
      {/* Global Navigation */}
      <div className="global-navigation">
        {/* Logo */}
        <div className="logo">Logo</div>
        {/* Search bar */}
        <div className="search-bar">Search Bar</div>
        {/* Actions */}
        <div className="actions">
          <div className={`action ${activeMenuItem === 'bookmarks' ? 'active' : ''}`} onClick={() => handleMenuItemClick('bookmarks')}>Bookmarks</div>
          <div className={`action ${activeMenuItem === 'notification' ? 'active' : ''}`} onClick={() => handleMenuItemClick('notification')}>Notification</div>
          <div className={`action ${activeMenuItem === 'user' ? 'active' : ''}`} onClick={() => handleMenuItemClick('user')}>User</div>
          <div className={`action ${activeMenuItem === 'apps' ? 'active' : ''}`} onClick={() => handleMenuItemClick('apps')}>Apps</div>
        </div>
      </div>
      {/* Sub-Navigation */}
      <div className="sub-navigation">
        {/* Menu items */}
        <div className={`menu-item ${activeMenuItem === 'item1' ? 'active' : ''}`} onClick={() => handleMenuItemClick('item1')}>Item 1</div>
        <div className={`menu-item ${activeMenuItem === 'item2' ? 'active' : ''}`} onClick={() => handleMenuItemClick('item2')}>Item 2</div>
        <div className={`menu-item ${activeMenuItem === 'item3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('item3')}>Item 3</div>
        <div className={`menu-item ${activeMenuItem === 'item4' ? 'active' : ''}`} onClick={() => handleMenuItemClick('item4')}>Item 4</div>
        <div className={`menu-item ${activeMenuItem === 'item5' ? 'active' : ''}`} onClick={() => handleMenuItemClick('item5')}>Item 5</div>
      </div>
    </div>
  );
};

export default Navigation;
/* Global Navigation Styles */
.global-navigation {
  width: 1568px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
}

.global-navigation .logo,
.global-navigation .search-bar {
  margin: 0 10px;
}

.global-navigation .actions {
  display: flex;
  align-items: center;
}

.global-navigation .action {
  margin: 0 10px;
  cursor: pointer;
}

.global-navigation .action.active {
  text-decoration: underline;
}

/* Sub-Navigation Styles */
.sub-navigation {
  width: 1568px;
  height: 48px;
  background-color: #FFFFFF;
  border-top: 8px solid black;
  display: flex;
  align-items: center;
}

.sub-navigation .menu-item {
  margin: 0 20px;
  cursor: pointer;
}

.sub-navigation .menu-item.active {
  border-bottom: 2px solid black;
}
