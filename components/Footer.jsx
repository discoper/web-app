import React from "react";
import styles from "../styles/Home.module.scss";
function Footer() {
  return (
    <div className={`${styles.footer} ${styles.white}`}>
      <div className={styles.footerTitleSection}>
        <h1 className={`${styles.primaryTitle}`}>
          Siguenos en nuestras redes sociales
        </h1>
        <p className={`${styles.textLead} ${styles.justify}`}>
          Es un Club Social Descentralizado que congrega a aficionados de los
          NFT'S en todo el mundo.
        </p>
      </div>
      <div
        className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
      >
        <h1 className={styles.textAlignCenter}>Comunidad</h1>
        <a href="https://facebook.com/discopersc">Facebook</a>
        <a href="/">Discord</a>
        <a href="https://twitter.com/discopersc">Twitter</a>
        <a href="https://youtube.com">Youtube</a>
      </div>

      <div
        className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
      >
        <h1 className={styles.textAlignCenter}>Documentación</h1>
        <a href="https://medium.com/@discopersc">Medium</a>
        <a href="https://github.com/discoper">Github</a>
        <a href="https://gitlab.com/discoper">Gitlab</a>
      </div>
      {/* <div
        className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
      >
        <h1 className={styles.textAlignCenter}>Comunity</h1>
        <a href="">Facebook</a>
        <a href="">Discord</a>
      </div> */}
    </div>
  );
}

export default Footer;
