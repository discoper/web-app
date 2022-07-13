import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Home.module.scss";
import useAuth from "./authContext";
import logo from "../public/ojo.png";
import logoAnim from "../public/ojoAnimado.gif";
import logoNegativo from "../public/ojoNegativo.png";
import Link from "next/link";
import pfp from "../public/blankpfp.jpg";
import marketplace from "../public/marketplace.png";
import marketplaceWhite from "../public/marketplace-white.png";
import { useBlockChainContext } from "./BlockchainContex";
import Router, { useRouter } from "next/router";
const NavContext = React.createContext();
export default function useNav() {
  return useContext(NavContext);
}
export function NavbarWrapper({ children }) {
  const { connectWeb3Modal, instance, account } = useBlockChainContext();
  const [eyeAnimation, setEyeAnimation] = useState(false);
  const [pfpMenuToggler, setPfpMenuToggler] = useState(false);
  const [eye, setEye] = useState(logo.src);
  const [scrollTop, setScrollTop] = useState(false);
  const { currentUser, logOut } = useAuth();
  const [desktopScreen, setDesktopScreen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const app = () => {
      if (!eyeAnimation) return;
      setEye(logoAnim.src);
      setTimeout(() => {
        setEye(logo.src);
      }, 830);
      setEyeAnimation(false);
    };
    return app();
  }, [eyeAnimation]);
  useEffect(() => {
    if (window.location.pathname !== "/") {
      setScrollTop(true);
    }
    const onScroll = (e) => {
      if (window.location.pathname === "/")
        setScrollTop(e.target.documentElement.scrollTop > 0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onHashChangeStart = (url) => {
      setPfpMenuToggler(false);
      setEyeAnimation(true);
      if (url !== "/") {
        setScrollTop(true);
      }
    };

    router.events.on("routeChangeStart", onHashChangeStart);

    return () => {
      router.events.off("routeChangeStart", onHashChangeStart);
    };
  }, [router.events]);
  useEffect(() => {
    function updateSize() {
      setDesktopScreen(window.innerWidth < 600);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <>
      <div className={`${styles.navbar} ${scrollTop && styles.navLight}`}>
        <div className={`${styles.navSection} links`}>
          <Link href="https://marketplace.discoper.io/">
            <a>
              <img
                src={
                  !scrollTop && !desktopScreen
                    ? marketplaceWhite.src
                    : marketplace.src
                }
                alt=""
              />
              {!desktopScreen && "Marketplace"}
            </a>
          </Link>
          {currentUser ? (
            <>
              <Link href="/user">
                <a>
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  Mi espacio
                </a>
              </Link>
              <Link href="/user?section=referidos">
                <a>
                  <span className="material-symbols-outlined">group_add</span>
                  Mis referidos
                </a>
              </Link>
              <Link href="/user?section=wallets">
                <a>
                  <span className="material-symbols-outlined">
                    account_balance_wallet
                  </span>
                  Mis Wallets
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/#funcionamiento">
                <a>
                  <span className="material-symbols-outlined">engineering</span>
                  {!desktopScreen && "Funcionamiento"}
                </a>
              </Link>
              <Link href="/#referidos">
                <a>
                  <span className="material-symbols-outlined">group_add</span>
                  {!desktopScreen && "Referidos"}
                </a>
              </Link>
              <Link href="/#seguridad">
                <a>
                  <span className="material-symbols-outlined">security</span>
                  {!desktopScreen && "Seguridad"}
                </a>
              </Link>
              <Link href="/#team">
                <a>
                  <span className="material-symbols-outlined">groups</span>
                  {!desktopScreen && "Equipo"}
                </a>
              </Link>
              <Link href="/#preguntas">
                <a>
                  <span className="material-symbols-outlined">
                    question_mark
                  </span>
                  {!desktopScreen && "Preguntas"}
                </a>
              </Link>
              <Link href="/whitepaper">
                <a>
                  <span className="material-symbols-outlined">description</span>
                  {!desktopScreen && "Whitepapper"}
                </a>
              </Link>
            </>
          )}
        </div>
        <div className={styles.logoNav} onClick={() => Router.push("/")}>
          <img src={scrollTop ? eye : logoNegativo.src} alt="" srcSet="" />
        </div>

        {currentUser ? (
          <>
            <div className={`${styles.rightButtons}`}>
              <div className={styles.pfpContainer}>
                <div
                  onClick={() => setPfpMenuToggler(!pfpMenuToggler)}
                  className={`${styles.profileImageViewer} ${styles.pfp}`}
                >
                  <div
                    style={{
                      backgroundImage: `url(${
                        currentUser.pfp ? currentUser.pfp : pfp.src
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                </div>

                {pfpMenuToggler && (
                  <div className={styles.pfpLinkContainer}>
                    <div className={styles.pfpLink}>
                      <Link href="/user">
                        <a>Perfil</a>
                      </Link>
                    </div>
                    <div className={styles.pfpLink}>
                      <div onClick={() => logOut()}>
                        <a>Cerrar Sesión</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`${styles.buttons}`} onClick={connectWeb3Modal}>
                <button className={styles.primaryButton}>
                  {account ? account : "Connect Wallet"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.buttons}`}>
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
            </div>
          </>
        )}
      </div>
      <NavContext.Provider value={{ setEyeAnimation, eyeAnimation }}>
        {children}
      </NavContext.Provider>
    </>
  );
}
