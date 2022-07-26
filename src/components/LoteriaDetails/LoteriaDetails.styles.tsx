import styled from "styled-components";

import { IoMdArrowDropdown } from "react-icons/io";

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 50vh;
  position: relative;

  background-color: ${(props) => props.backgroundColor};

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  color: white;

  &::after {
    position: absolute;
    bottom: -93%;
    height: 100%;
    content: "";
    width: 110%;
    border-top-left-radius: 70% 15%;
    border-top-right-radius: 70% 15%;
    background-color: #efefef;
  }

  @media screen and (min-width: 960px) {
    align-items: flex-start;
    padding: 5%;
    justify-content: space-between;

    &::after {
      height: 140%;
      bottom: -20%;
      right: -90%;
      border-radius: 0;
      border-top-left-radius: 100%;
      border-bottom-left-radius: 100%;
    }
  }
`;

export const Select = styled.select`
  text-transform: uppercase;
  width: 200px;
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: white;
  appearance: none;
`;

export const Arrow = styled(IoMdArrowDropdown)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: calc(50% - 10px);
  right: 10px;
  color: #848484;
`;

export const Option = styled.option`
  text-transform: uppercase;
  background: white;
`;

export const LoteriaTitle = styled.h1`
  text-transform: uppercase;
`;

export const ConcursoDecription = styled.p`
  text-transform: uppercase;
`;

export const ConcursoDecriptionBold = styled.span`
  line-height: 30px;
  font-weight: bold;
`;
