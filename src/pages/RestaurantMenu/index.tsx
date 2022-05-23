import React, { useContext } from "react";
import { Container, Button } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { Icon } from "@iconify/react";

import { Context } from "../../contexts";

import { Header } from "../../components/Header";
import { InitialTitle } from "../../components/InitialTitle";
import { Meal } from "../../components/Meal";

export function RestaurantMenu() {
  const { localSelected } = useContext(Context);
  const navigate = useNavigate();

  const { name, menuItems } = localSelected;

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header route={handleBackButton} />

      <InitialTitle
        key={name}
        title={name}
        description={`${menuItems.length} pratos`}
      />

      {menuItems.map(({ name, price, description }) => (
        <Meal
          key={name}
          mealName={name}
          mealPrice={price}
          mealDescription={description}
        />
      ))}
      <Link to={`/new/${name}`}>
        <Button>
          <Icon icon="bi:plus" />
        </Button>
      </Link>
    </Container>
  );
}
