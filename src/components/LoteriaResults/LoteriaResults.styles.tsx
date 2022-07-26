import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  padding: 20px 0;
  z-index: 10;
  position: relative;

  @media screen and (min-width: 960px) {
    flex: 2;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (min-width: 960px) {
    max-width: 1000px;
  }
`;

export const NumeroResult = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  @media screen and (min-width: 960px) {
    width: 80px;
    height: 80px;
    font-size: 20px;
  }
`;

export const LoteriaText = styled.p`
  max-width: 90%;
  text-align: center;
  font-size: 14px;
  
  @media screen and (min-width:960px){
    position: absolute;
    bottom: 5%;
    font-size: 16px;
  }
`;
