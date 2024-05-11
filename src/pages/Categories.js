import React from "react";
import Cakeitems from "../Components/Cakeitems";
import cakelist from "../helpers/cakelist";

function Categories() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {cakelist.map((menuItem, key) => {
          return (
            <Cakeitems
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
