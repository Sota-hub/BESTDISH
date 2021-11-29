// ========= sampleData will be data =========
import BG1 from "../../../public/bg-1.jpg";
const sampleData = [
  {
    id: 1,
    dish_name: "Tacos",
    evaluation: 3,
    price: 5,
    location: "Yaletown",
    image: BG1,
    user_name: "Andrew",
    posts: 100,
    average_price: 20,
    approximate_location: "Vancouver",
    match: 8,
  },
  {
    id: 2,
    dish_name: "Nachos",
    evaluation: 4,
    price: 10,
    location: "Dallas",
    image: BG1,
    user_name: "Apex",
    posts: 50,
    average_price: 10,
    approximate_location: "Texas",
    match: 5,
  },
  {
    id: 3,
    dish_name: "Brit",
    evaluation: 3.5,
    price: 7,
    location: "sydney",
    image: BG1,
    user_name: "Axe",
    posts: 75,
    average_price: 50,
    approximate_location: "New South Wales",
    match: 2,
  },
];
// ===========================================

import Link from "next/link";

import MenuCard from "./MenuCard";

const MenuCardList = ({ title, link }) => {
  return (
    <div className="my-10 ml-4">
      <h1 className="text-2xl ml-2 w-[80%]  ">{title}</h1>
      <Link href={link}>
        <a className="text-orange text-xs ml-3">view all</a>
      </Link>
      <div className="flex flex-nowrap overflow-x-auto mt-4">
        {sampleData.map((datum) => (
          <MenuCard
            key={datum.id}
            user_name={datum.user_name}
            posts={datum.posts}
            average_price={datum.average_price}
            approximate_location={datum.approximate_location}
            match={datum.match}
            image={datum.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCardList;
