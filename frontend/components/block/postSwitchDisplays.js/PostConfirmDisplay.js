const PostConfirmDisplay = () => {
  return (
    <div className="alignCenter my-8 font-bold">
      <div className="w-[80%]">
        <h1 className="text-5xl my-8">
          Will you
          <br />
          add this
          <br />
          to your
          <br />
          BEST DISH?
        </h1>
        <select className="w-[100%] h-24 border rounded-sm text-2xl p-4 my-8">
          <option>No</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <button className="pinkButton my-8">Post</button>
      </div>
    </div>
  );
};

export default PostConfirmDisplay;
