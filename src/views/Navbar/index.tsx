import React from "react";
import styles from "./navbar.module.scss";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <ul className={styles.navItems}>
          <li>Home</li>
          <li>Rent</li>
          <li>Subscription</li>
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
