import React, { useState } from 'react';

const MenuList = ({ menuItems }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (id) => {
    setOpenSubMenu((prevId) => (prevId === id ? null : id));
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <li
        key={item.id}
        className={`menu-item ${
          item.type === 'group' ? 'menu-item-has-children' : ''
        }`}
      >
        {item.type === 'group' ? (
          <>
            <button
              type="button"
              className={`fa fa-plus d-lg-none ${openSubMenu === item.id ? 'submenu-open' : ''}`}
              onClick={() => handleSubMenuToggle(item.id)}
            ></button>
            <a href={item.url}>{item.title}</a>
            <ul className={`sub-menu ${openSubMenu === item.id ? 'sub-menu-open' : ''}`}>
              {item.children && renderMenuItems(item.children)}
            </ul>
          </>
        ) : (
          <a href={item.url}>{item.title}</a>
        )}
      </li>
    ));
  };

  return (
    <ul id="primary-menu" className="menu">
      {menuItems.items && renderMenuItems(menuItems.items)}
    </ul>
  );
};

export default MenuList;
