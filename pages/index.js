import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import NFTGrid from "../components/NFTGrid";
import ArtistsGrid from "../components/ArtistsGrid";
import Footer from "../components/Footer";
import Router from "next/router";
import useAuth from "../components/authContext";
import Particles from "../components/Particles";
import Link from "next/link";
import logo from "../public/logo.png";
export default function Home() {
  const { currentUser } = useAuth();
  useEffect(() => {
    const app = () => {
      const script = document.createElement("script");
      script.src = "/particles/js/app.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    return app();
  }, []);
  return (
    <>
      <Head>
        <title>DISCOPER</title>
        <meta name="description" content="NFT Social Club" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className="container">
        <Navbar />
        <div className={styles.jumbotron}>
          <Particles />
          <div className="title-section">
            <h1 className={`${styles.primaryTitle} ${styles.white}`}>
              DISCOPER SOCIAL CLUB
            </h1>
            <p className={`${styles.textLead} ${styles.white}`}>
              Dentro de DISCOPERSC cada miembro o accionista del Club obtiene
              beneficios económicos ilimitados basado en la economía del
              proyecto, donde se desprende todo un sistema comercial en el que
              los beneficios transaccionales son distribuidos entre la
              comunidad.
            </p>
            {!currentUser && (
              <>
                <div
                  className={styles.thirdButton}
                  onClick={() => window.location.replace("/access?form=1")}
                >
                  <h1>Ingresa</h1>
                </div>

                <br></br>

                <div
                  className={styles.primaryButton}
                  onClick={() => window.location.replace("/access?form=0")}
                >
                  <h1>Registrate</h1>
                </div>
              </>
            )}
          </div>
          <div className="new-nft-jumbotron-section">
            <h1 className={`${styles.primaryTitle}`}>
              Nuevo y Popular{" "}
              <span
                className={`material-symbols-outlined ${styles.white} ${styles.biggerSymbol}`}
              >
                new_releases
              </span>
            </h1>
            <NFTGrid rows={3} quantity={6} responsive={2} />
          </div>
        </div>
        <div className={styles.pageSection}>
          <div className={styles.section}>
            <h1 className={styles.secondaryTitle}>
              Colecciones Destacadas{" "}
              <span
                className={`material-symbols-outlined ${styles.darkBlue} ${styles.biggerSymbol}`}
              >
                collections_bookmark
              </span>
            </h1>
            <div className={styles.collectionGrid}>
              <div className={styles.collectionGridSection}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerCollection}`}
                  style={{
                    background: "url(https://random.imagecdn.app/500/650)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <img src="/blankpfp.jpg"></img>
                <div
                  className={`${styles.infoContainer} ${styles.infoContainerCollection}`}
                >
                  <div>
                    <p>Volumen</p>
                    <p>
                      <b>100.000</b>
                    </p>
                  </div>
                  <h1>Demo1</h1>
                  <h2>0.456</h2>
                </div>
              </div>
              <div className={styles.collectionGridSection}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerCollection}`}
                  style={{
                    background: "url(https://random.imagecdn.app/600/600)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <img src="/blankpfp.jpg"></img>
                <div
                  className={`${styles.infoContainer} ${styles.infoContainerCollection}`}
                >
                  <div>
                    <p>Volumen</p>
                    <p>
                      <b>100.000</b>
                    </p>
                  </div>
                  <h1>Demo2</h1>
                  <h2>0.456</h2>
                </div>
              </div>
              <div className={styles.collectionGridSection}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerCollection}`}
                  style={{
                    background: "url(https://random.imagecdn.app/550/600)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <img src="/blankpfp.jpg"></img>
                <div
                  className={`${styles.infoContainer} ${styles.infoContainerCollection}`}
                >
                  <div>
                    <p>Volumen</p>
                    <p>
                      <b>100.000</b>
                    </p>
                  </div>
                  <h1>Demo3</h1>
                  <h2>0.456</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h1 className={styles.secondaryTitle}>
              NFT Destacados{" "}
              <span
                className={`material-symbols-outlined ${styles.darkBlue} ${styles.biggerSymbol}`}
              >
                interests
              </span>
            </h1>
            <NFTGrid rows={5} quantity={10} responsive={2} />
          </div>
          <div className={styles.section}>
            <h1 className={styles.secondaryTitle}>
              Artistas Destacados{" "}
              <span
                className={`material-symbols-outlined ${styles.darkBlue} ${styles.biggerSymbol}`}
              >
                sentiment_very_satisfied
              </span>
            </h1>
            <ArtistsGrid rows={5} quantity={10} responsive={2} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
