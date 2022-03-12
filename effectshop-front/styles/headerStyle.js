import styled from "styled-components";
import { screen } from "./styleConstant";

export const DividerWrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  padding-bottom: 1rem;
`
export const LinkBox = styled.div`
  position: absolute;
  right: 5%;
  top:17%;
  font-size: 20px;
  @media (max-width:${screen.mobile}px){
    &{
      margin-top: 10px;
      text-align: center;
      position: relative;
    }
  }
`
export const HeaderBox = styled.div`
    height: 110px;
    padding-top: 2rem;
    margin-bottom: 10px;
`

export const HeaderWrapper = styled.header`
  font-family: 'Mochiy Pop P One', sans-serif;
  font-family: 'Rowdies', cursive;
  text-align: center;
  cursor: pointer;
  .headerTitle{
    color: #303952;
    font-size: 3rem;
  }
  
  @media (max-width:${screen.tablet}px){
    .headerTitle{
      font-size: 2.5rem;
    }
  }
  @media (max-width:${screen.mobile}px){
    .headerTitle{
      font-size: 2rem;
    }
  }

`