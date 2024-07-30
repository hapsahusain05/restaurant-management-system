import React from 'react';

// Komponen MenuList untuk menampilkan daftar menu
const MenuList = ({ menus }) => {
  return (
    <div>
      <h2>Menu List</h2>
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>
            <strong>{menu.name}</strong>: {menu.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;

