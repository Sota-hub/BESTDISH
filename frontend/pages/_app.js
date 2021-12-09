import "../styles/tailwind.css";
import "../styles/tailwind-util1.css";
import "../styles/tailwind-util2.css";
import UserAuthContextProvider from "../contexts/UserAuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  );
}

export default MyApp;
