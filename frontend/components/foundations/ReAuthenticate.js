import { useEffect, useContext } from "react";

import { UserAuthContext } from "../../contexts/UserAuthContext";

const ReAuthenticate = ({ children }) => {
  const { setIsAuth, setUserInfo } = useContext(UserAuthContext);

  useEffect(() => {
    let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
      if (token) setIsAuth(true);
    }

    (async () => {
      const response = await fetch("/users/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUserInfo(data);
    })();
  }, []);

  return <>{children}</>;
};

export default ReAuthenticate;
