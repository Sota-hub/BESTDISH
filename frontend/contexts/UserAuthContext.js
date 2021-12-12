import { useState, createContext } from "react";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserAuthContext.Provider
      value={{ isAuth, setIsAuth, userInfo, setUserInfo }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
