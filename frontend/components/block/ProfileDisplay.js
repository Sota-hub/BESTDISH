import { useContext } from "react";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import ProfileUpdateDisplay from "./ProfileUpdateDisplay";

const ProfileDisplay = () => {
  const { userInfo } = useContext(UserAuthContext);

  return (
    <>
      <div className="alignCenter my-12">
        <div className="w-[80%]">
          <h1 className="text-3xl font-bold">User Information</h1>
          <p className="singleUserInfo">{userInfo.user.name}</p>
          <p className="singleUserInfo">{userInfo.user.email}</p>
          <p className="singleUserInfo">100 (posts)</p>
          <p className="singleUserInfo">$100 (average price)</p>
          <p className="singleUserInfo">USA (living location)</p>
        </div>
      </div>
      <ProfileUpdateDisplay token={userInfo.token} />
    </>
  );
};

export default ProfileDisplay;
