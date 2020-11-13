import React from "react";
import Counter from "./Counter";
import Pizza from "./Pizza";
import PizzaAsync from "./PizzaAsync";

export default function App() {
  return (
    <div>
      <h1>HELLO </h1>
      <Counter></Counter>
      <Pizza ingre={["pe", "am", "se"]} />
      <PizzaAsync />
    </div>
  );
}
