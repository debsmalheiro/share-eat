import React, { useContext } from "react";
import { Container } from "./styles";

import { Context } from "../../contexts";

import { Header } from "../../components/Header";
import { Titles } from "../../components/Titles";
import { Locals } from "../../components/Locals";

export function Dashboard() {
  const { locals } = useContext(Context);
  return (
    <Container>
      <Header isHome />
      <Titles
        title="Lugares"
        description={`${locals.length} lugares encontrados`}
      />
      {locals.map(({ name, menuItems }) => (
        <Locals key={name} name={name} menuItems={menuItems} />
      ))}
    </Container>
  );
}
