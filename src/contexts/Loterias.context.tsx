import { createContext, useEffect, useState } from "react";
import {
  ConcursosType,
  LoteriaContextType,
  LoteriaType,
} from "../types/Loterias.types";
import useFetch from "../utils/hooks/useFetch";

const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1";

export const LoteriaContext = createContext<LoteriaContextType>({
  loterias: [],
  concursos: [],
  loading: true,
});

type LotteryProviderProps = {
  children: React.ReactNode;
};

export const LoteriaContextProvider = ({ children }: LotteryProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const loteriasFetch = useFetch<LoteriaType[]>(BASE_URL + "/loterias");
  const concursosFetch = useFetch<ConcursosType[]>(
    BASE_URL + "/loterias-concursos"
  );

  if (loteriasFetch.error) {
    throw new Error(loteriasFetch.error.message);
  }
  if (concursosFetch.error) {
    throw new Error(concursosFetch.error.message);
  }

  const loterias = loteriasFetch.data!;
  const concursos = concursosFetch.data!;

  useEffect(() => {
    if (loterias && concursos) setLoading(false);
  }, [loterias, concursos]);

  const value = {
    loterias,
    concursos,
    loading,
  };

  return (
    <LoteriaContext.Provider value={value}>{children}</LoteriaContext.Provider>
  );
};