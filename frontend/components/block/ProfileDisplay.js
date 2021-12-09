import ProfileUpdateDisplay from "./ProfileUpdateDisplay";

const ProfileDisplay = () => {
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
      </>
    );
  }
};

export default ProfileDisplay;
