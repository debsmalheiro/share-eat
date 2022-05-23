import React from "react";
import { Container, CardPlate } from "./styles";

interface MealProps {
  name: string;
  price: number;
  description: string;
}

export function Meal({ name, price, description }: MealProps) {
  return (
    <Container>
      <CardPlate>
        <div>
          <p>{name}</p>
          <p>R$ {price.toFixed(2).replace(".", ",")}</p>
        </div>
        <span>{description}</span>
      </CardPlate>
    </Container>
  );
}
