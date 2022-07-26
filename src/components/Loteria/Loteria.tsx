import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { LoteriaContext } from "../../contexts/Loterias.context";

import { ConcursoType } from "../../types/Loterias.types";

import useFetch from "../../utils/hooks/useFetch";

import LoteriaDetails from "../LoteriaDetails";
import LoteriaResults from "../LoteriaResults";
import Spinner from "../Spinner";

const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1";

const Loteria = () => {
  const { id } = useParams();
  const { concursos, loterias } = useContext(LoteriaContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const concursoId = concursos.find(
    (concurso) => concurso.loteriaId === parseInt(id!)
  )?.concursoId;

  const loteria = loterias.find((loteria) => loteria.id === parseInt(id!));
  const concurso = useFetch<ConcursoType>(
    BASE_URL + "/concursos/" + concursoId
  ).data;

  useEffect(() => {
    setIsLoading(true);
  }, [id]);

  useEffect(() => {
    if (concurso) setIsLoading(false);
  }, [concurso]);

  if (isLoading) return <Spinner />;
  if (!id) return <h1>not id</h1>;
  if (!concurso) return <h1>not concurso</h1>;
  if (!loteria) return <h1>not loteria</h1>;

  return (
    <>
      <LoteriaDetails loteria={loteria} concurso={concurso} />
      <LoteriaResults concurso={concurso} />
    </>
  );
};

export default Loteria;
