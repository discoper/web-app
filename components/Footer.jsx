import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import logo from "../public/FullLogoNegativo.png";
import facebook from "../public/facebook.png";
import twitter from "../public/twitter.png";
import youtube from "../public/youtube.png";
import discord from "../public/discord.png";
import medium from "../public/medium.png";
import github from "../public/github.png";
import gitlab from "../public/gitlab.png";
import Particles from "./Particles";
import div from "./isVisible";
function Footer() {
  return (
    <div className={`${styles.footer} ${styles.white}`}>
      <Particles id={"particles-js-footer"} color={"#fc1ab8"} />
      <div className={styles.footerTitleSection}>
        <div>
          <div>
            <img src={logo.src} />
            <h1 className={`${styles.primaryTitle}`}>
              Siguenos en nuestras redes sociales
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.footerLinkSectionContainer}>
        <div
          className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
        >
          <h1 className={`${styles.textAlignCenter} ${styles.pink}`}>
            Comunidad
          </h1>
          <Link href={"https://facebook.com/discopersc"}>
            <div className={styles.linkSection}>
              <img src={facebook.src} className={styles.linkImage} />
              <a>Facebook</a>
            </div>
          </Link>
          <Link href={"/"}>
            <div className={styles.linkSection}>
              <img src={discord.src} className={styles.linkImage} />
              <a>Discord</a>
            </div>
          </Link>
          <Link href={"https://twitter.com/discopersc"}>
            <div className={styles.linkSection}>
              <img src={twitter.src} className={styles.linkImage} />
              <a>Twitter</a>
            </div>
          </Link>
          <Link href={"https://youtube.com"}>
            <div className={styles.linkSection}>
              <img src={youtube.src} className={styles.linkImage} />
              <a>Youtube</a>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
        >
          <h1 className={`${styles.textAlignCenter} ${styles.pink}`}>
            Documentación
          </h1>
          <Link href={"https://medium.com/@discopersc"}>
            <div className={styles.linkSection}>
              <img src={medium.src} className={styles.linkImage} />
              <a>Medium</a>
            </div>
          </Link>
          <Link href={"https://github.com/discoper"}>
            <div className={styles.linkSection}>
              <img src={github.src} className={styles.linkImage} />
              <a>Github</a>
            </div>
          </Link>
          <Link href={"https://gitlab.com/discoper"}>
            <div className={styles.linkSection}>
              <img src={gitlab.src} className={styles.linkImage} />
              <a>Gitlab</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
