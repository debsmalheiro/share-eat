import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export const CardPlate = styled.div`
  background: var(--restaurant);
  border-left: 0.55rem solid var(--text-yellow);
  border-radius: 0.55rem;
  padding: 1.4rem;
  width: 100%;

  color: var(--text-white);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.55rem;

    p {
      font-size: 1.3rem;
      font-weight: 700;
      padding-bottom: 0.55rem;
    }
  }

  span {
    font-weight: 300;
  }
`;