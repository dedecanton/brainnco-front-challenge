import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoteriaContext } from "../../contexts/Loterias.context";
import { ConcursoType } from "../../types/Loterias.types";
import {
  Container,
  LoteriaText,
  NumeroResult,
  ResultsContainer,
} from "./LoteriaResults.styles";

type LoteriaResultsProps = {
  concurso: ConcursoType | undefined;
};

const LoteriaResults = ({ concurso }: LoteriaResultsProps) => {
  if (!concurso) return <h1>not concurso in page</h1>;

  return (
    <Container>
      <ResultsContainer>
        {concurso.numeros.map((numero) => (
          <NumeroResult key={numero}>{numero}</NumeroResult>
        ))}
      </ResultsContainer>
      <LoteriaText>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </LoteriaText>
    </Container>
  );
};

export default LoteriaResults;
