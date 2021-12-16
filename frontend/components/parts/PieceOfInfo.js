const PieceOfInfo = ({ tag, value }) => {
  return (
    <div className="flex items-center ml-4 my-2 min-h-[40px] overflow-scroll">
      <div>
        <p className="supportText text-orange">{tag}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default PieceOfInfo;
