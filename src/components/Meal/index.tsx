import React from "react";
import { Container, CardPlate } from "./styles";

interface MealProps {
  mealName: string;
  mealPrice: number;
  mealDescription: string;
}

export function Meal({ mealName, mealPrice, mealDescription }: MealProps) {
  return (
    <Container>
      <CardPlate>
        <div>
          <p>{mealName}</p>
          <p>R$ {mealPrice.toFixed(2).replace(".", ",")}</p>
        </div>
        <span>{mealDescription}</span>
      </CardPlate>
    </Container>
  );
}
