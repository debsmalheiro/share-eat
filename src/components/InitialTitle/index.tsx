import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: var(--text-yellow);
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Description = styled.span`
  color: var(--text-white);
  font-weight: 300;
`;

interface InitialTitleProps {
  title: string;
  description?: string;
}

export function InitialTitle({title, description}: InitialTitleProps) {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}
