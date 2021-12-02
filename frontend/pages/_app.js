import "../styles/tailwind.css";
import "../styles/tailwind-util1.css";
import "../styles/tailwind-util2.css";

import SearchFormInputProvider from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <SearchFormInputProvider>
      <Component {...pageProps} />;
    </SearchFormInputProvider>
  );
}

export default MyApp;
