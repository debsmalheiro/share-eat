import React from 'react';
import { Title, Description } from "./styles";;

interface TitlesProps {
  title: string;
  description?: string;
}

export function Titles({ title, description }: TitlesProps) {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}
