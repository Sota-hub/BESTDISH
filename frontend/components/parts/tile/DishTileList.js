import { useContext } from "react";
import { SearchFormInput } from "../../../context/state";

import DishTile from "./DishTile";

const DishTileList = ({ dishes }) => {
  console.log(dishes);
  return <div>aaa</div>;
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

export async function getStaticProps() {
  const { searchWords } = useContext(SearchFormInput);

  const response = await fetch(
    `/search?dishName=${searchWords[0]}&price=${searchWords[1]}`
  );
  const dishes = await response.json();

  return {
    props: {
      dishes,
    },
  };
}

export default DishTileList;
