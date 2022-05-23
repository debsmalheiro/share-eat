import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, CardRestaurant, CardNewPlate } from "./styles";

import { Context } from "../../contexts";

import { Icon } from "@iconify/react";

interface MenuProps {
  name: string;
  description: string;
  price: number;
}

interface LocalsProps {
  name: string;
  menuItems: MenuProps[];
}

export function Locals({ name, menuItems }: LocalsProps) {
  const { setLocalSelected } = useContext(Context);
  const navigate = useNavigate();

  function changeRestaurant(route: string) {
    setLocalSelected({ name, menuItems });
    navigate(route);
  }

  return (
    <Container>
      <CardRestaurant onClick={() => changeRestaurant(`/menu/${name}`)}>
        <p>{name}</p>
        <span>{menuItems.length} pratos</span>
      </CardRestaurant>

      <CardNewPlate onClick={() => changeRestaurant(`/new/${name}`)}>
        <Icon icon="bi:plus-circle" />
      </CardNewPlate>
    </Container>
  );
}
