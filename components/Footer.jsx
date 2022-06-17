import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <div className={`${styles.footer} ${styles.white}`}>
      <div className={styles.footerTitleSection}>
        <h1 className={`${styles.primaryTitle}`}>
          Siguenos en nuestras redes sociales
        </h1>
        <p className={`${styles.textLead} ${styles.justify}`}>
          Es un Club Social Descentralizado que congrega a aficionados de los
          NFTS en todo el mundo.
        </p>
      </div>
      <div
        className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
      >
        <h1 className={styles.textAlignCenter}>Comunidad</h1>
        <Link href={"https://facebook.com/discopersc"}>
          <a>Facebook</a>
        </Link>
        <Link href={"/"}>
          <a>Discord</a>
        </Link>
        <Link href={"https://twitter.com/discopersc"}>
          <a>Twitter</a>
        </Link>
        <Link href={"https://youtube.com"}>
          <a href="https://youtube.com">Youtube</a>
        </Link>
      </div>

      <div
        className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
      >
        <h1 className={styles.textAlignCenter}>Documentación</h1>
        <Link href={"https://medium.com/@discopersc"}>
          <a>Medium</a>
        </Link>
        <Link href={"https://github.com/discoper"}>
          <a>Github</a>
        </Link>
        <Link href={"https://gitlab.com/discoper"}>
          <a>Gitlab</a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
