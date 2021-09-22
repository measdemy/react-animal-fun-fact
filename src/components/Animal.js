import { useState } from "react";
import { data } from "../data/animals";
import { ListAnimal } from "./ListAnimal";

export const Animal = () => {
  const [animals] = useState(data);

  return (
    <>
      <div className="container">
        <ListAnimal {...animals} />
      </div>
      <p id="fact"></p>
    </>
  );
};
