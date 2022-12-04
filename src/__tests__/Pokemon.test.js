import React from "react";
import { render } from "@testing-library/react";
import { Pokemon } from "../components/Pokemon";
import { onePokemon } from "../fixtures/";
import "@testing-library/jest-dom";

describe("Test for Pokemon", () => {
  test("renders 1 pokemon", () => {
    const { getAllByTestId, getByText } = render(<Pokemon pokemon={onePokemon} />);

    expect(getAllByTestId('pokemon-item').length).toBe(1);
    expect(getByText("Bulbasaur")).toBeInTheDocument();
    
    //debug();
  });
});
