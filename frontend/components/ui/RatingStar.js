import ReactStars from "react-rating-stars-component";

const RatingStar = ({ evaluation }) => {
  return (
    <div className="pointer-events-none">
      <ReactStars
        value={evaluation}
        activeColor="#F24B6A"
        size={18}
        isHalf={true}
      />
    </div>
  );
};

export default RatingStar;
