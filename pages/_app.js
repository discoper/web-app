import "../styles/globals.scss";
import "../public/particles/css/style.css";
import "../public/particles/css/particles.css";
import { AuthProvider } from "../components/authContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
