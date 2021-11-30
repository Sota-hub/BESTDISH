const UserMenuTopPart = () => {
  return (
    <div className="alignCenter mb-6">
      <div className="alignCenter justify-between w-[90%]">
        <div>
          <h1 className="text-2xl ml-2 w-[80%]  ">Menu</h1>
          <a className="text-orange text-xs ml-3">BEST DISH(10)</a>
        </div>
        <div>
          <select className="dropDownMenu">
            <option>BEST10</option>
            <option>All Menu</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserMenuTopPart;
