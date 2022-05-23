import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: end;
  justify-content: center;
  border: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: var(--text-yellow);
  border-radius: 50%;
  margin: 2rem;
  width: 3.5rem;
  height: 3.5rem;

  svg {
    width: 2.8rem;
    height: 100%;
    color: #000000;
    cursor: pointer;
  }
`;