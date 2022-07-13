import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NFTGrid from "../components/NFTGrid";
import FadeInSection from "../components/isVisible";
import Footer from "../components/Footer";
import useAuth from "../components/authContext";
import Particles from "../components/Particles";
import logo from "../public/HorzLogo.png";
import bg1 from "../public/roadmap.jpg";
import bg2 from "../public/WALL-DISCOPERCOFRE2.png";
import pfp from "../public/blankpfp.jpg";
import TriggerEyeSection from "../components/TriggerEyeSection";
import WavesLight from "../components/waves";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
export default function Home() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className={`container ${styles.degradado}`}>
        <div className={`${styles.jumbotron} ${styles.transparentBg}`}>
          <Particles />
          <FadeInSection className={styles.jumbotronTitleSection}>
            <div className={styles.jumbotronTitleContainer}>
              <div className={styles.jumbotronTitle}>
                <img src={logo.src} />
              </div>
            </div>
            <hr />
            <p className={`${styles.textLead} ${styles.white}`}>
              Es un Club Social Descentralizado, en el que los socios o
              accionistas obtienen un porcentaje de distribución de ingresos.
            </p>
            <p className={`${styles.textLead} ${styles.white}`}>
              Cada Token de NFT representa una acción del club, dicha acción
              otorga acceso a los beneficios inherentes a la membresia
            </p>
            {!currentUser && (
              <div className={styles.buttons}>
                <div
                  className={styles.thirdButton}
                  onClick={() => window.location.replace("/access?form=1")}
                >
                  <h1>Ingresa</h1>
                </div>
                <div
                  className={styles.primaryButton}
                  onClick={() => window.location.replace("/access?form=0")}
                >
                  <h1>Registrate</h1>
                </div>
              </div>
            )}
          </FadeInSection>
          <FadeInSection className="new-nft-jumbotron-section">
            <div>
              <div className={styles.nftCollageBackground}></div>
              <h1 className={styles.primaryTitle}>NFT Collage</h1>
            </div>
          </FadeInSection>
        </div>
        <div className={styles.pageSection}>
          <TriggerEyeSection />
          <FadeInSection>
            <div className={styles.servicios} id="services">
              <div className={styles.videoSectionBox}>
                <h1>Video section</h1>
              </div>
            </div>
          </FadeInSection>
          <TriggerEyeSection />
          <FadeInSection>
            <h1
              className={`${styles.secondaryTitle} ${styles.white} ${styles.textCenter}`}
              id="funcionamiento"
            >
              Como Funciona
            </h1>
          </FadeInSection>
          <FadeInSection>
            <div className={styles.backgroundSection} id="funcionamiento">
              <div className={styles.funcionamiento}>
                <div className={styles.ecuacionFuncionamiento}>
                  <div>
                    <h1 className={styles.lightBlue}>Compra NFT con BUSD</h1>
                    <div className={styles.ecuacionesFuncionamientoImagen}>
                      <span className="material-symbols-outlined">
                        volunteer_activism
                      </span>
                    </div>
                    <h1 className={`${styles.title} ${styles.lightBlue}`}>
                      01
                    </h1>
                  </div>
                  <div className={styles.equal}>
                    <h1 className={`${styles.title} ${styles.lightBlue}`}>=</h1>
                  </div>
                  <div>
                    <h1 className={styles.lightBlue}>Eres DISCOPER FOUNDER</h1>
                    <div className={styles.ecuacionesFuncionamientoImagen}>
                      <span className="material-symbols-outlined">
                        magic_button
                      </span>
                    </div>
                    <h1 className={`${styles.title} ${styles.lightBlue}`}>
                      02
                    </h1>
                  </div>
                </div>
                <div className={styles.funcionamientoTexto}>
                  <p className={`${styles.textLead} ${styles.white}`}>
                    Los usuarios que adquieren uno o más DISCOPER FOUNDER
                    obtienen un porcentaje del 20% del monto en que se vendan
                    los NFT que son adquiridos subsiguientes a cada NFT
                    comprado, distribuido equitativamente entre todos los
                    miembros de la categoria FOUNDER
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className={styles.w100} id="referidos">
              <div
                className={`${styles.referidosLandingSection} ${styles.w100}`}
              >
                <h1
                  className={`${styles.secondaryTitle} ${styles.white} ${styles.textCenter}`}
                >
                  Gana el 5%
                </h1>
                <div>
                  <div className={styles.imageSectionBox}>
                    <h1>Image section</h1>
                  </div>
                  <div>
                    <h1>De las compras que realicen tus referidos</h1>
                    <h2 className={styles.textLead}>
                      Depositado automaticamente en tu wallet
                    </h2>
                  </div>
                  <div className={styles.imageSectionBox}>
                    <h1>Image section</h1>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className={styles.backgroundSection}>
            <TriggerEyeSection />
            <div>
              <FadeInSection>
                <h1
                  className={`${styles.secondaryTitle} ${styles.white} ${styles.textCenter}`}
                >
                  Colecciones
                </h1>
              </FadeInSection>
              <div className={styles.coleccion}>
                <FadeInSection className={styles.coleccionIntegrante}>
                  <img src={pfp.src} alt="" />
                </FadeInSection>
                <FadeInSection className={styles.coleccionIntegrante}>
                  <img src={pfp.src} alt="" />
                </FadeInSection>
                <FadeInSection className={styles.coleccionIntegrante}>
                  <img src={pfp.src} alt="" />
                </FadeInSection>
                <FadeInSection className={styles.coleccionIntegrante}>
                  <img src={pfp.src} alt="" />
                </FadeInSection>
              </div>
              <FadeInSection>
                <h1
                  className={`${styles.white} ${styles.secondaryTitle} ${styles.textCenter}`}
                >
                  Si eres
                </h1>
              </FadeInSection>
              <div className={styles.siEres}>
                <FadeInSection className={styles.siEresIntegrante}>
                  <h1>Gamer</h1>
                </FadeInSection>
                <FadeInSection className={styles.siEresIntegrante}>
                  <h1>Creador de Contenido</h1>
                </FadeInSection>
                <FadeInSection className={styles.siEresIntegrante}>
                  <h1>Desarrollador Personal</h1>
                </FadeInSection>
                <FadeInSection className={styles.siEresIntegrante}>
                  <h1>Emprendedor</h1>
                </FadeInSection>
                <FadeInSection className={styles.siEresIntegrante}>
                  <h1>Artista</h1>
                </FadeInSection>
              </div>
              <FadeInSection>
                <p
                  className={`${styles.white} ${styles.textBackground} ${styles.textLead} ${styles.textCenter}`}
                >
                  Puedes crear y personalizar tu propio espacio bajo suscripción
                  sin necesidad de pagar comisiones a terceros
                </p>
              </FadeInSection>
            </div>
          </div>
          <div className={styles.backgroundSection}>
            <div>
              <FadeInSection>
                <h1
                  className={`${styles.lightBlue} ${styles.secondaryTitle} ${styles.textCenter}`}
                  id="seguridad"
                >
                  Seguridad y Transparencia
                </h1>
              </FadeInSection>
              <FadeInSection>
                <div className={styles.seguridad}>
                  <div>
                    <p className={`${styles.textLead} ${styles.white}`}>
                      Todas las transacciones y contratos inteligentes a través
                      de la BscScan (Binance Smart Chain)
                    </p>
                    <h1
                      className={`${styles.yellow} ${styles.secondaryTitle} ${styles.textCenter}`}
                    >
                      BLOCKCHAIN EXPLORER
                    </h1>
                    <p className={`${styles.textLead} ${styles.white}`}>
                      Podra buscar y explorar todas las transacciones de forma
                      publica
                    </p>
                  </div>
                  <div className={styles.imagen}>
                    <h1>Imagen</h1>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
          <div className={styles.backgroundSection} id="team">
            <TriggerEyeSection />
            <FadeInSection>
              <h1
                className={`${styles.secondaryTitle} ${styles.white} ${styles.textCenter}`}
              >
                Equipo
              </h1>
              <div className={styles.equipo}>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Felipe Nadal</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>CEO</p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Felipe Nadal Jr</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>CIO</p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Igor Miquilena</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>
                    CTO <br />
                    Blockchain Dev
                  </p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Brayan Aguilera</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>CFO</p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Erika Espinal</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>
                    Marketing <br />
                    Manager
                  </p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Kevin Botello</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>RRSS</p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Franklin Segovia</h1>
                  <p className={`${styles.textLead}  ${styles.m0}`}>NFT Dev</p>
                </FadeInSection>
                <FadeInSection className={styles.equipoIntegrante}>
                  <img src={pfp.src} alt="" />
                  <h1>Alejandro Padilla</h1>
                  <p className={`${styles.textLead} ${styles.m0}`}>
                    Diseño Grafico <br />
                    WEB DEV
                  </p>
                </FadeInSection>
              </div>
            </FadeInSection>
          </div>
          <div className={styles.backgroundSection}>
            <TriggerEyeSection />
            <FadeInSection>
              <h1
                className={`${styles.secondaryTitle} ${styles.white} ${styles.textCenter}`}
              >
                Tutoriales
              </h1>
              <div className={styles.tutoriales}>
                <FadeInSection className={styles.tutorialesIntegrante}>
                  <div className={styles.videoSectionBox}>
                    <h1>Video section</h1>
                  </div>
                  <h1>Crear Wallet Metamask</h1>
                </FadeInSection>
                <FadeInSection className={styles.tutorialesIntegrante}>
                  <div className={styles.videoSectionBox}>
                    <h1>Video section</h1>
                  </div>
                  <h1>Registrar Cuenta Discoper</h1>
                </FadeInSection>
                <FadeInSection className={styles.tutorialesIntegrante}>
                  <div className={styles.videoSectionBox}>
                    <h1>Video section</h1>
                  </div>
                  <h1>Conectar Discoper a Metamask</h1>
                </FadeInSection>
                <FadeInSection className={styles.tutorialesIntegrante}>
                  <div className={styles.videoSectionBox}>
                    <h1>Video section</h1>
                  </div>
                  <h1>Registrar Cuenta Discoper</h1>
                </FadeInSection>
                <FadeInSection className={styles.tutorialesIntegrante}>
                  <div className={styles.videoSectionBox}>
                    <h1>Video section</h1>
                  </div>
                  <h1>¿Comó comprar NFTs?</h1>
                </FadeInSection>
                <FadeInSection className={styles.tutorialesIntegrante}>
                  <div className={styles.videoSectionBox}>
                    <h1>Video section</h1>
                  </div>
                  <h1>¿Comó vender NFTs?</h1>
                </FadeInSection>
              </div>
            </FadeInSection>
          </div>
          <div className={styles.backgroundSection}>
            <div className={styles.w100} id="preguntas">
              <FadeInSection>
                <h1
                  className={`${styles.secondaryTitle} ${styles.white} ${styles.textCenter}`}
                >
                  Preguntas Frecuentes
                </h1>
              </FadeInSection>
              <FadeInSection>
                <div className={styles.preguntasFrecuentes}>
                  <PreguntasFrecuentes
                    title={"¿Puedo vender mis NFTs?"}
                    text={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione quos quasi reprehenderit molestias, voluptas dicta quam omnis expedita sequi corporis voluptatibus odio, ad sint vitae amet consequuntur excepturi! Reiciendis."
                    }
                  />
                  <PreguntasFrecuentes
                    title={"¿Dónde recibo mis ganancias?"}
                    text={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione quos quasi reprehenderit molestias, voluptas dicta quam omnis expedita sequi corporis voluptatibus odio, ad sint vitae amet consequuntur excepturi! Reiciendis."
                    }
                  />
                  <PreguntasFrecuentes
                    title={"¿Cómo Puedo Comprar?"}
                    text={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione quos quasi reprehenderit molestias, voluptas dicta quam omnis expedita sequi corporis voluptatibus odio, ad sint vitae amet consequuntur excepturi! Reiciendis."
                    }
                  />
                  <PreguntasFrecuentes
                    title={"¿Cuánto puedo ganar?"}
                    text={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione quos quasi reprehenderit molestias, voluptas dicta quam omnis expedita sequi corporis voluptatibus odio, ad sint vitae amet consequuntur excepturi! Reiciendis."
                    }
                  />
                  <PreguntasFrecuentes
                    title={"¿Puedo regalar NFTs?"}
                    text={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione quos quasi reprehenderit molestias, voluptas dicta quam omnis expedita sequi corporis voluptatibus odio, ad sint vitae amet consequuntur excepturi! Reiciendis."
                    }
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
        <TriggerEyeSection />
      </div>
      <TriggerEyeSection>
        <Footer />
      </TriggerEyeSection>
    </>
  );
}
