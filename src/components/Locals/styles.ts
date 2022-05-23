import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    color: var(--text-white);
  }
`;

export const CardRestaurant = styled.div`
  background: var(--restaurant);
  border-radius: 0.55rem;
  padding: 1.4rem;
  width: 100%;
  cursor: pointer;

  color: var(--text-white);

  p {
    font-size: 1.3rem;
    font-weight: 700;
    padding-bottom: 0.55rem;
  }
`;

export const CardNewPlate = styled.div`
  svg {
    width: 2.5rem;
    height: 100%;
    color: var(--text-white);
    padding-left: 1.5rem;
    cursor: pointer;
    opacity: 0.6;
  }
`;
