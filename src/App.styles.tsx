import styled from "styled-components";
// import { Colors } from "./utils/colors/Colors";

export const AppContainer = styled.div`

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: Colors;

  overflow-x: hidden;

  @media screen and (min-width:960px){
    flex-direction: row;
    overflow-y: hidden;
  }
`;
