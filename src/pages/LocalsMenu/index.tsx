import React, { useContext } from "react";
import { Container, Button } from "./styles";
import { useNavigate } from "react-router-dom";

import { Icon } from "@iconify/react";

import { Context } from "../../contexts";

import { Header } from "../../components/Header";
import { Titles } from "../../components/Titles";
import { Meal } from "../../components/Meal";

export function LocalsMenu() {
  const { localSelected } = useContext(Context);
  const navigate = useNavigate();

  const { name, menuItems } = localSelected;

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header route={handleBackButton} />

      <Titles
        key={name}
        title={name}
        description={`${menuItems.length} pratos`}
      />

      {menuItems.map(({ name, price, description }) => (
        <Meal key={name} name={name} price={price} description={description} />
      ))}

      <Button onClick={() => navigate(`/new/${name}`)}>
        <Icon icon="bi:plus" />
      </Button>
    </Container>
  );
}
