import React, { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { Context } from "../../contexts";

import { Header } from "../../components/Header";
import { InitialTitle } from "../../components/InitialTitle";

export function AddMeal() {
  const { localSelected } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = useCallback(() => {
    console.log(name, price, description);
  }, []);

  const handleBackButton = () => {
    navigate(-1);
    }

  return (
    <Container>
      <Header route={handleBackButton} />
      <InitialTitle title={localSelected.name} />
      <form onSubmit={handleSubmit} >
        <label>
          Nome do prato
          <input
            type="text"
            name="name"
            placeholder="Prato"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>

        <label>
          Valor
          <input
            type="text"
            name="value"
            placeholder="0,00"
            value={price}
            onChange={({ target }) => setPrice(target.value)}
            required
          />
        </label>

        <label>
          Descrição do prato
          <textarea
            rows={8}
            name="description"
            placeholder="Insira uma descrição"
            minLength={50}
            maxLength={200}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            required
          />
          <span>*A descrição deve conter até 200 caracteres.</span>
        </label>

        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}
