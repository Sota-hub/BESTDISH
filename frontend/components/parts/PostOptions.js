const PostOptions = () => {
  return (
    <div className="text-sm">
      <div className="my-4">
        <label htmlFor="address">Clarification</label>
        <input
          type="text"
          name="clarification"
          className="postInputBarStyle"
        ></input>
      </div>
      <div className="my-4">
        <label htmlFor="open-hour">Open hour</label>
        <input
          type="text"
          name="open-hour"
          className="postInputBarStyle"
        ></input>
      </div>
      <div className="my-4">
        <label htmlFor="day-off">Day off</label>
        <input type="text" name="day-off" className="postInputBarStyle"></input>
      </div>
      <div className="my-4">
        <label htmlFor="website">Website</label>
        <input type="text" name="website" className="postInputBarStyle"></input>
      </div>
    </div>
  );
};

export default PostOptions;
