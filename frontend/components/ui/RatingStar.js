import ReactStars from "react-rating-stars-component";

const RatingStar = ({ evaluation }) => {
  return (
    <ReactStars
      value={evaluation}
      activeColor="#F24B6A"
      size={18}
      isHalf={true}
    />
  );
};

export default RatingStar;
