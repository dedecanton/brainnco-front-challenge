import { createContext, useEffect, useState } from "react";
import { ConcursosType, LoteriaContextType, LoteriaType } from "../types/Loterias.types";


const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1";

export const LoteriaContext = createContext<LoteriaContextType>({
  loterias: [],
  concursos: [],
  loading: false,
});

type LotteryProviderProps = {
  children: React.ReactNode;
};

export const LoteriaContextProvider = ({ children }: LotteryProviderProps) => {
  const [loadingLoterias, setLoadingLoterias] = useState<boolean>(false);
  const [loadingConcursos, setLoadingConcursos] = useState<boolean>(false);
  const [loterias, setLoterias] = useState<LoteriaType[]>([]);
  const [concursos, setConcursos] = useState<ConcursosType[]>([]);
  const loading = loadingLoterias || loadingConcursos;
  console.log(loadingLoterias, loadingConcursos, loading);

  useEffect(() => {
    setLoadingLoterias(true);
    setLoadingConcursos(true);

    fetch(BASE_URL + "/loterias")
      .then((res) => res.json())
      .then((data) => setLoterias(data))
      .then(() => setLoadingLoterias(false));

    fetch(BASE_URL + "/loterias-concursos")
      .then((res) => res.json())
      .then((data) => setConcursos(data))
      .then(() => setLoadingConcursos(false));
  }, []);

  const value = {
    loterias,
    concursos,
    loading,
  };

  return (
    <LoteriaContext.Provider value={value}>{children}</LoteriaContext.Provider>
  );
};
