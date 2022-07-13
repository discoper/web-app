import React, { useState } from "react";
import { useBlockChainContext } from "../components/BlockchainContex";
import useAuth from "../components/authContext";
import styles from "../styles/Home.module.scss";

function AddWallet() {
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const { account, connectWeb3Modal } = useBlockChainContext();
  const { currentUser } = useAuth();
  return (
    <div>
      {currentUser && (
        <div className={styles.accessContainer}>
          <div className={styles.accessBox}>
            <div className={styles.accessForm}>
              <div className={styles.errMessageSignIn}>
                <small>{err}</small>
              </div>
              <h1 className={`${styles.textCenter} ${styles.darkBlue}`}>
                Ingresa una nueva wallet a tu cuenta conectando tu proveedor de
                web3
              </h1>
              {!account ? (
                <>
                  <p>Conecta tu provedor para agregar tu nueva wallet</p>
                  <button
                    className={styles.primaryButton}
                    onClick={connectWeb3Modal}
                  >
                    Conectar Wallet
                  </button>
                </>
              ) : (
                <>
                  <input type="text" readOnly value={account} />
                  <button
                    className={styles.primaryButton}
                    // onClick={handleFireBaseUpload}
                  >
                    Ingresar Wallet
                  </button>
                </>
              )}
              {loading && <div className={styles.loading}></div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWallet;
