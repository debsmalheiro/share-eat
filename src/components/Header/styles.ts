import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  svg {
    width: 1.6rem;
    height: 100%;
    color: var(--text-white);
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Logo = styled.h1`
  color: var(--text-white);
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;