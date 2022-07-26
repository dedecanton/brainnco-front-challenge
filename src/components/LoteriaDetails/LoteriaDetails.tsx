import React, { ChangeEvent } from "react";
import {
  Container,
  Select,
  Option,
  LoteriaTitle,
  ConcursoDecription,
  ConcursoDecriptionBold,
  Arrow,
} from "./LoteriaDetails.styles";

import { ConcursoType, LoteriaType } from "../../types/Loterias.types";

import { Colors } from "../../utils/colors/Colors";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

type LoteriaDetailsProps = {
  loteria: LoteriaType | undefined;
  concurso: ConcursoType | undefined;
};

const LoteriaDetails = ({ loteria, concurso }: LoteriaDetailsProps) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  if (!concurso) return <h1>Concurso não encontrado</h1>;
  if (!loteria) return <h1>Loteria não encontrada</h1>;

  const handleChangeLoteria = (event: ChangeEvent<HTMLSelectElement>) => {
    navigate("/" + event.target.value);
  };

  return (
    <Container backgroundColor={Colors[loteria.id]} data-testid='LoteriaDetails'>
      <div style={{position:'relative'}}>
      <Select data-testid='select' value={loteria.id} name="loteria" onChange={handleChangeLoteria}>
        <Option value={"0"}>Mega-Sena</Option>
        <Option value={"1"}>Quina</Option>
        <Option value={"2"}>Lotofacil</Option>
        <Option value={"3"}>Lotomania</Option>
        <Option value={"4"}>Timemania</Option>
        <Option  value={"5"}>Dia de Sorte</Option>
      </Select>
      <Arrow />
      </div>

      <LoteriaTitle data-testid='loteria-title'>{loteria.nome}</LoteriaTitle>

      <ConcursoDecription>
        Concurso {width < 960 && <span>nº {concurso.id}</span>}
        {width > 960 && (
          <ConcursoDecriptionBold>
            <br />
            {concurso?.id} - {new Date(concurso.data).toLocaleDateString('pt-br')}{" "}
          </ConcursoDecriptionBold>
        )}
      </ConcursoDecription>
    </Container>
  );
};

export default LoteriaDetails;
