import React from "react";
import styles from "../styles/Home.module.scss";
import FadeInSection from "./isVisible";
function Roadmap() {
  return (
    <>
      <FadeInSection className={styles.containerRoadmap} id="Roadmap">
        <div className={`${styles.roadmap} ${styles.white}`}>
          <ul>
            <li className={styles.roadmapFade}>
              <div className={styles.roadmapContent}>
                <h1>
                  Q1 <span className={styles.purple}>2022</span>
                </h1>
                <hr className={styles.hrRoadmap} />
                <h3 className="light-blue">
                  <b>
                    PRESALE <span className="purple">START</span> REGISTER AND
                    STAKING
                  </b>
                </h3>
                <p>Smart Contracts Deploy BSC DXSALE PRESALE</p>
                <p>Development of Cassette Classic Dapps</p>
                <p>
                  <b>
                    STAKING <span className="purple">START</span> PAUSABLE
                    TIMELOCK?
                  </b>
                  <br />
                  <spna className="yellow">=</spna> PRESALE
                  <span className="yellow">+</span> MARKETING
                  <span className="yellow">+</span> DEV
                </p>
                <h3>
                  <span className="light-blue">
                    LAUNCH PORTAL COMMUNITY FREELANCER SERVICES
                    <span className="purple">(BETA)</span>
                  </span>
                </h3>
                <p>LISTING IN PANCAKESWAP</p>
                <p>LISTING IN COINMARKEPCAP</p>
              </div>
            </li>
            <li className={styles.roadmapFade}>
              <div className={styles.roadmapContent}>
                <h1>
                  Q2 <span className="purple">2022</span>
                </h1>
                <hr className={styles.hrRoadmap} />
                <p>
                  <b>MARKETPLACE</b> Development
                </p>
                <p>
                  <span className="light-blue">Cassette</span>
                  <span className="purple">Classic</span> Development
                </p>
                <p>
                  Testnet Launch <b>MARKETPLACE</b>{" "}
                  <span className="yellow">3.0</span>
                  <br />(
                  <b>
                    <span className="yellow">ONLY</span> FOR winners presale
                  </b>
                  ) - Testnet Launch{" "}
                  <span className="light-blue">Cassette</span>
                  <span className="purple">Classic</span>
                </p>
                <p>
                  Deploy <span className="yellow">NFT</span> Market Contract
                </p>
                <p>
                  <b>Security</b> Contract Audit
                </p>
              </div>
            </li>
            <li className={styles.roadmapFade}>
              <div className={styles.roadmapContent}>
                <h1>
                  Q3 <span className="purple">2022</span>
                </h1>
                <hr className={styles.hrRoadmap} />
                <p>
                  <b>Start</b> mainnet <b>Marketplace</b>
                  <span className="yellow">NFT</span>
                </p>
                <p>
                  <b>Start</b> mainnet{" "}
                  <span className="light-blue">Cassette</span>
                  <span className="purple">Cassette</span>
                </p>
              </div>
            </li>
            <li className={styles.roadmapFade}>
              <div className={styles.roadmapContent}>
                <h1>
                  Q4 <span className="purple">2022</span>
                </h1>
                <hr className={styles.hrRoadmap} />
                <p>
                  We <span className="yellow">start</span> development of our
                  community
                  <span className="light-blue">Cassette</span>
                  <span className="purple">Classic</span> Game
                </p>
              </div>
            </li>
          </ul>
        </div>
      </FadeInSection>
    </>
  );
}

export default Roadmap;
