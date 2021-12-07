import "../styles/tailwind.css";
import "../styles/tailwind-util1.css";
import "../styles/tailwind-util2.css";
import UserInfoContextProvider from "../contexts/UserInfoContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserInfoContextProvider>
      <Component {...pageProps} />;
    </UserInfoContextProvider>
  );
}

export default MyApp;
