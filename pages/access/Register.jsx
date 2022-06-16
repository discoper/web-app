import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import useAuth from "../../components/authContext";
// import { useBox } from "..";
function Register() {
  const { signUp } = useAuth();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    email: "",
    password: "",
    telegram: "",
    confirmPass: "",
    twitter: "",
  });
  const createUser = async () => {
    setLoading(true);
    if (
      register.email &&
      register.password &&
      register.confirmPass === register.confirmPass
    ) {
      try {
        await signUp(
          register.email,
          register.twitter,
          register.telegram,
          register.password
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErr(error.message);
        setLoading(false);
      }
    } else {
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <>
      <form
        className={styles.form}
        id="signIn"
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        {loading && <div className={styles.loadingAccess}></div>}
        <div className={styles.errMessageSignIn}>
          <small>{err}</small>
        </div>
        <div className={styles.formInputArea}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={register.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className={styles.formInputArea}>
          <label htmlFor="telegram">Telegram Id</label>
          <input
            type="text"
            name="telegram"
            id="telegram"
            required
            value={register.telegram}
            onChange={handleChange}
            placeholder="Telegram Id"
          />
        </div>
        <div className={styles.formInputArea}>
          <label htmlFor="twitter">Twitter Handle</label>
          <input
            type="text"
            name="twitter"
            id="twitter"
            value={register.twitter}
            onChange={handleChange}
            required
            placeholder="Twitter Handle"
          />
        </div>
        <div className={styles.formInputArea}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={register.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </div>
        <div className={styles.formInputArea}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            value={register.confirmPass}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
          />
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="6LevMIYcAAAAALhyU6pajioMkFIfjDqNsHzJnLhM"
        ></div>
        <button type="submit" className={styles.primaryButton}>
          <h4>Registrate</h4>
        </button>
      </form>
    </>
  );
}

export default Register;
