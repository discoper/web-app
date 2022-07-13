import React, { useState, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/router";
import useAuth from "../../components/authContext";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
// import { useBox } from "..";
function Register() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const recaptchaRef = React.createRef();
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPass: "",
    captcha: false,
    termsAndConditions: false,
    creador: false,
  });
  const createUser = async () => {
    setLoading(true);
    if (!register.email) {
      setLoading(false);
      return setErr("Coloca el correo");
    }
    if (!register.password) {
      setLoading(false);
      return setErr("Coloca la contraseña");
    }
    if (register.confirmPass !== register.password) {
      setLoading(false);
      return setErr("Contraseñas no coinciden");
    }
    if (!register.captcha) {
      setLoading(false);
      return setErr("Commplete el captcha");
    }
    if (!register.termsAndConditions) {
      setLoading(false);
      return setErr("Acepte los terminos y condiciones");
    }
    try {
      await signUp(
        register.email,
        register.password,
        router.query.ref,
        register.creador
      );
      setLoading(false);
    } catch (error) {
      setErr(error.response.data);
      setLoading(false);
    }
  };
  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    setRegister({ ...register, captcha: true });
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
        <div className={`${styles.dFlex} ${styles.w100}`}>
          <input
            type="checkbox"
            className={styles.checkBox}
            id="termsAndConditions"
            value={register.termsAndConditions}
            onChange={handleChange}
          />
          <p>
            Acepto los <Link href="/">terminos y condiciones</Link>
          </p>
        </div>
        <div className={`${styles.dFlex} ${styles.w100}`}>
          <input
            type="checkbox"
            className={styles.checkBox}
            value={register.creador}
            id="creador"
            onChange={handleChange}
          />
          <p>Soy un creador</p>
        </div>
        <ReCAPTCHA
          sitekey={"6LfhsN0gAAAAAC53b_32XmxTUrVM6W2VaeMOfJpj"}
          size="normal"
          onChange={onReCAPTCHAChange}
        />
        <button type="submit" className={styles.primaryButton}>
          <h4>Registrate</h4>
        </button>
      </form>
    </>
  );
}

export default Register;
