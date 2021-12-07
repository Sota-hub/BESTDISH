import { useState, createContext } from "react";

export const UserInfoContext = createContext();

const UserInfoContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;
