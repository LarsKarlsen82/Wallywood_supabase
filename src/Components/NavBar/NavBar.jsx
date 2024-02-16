// NavBar.jsx
import { NavLink, useLocation } from "react-router-dom";
import { NavBarContainer } from "./NavBar.style";
import { useState  } from "react";
import { CartList } from "../../Components/CartList/Cartlist";

export const NavBar = ({ area }) => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();

  const arrNavItems = [
    { name: "HOME", path: "/" },
    { name: "PLAKATER", path: "/posters/action" },
    { name: "OM OS", path: "/about" },
    { name: "KONTAKT", path: "/contact" },
    { name: "KURV", path: "/cart" },
    { name: "LOGIN", path: "/login" },
  ];

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleNavLinkClick = () => {
    setActive(false);
  };



  return (
    <NavBarContainer $area={area}>
      <div
        onClick={handleToggle}
        className={`navMenu ${isActive ? "burgerMenuActive" : "burgerMenu"}`}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul>
        {arrNavItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={() => {
                  setActive(false);
                  handleNavLinkClick();
                }}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {location.pathname === "/cart" && <CartList />}
    </NavBarContainer>
  );
};
