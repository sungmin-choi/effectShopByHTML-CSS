import styled from "styled-components"
import { Button } from "antd"
export const Containner = styled.div`
  padding-top: 4rem;
  width: 90%;
  margin:auto;
  
`

export const LogOutBtn = styled(Button)`
  position: absolute;
  bottom: 0.5rem;
  left: 1.2rem;
  background-color: red;
  border-color: red;
  color: white;
  &:hover{
  background-color: red;
  border-color: red;
  color: white;
  }
`