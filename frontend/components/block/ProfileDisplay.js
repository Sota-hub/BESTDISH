import { useEffect } from "react";

import ProfileUpdateDisplay from "./ProfileUpdateDisplay";

const ProfileDisplay = () => {
  let data;

  useEffect(() => {
    const getProfileProcess = async () => {
      const response = await fetch("/users/profile", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFlYWNkNDJiYTE3YWNkZGQ0MjNjZDciLCJpYXQiOjE2Mzg4Mzc0NjAsImV4cCI6MTYzODkyMzg2MH0.J8gnGmuR2-_Su9ZWWwDECZ9H8zb4kvoALmvvw6kcEEw",
        },
      });

      data = await response.json();
    };

    getProfileProcess();
  }, []);

  {
    data && (
      <>
        <div className="alignCenter my-12">
          <div className="w-[80%]">
            <h1 className="text-3xl font-bold">User Information</h1>
            {/* <p className="singleUserInfo">{}</p>
          <p className="singleUserInfo">{}</p>
          <p className="singleUserInfo">{}</p> */}
            <p className="singleUserInfo">posts - X</p>
            <p className="singleUserInfo">average price - X</p>
            <p className="singleUserInfo">living location - X</p>
          </div>
        </div>
        {/* <ProfileUpdateDisplay
        Email={}
        Password={}
        Name={}
        Token={}
      /> */}
        ;
      </>
    );
  }
};

export default ProfileDisplay;
