import React from "react";

export default function Pizza({ ingre }: { ingre: string[] }) {
  return (
    <div>
      {ingre.map((ing, i) => (
        <div key={i}>{ing}</div>
      ))}
    </div>
  );
}
