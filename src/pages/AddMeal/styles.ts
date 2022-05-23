import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;

  form {
    display: flex;
    flex-direction: column;
    color: var(--text-white);
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 1rem;
    padding-bottom: 1.5rem;

    input {
      margin-top: 0.45rem;
      padding: 0.65rem 0.85rem;
      border-radius: 0.35rem;
      outline: 0;
      border: 0;
    }

    textarea {
      margin-top: 0.45rem;
      resize: none;
      padding: 0.65rem 0.85rem;
      border-radius: 0.35rem;
      outline: 0;
      border: 0;
    }

    span {
      margin-top: 0.45rem;
      font-size: 0.85rem;
    }
  }

  button {
    background: var(--text-yellow);
    color: #000000;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.75rem;
    margin: 1.75rem;
    border: 0;
    border-radius: 0.35rem;

    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
`;