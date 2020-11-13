import React, { useEffect, useState } from "react";
import { fetchIngredients } from "./GetApiEx";
import Pizza from "./Pizza";

export default function PizzaAsync() {
  const [ingredients, setingredients] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await fetchIngredients();
      console.log(res);
      setingredients(res);
    })();
  }, []);
  return <Pizza ingre={ingredients} />;
}
