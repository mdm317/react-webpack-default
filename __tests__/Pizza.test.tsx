import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pizza from "../src/Pizza";
import { fetchIngredients } from "../src/GetApiEx";

import PizzaAsync from "../src/PizzaAsync";

// jest.mock("axios", () => jest.fn());
// jest.mock("../src/GetApiEx", () => jest.fn());
jest.mock("../src/GetApiEx");
//jest.mock() 함수는 첫 번째 인자로 넘어온 모듈 내의 모든 함수를 자동으로 목(mock) 함수로 바꿔줍니다.

afterEach(() => {
  (fetchIngredients as jest.Mock).mockReset();
});
const ingre = ["bacon", "tomato", "mozzarella", "pineapples"];
test("contains all ingredients", () => {
  render(<Pizza ingre={ingre}></Pizza>);
  for (const ingredient of ingre) {
    expect(screen.getByText(ingredient)).toBeInTheDocument();
  }
});
test("call axios when render", async () => {
  (fetchIngredients as jest.Mock).mockResolvedValue(ingre);
  render(<PizzaAsync />);
  for (const ingredient of ingre) {
    expect(await screen.findByText(ingredient)).toBeInTheDocument();
  }
  expect(fetchIngredients).toHaveBeenCalledTimes(1);
});
