import { useState, createContext } from "react";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserAuthContext.Provider
      value={{ isAuth, setIsAuth, userInfo, setUserInfo }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
