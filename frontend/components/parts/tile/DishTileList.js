import DishTile from "./DishTile";

const DishTileList = ({ dishes }) => {
  console.log(dishes);
  return <div>{dishes[0].dishName}</div>;
  // return (
  //   <div className="alignCenter mb-8">
  //     <div className=" w-[90%]">
  //       {dishes.map((datum) => (
  //         <DishTile
  //           key={datum.id}
  //           id={datum.id}
  //           dishName={datum.dishName}
  //           evaluation={datum.evaluation}
  //           price={datum.price}
  //           location={datum.location}
  //           description={datum.description}
  //           image={datum.image}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default DishTileList;
