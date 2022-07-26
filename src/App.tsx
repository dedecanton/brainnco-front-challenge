import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContainer } from "./App.styles";
import Loteria from "./components/Loteria";
import Spinner from "./components/Spinner";
import { LoteriaContext } from "./contexts/Loterias.context";


function App() {
  
  const { loading } = useContext(LoteriaContext)
  if(loading) return <Spinner/>
  
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Navigate to="/0" />} />
        <Route
          path=":id"
          element={<Loteria/>}
        ></Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
