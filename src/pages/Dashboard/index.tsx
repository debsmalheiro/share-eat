import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../../contexts";

import { Header } from "../../components/Header";
import { Titles } from "../../components/Titles";
import { Locals } from "../../components/Locals";

const Container = styled.div`
  padding: 1rem 2rem;
`;

export function Dashboard() {
  const { locals } = useContext(Context);
  return (
    <Container>
      <Header isHome={true} />
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
