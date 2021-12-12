import "../styles/tailwind.css";
import "../styles/tailwind-util1.css";
import "../styles/tailwind-util2.css";
import UserAuthContextProvider from "../contexts/UserAuthContext";
import ReAuthenticate from "../components/foundations/ReAuthenticate";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <ReAuthenticate>
        <Component {...pageProps} />
      </ReAuthenticate>
    </UserAuthContextProvider>
  );
}

export default MyApp;
