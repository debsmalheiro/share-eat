import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, CardRestaurant, CardNewPlate } from "./styles";

import { Context } from "../../contexts";

import { Icon } from "@iconify/react";

interface MenuProps {
  name: string;
  description: string;
  price: number;
}

interface RestaurantProps {
  name: string;
  menuItems: MenuProps[];
}

export function Restaurant({ name, menuItems }: RestaurantProps) {
  const { setLocalSelected } = useContext(Context);

  function changeRestaurant() {
    setLocalSelected({name, menuItems});
  }

  return (
    <Container>
      <CardRestaurant onClick={changeRestaurant}>
        <Link to={`/menu/${name}`}>
          <p>{name}</p>
          <span>{menuItems.length} pratos</span>
        </Link>
      </CardRestaurant>

      <CardNewPlate onClick={changeRestaurant}>
        <Link to={`/new/${name}`}>
          <Icon icon="bi:plus-circle" />
        </Link>
      </CardNewPlate>
    </Container>
  );
}
