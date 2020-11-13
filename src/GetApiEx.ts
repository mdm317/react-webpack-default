export const fetchIngredients = () =>
  fetch("http://localhost:4000/ingre").then((r) => r.json());
