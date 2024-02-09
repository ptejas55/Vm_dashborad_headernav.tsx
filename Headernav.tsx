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
        <div className="logo">Logo with Name</div>
        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>
        {/* Actions */}
        <div className="actions">
          <div className={`action ${activeMenuItem === 'bookmarks' ? 'active' : ''}`} onClick={() => handleMenuItemClick('bookmarks')}>
            <span>Bookmarks</span>
            <span className="action-icon">🔖</span>
          </div>
          <div className={`action ${activeMenuItem === 'notification' ? 'active' : ''}`} onClick={() => handleMenuItemClick('notification')}>
            <span>Notification</span>
            <span className="action-icon">🔔</span>
          </div>
          <div className={`action ${activeMenuItem === 'user' ? 'active' : ''}`} onClick={() => handleMenuItemClick('user')}>
            <span>User</span>
            <span className="action-icon">👤</span>
          </div>
          <div className={`action ${activeMenuItem === 'apps' ? 'active' : ''}`} onClick={() => handleMenuItemClick('apps')}>
            <span>Apps</span>
            <span className="action-icon">📱</span>
          </div>
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
.navigation {
  width: 1568px;
  display: flex;
  flex-direction: column;
}

.global-navigation {
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

.global-navigation .search-bar input {
  width: 150px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: none;
}

.global-navigation .search-icon {
  font-size: 20px;
  margin-left: 5px;
}

.global-navigation .actions {
  display: flex;
  align-items: center;
}

.global-navigation .action {
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
  position: relative;
}

.sub-navigation .menu-item.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 117px;
  height: 2px;
  background-color: black;
}
