import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../../contexts";

import { Header } from "../../components/Header";
import { InitialTitle } from "../../components/InitialTitle";
import { Restaurant } from "../../components/Restaurant";

const Container = styled.div`
  padding: 1rem 2rem;
`;

export function Dashboard() {
  const { locals } = useContext(Context);
  return (
    <Container>
      <Header isHome={true} />
      <InitialTitle
        title="Lugares"
        description={`${locals.length} lugares encontrados`}
      />
      {locals.map(({ name, menuItems }) => (
        <Restaurant key={name} name={name} menuItems={menuItems} />
      ))}
    </Container>
  );
}
