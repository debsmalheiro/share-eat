import React from "react";
import { Container, Logo } from "./styles";

import { Icon } from "@iconify/react";

interface HeaderProps {
  isHome?: boolean;
  route?: () => void;
}

export function Header({ isHome, route }: HeaderProps) {
  return (
    <Container onClick={route}>
      {!isHome && <Icon icon="ic:round-arrow-back-ios-new" />}
      <Logo>share eat</Logo>
    </Container>
  );
}
