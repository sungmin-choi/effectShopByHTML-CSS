import styled from "styled-components"
import { screen } from "./styleConstant"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1300px;
  margin:auto;
  padding-bottom: 2rem;

  @media (max-width:1300px){
    &{
      width: 830px;
      justify-content: center;
    }
  }
  @media (max-width:${screen.mobile}px){
    
  }
`