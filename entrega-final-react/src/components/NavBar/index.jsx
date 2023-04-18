import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import CartWidget from "../CartWidget";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className={styles.navBar}>
      <NavLink to="/">
        <h1>Tienda Coca-Cola</h1>
      </NavLink>
      {user.email ? (
        <NavLink className={styles.link} to="/login">
          Hola {user.email}
        </NavLink>
      ) : (
        <NavLink className={styles.link} to="/login">
          Login
        </NavLink>
      )}
      <div className={styles.menu}>
        <NavLink className={styles.link} to="/category/Gaseosas">
          Gaseosas
        </NavLink>
        <NavLink className={styles.link} to="/category/Jugos">
          Jugos
        </NavLink>
        <NavLink className={styles.link} to="/category/AguasSaborizadas">
          Aguas Saborizadas
        </NavLink>
        <NavLink className={styles.link} to="/category/Aguas">
          Aguas
        </NavLink>
        <NavLink className={styles.link} to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
