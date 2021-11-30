const PostOptions = () => {
  return (
    <div className="text-sm">
      <div className="my-4">
        <label htmlFor="address">Clarification</label>
        <input
          type="text"
          name="clarification"
          placeholder="Clarification"
          className="inputBarStyle"
        ></input>
      </div>
      <div className="my-4">
        <label htmlFor="open-hour">Open hour</label>
        <input
          type="text"
          name="open-hour"
          placeholder="Open-hour"
          className="inputBarStyle"
        ></input>
      </div>
      <div className="my-4">
        <label htmlFor="day-off">Day off</label>
        <input
          type="text"
          name="day-off"
          placeholder="Day off"
          className="inputBarStyle"
        ></input>
      </div>
      <div className="my-4">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          placeholder="Website"
          className="inputBarStyle"
        ></input>
      </div>
    </div>
  );
};

export default PostOptions;
