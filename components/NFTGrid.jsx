import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
function NFTGrid({ rows, quantity, responsive }) {
  const [nft, setNft] = useState([{ title: "a" }]);
  const [numberRows, setNumberRows] = useState(rows);
  useEffect(() => {
    const app = () => {
      let nfts = [];
      for (let i = 0; i < quantity; i++) {
        nfts.push({
          title: `NFT${i + 1}`,
          background: `https://random.imagecdn.app/${
            (Math.random() * 10).toFixed() * 100
          }/${(Math.random() * 10).toFixed() * 100}`,
          price: Math.random().toFixed(3),
        });
      }
      setNumberRows(window.innerWidth > 600 ? rows : responsive);
      setNft((nft) => nfts);
    };
    return app();
  }, []);
  return (
    <div
      className={styles.NFTGrid}
      style={{
        gridTemplateColumns: `repeat(${numberRows}, 1fr)`,
      }}
    >
      {nft.map((doc) => {
        return (
          <div key={doc.title} className="NFTGridSection">
            <div
              className={styles.imageContainer}
              style={{
                background: `url(${doc.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className={styles.infoContainer}>
              <span className={`material-symbols-outlined ${styles.pink}`}>
                favorite
              </span>
              <h2>{doc.title}</h2>
              <h3 className={styles.black}>{doc.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NFTGrid;
