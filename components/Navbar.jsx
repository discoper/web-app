import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import useAuth from "../components/authContext";
import logo from "../public/HorzLogo.png";
// import Router from "next/router";
import Link from "next/link";
function Navbar() {
  const { currentUser, logOut } = useAuth();
  console.log(logo);

  return (
    <div className={styles.navbar}>
      <div className="nav-section">
        <Link href="https://marketplace.discoper.io/">
          <a>
            <span className={`material-symbols-outlined ${styles.darkBlue}`}>
              store
            </span>
            Marketplace
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className={`material-symbols-outlined ${styles.darkBlue}`}>
              collections_bookmark
            </span>
            Colecciones
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className={`material-symbols-outlined ${styles.darkBlue}`}>
              new_releases
            </span>
            Nuevo
          </a>
        </Link>
      </div>
      <img src={logo.src} className={styles.logoNav} alt="" srcSet="" />
      <div className="nav-section buttons">
        {currentUser ? (
          <span
            title="Cerrar Sesión"
            onClick={() => logOut()}
            className="material-symbols-outlined"
          >
            logout
          </span>
        ) : (
          <>
            <Link href={"/access?form=1"} passHref>
              <a className={styles.thirdButton}>
                <p>Ingresa</p>
              </a>
            </Link>
            <Link href={"/access?form=0"} passHref>
              <a className={styles.primaryButton}>
                <p>Registrate</p>
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
