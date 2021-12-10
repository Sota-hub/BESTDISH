const PostOptions = ({ register }) => {
  return (
    <>
      <div className="my-4">
        <input
          type="text"
          name="clarification"
          placeholder="Clarification"
          className="postInputBarStyle"
          {...register("clarification")}
        ></input>
      </div>
      <div className="my-4">
        <input
          type="text"
          name="openHour"
          placeholder="Open hour"
          className="postInputBarStyle"
          {...register("openHour")}
        ></input>
      </div>
      <div className="my-4">
        <input
          type="text"
          name="dayOff"
          placeholder="Day off"
          className="postInputBarStyle"
          {...register("dayOff")}
        ></input>
      </div>
      <div className="my-4">
        <input
          type="text"
          name="website"
          placeholder="Website"
          className="postInputBarStyle"
          {...register("website")}
        ></input>
      </div>
    </>
  );
};

export default PostOptions;
