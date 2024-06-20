import React from "react";
import styles from "./navbar.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
 
  const handleNavigation = (route: string) => {
    navigate(route);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <ul className={styles.navItems}>
          <li onClick={()=>handleNavigation('/')}>Home</li>
          <li>Rent</li>
          <li onClick={()=>handleNavigation('/subscription')}>Subscription</li>
          <li>Invoice</li>
          <li>ET Sheet</li>
        </ul>
        <div className={styles.navProfileContainer}>
          <div className={styles.navProfile}>
            <UserOutlined />
          </div>
          <p>Admin</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
