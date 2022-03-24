import styled from "styled-components";
import {Tag,Button,Card} from 'antd'
import { screen } from "./styleConstant"; 
export const HeartTag = styled(Tag)`
  cursor: pointer;
`
export const DeleteBtn = styled(Button)`
  background-color: red;
  border-color: red;
  color: white;
  &:hover{
  background-color: red;
  border-color: red;
  color: white;
  }
  position: absolute;
  bottom: 5px;
  left: 7px;
`

export const EditBtn = styled(Button)`
  position: absolute;
  bottom: 5px;
  left: 6rem;
`

export const UserInfo = styled.div`
  position: absolute;
  right: 1.1rem;
  bottom: 5px;
  z-index: 10;
  background-color: transparent;
  border-radius: 10px;
`
export const EffectCard = styled(Card)`
    width: 600px;
    height: 400px;
    display: inline-block;
    margin-top: 20px;
    z-index: 0;
    .effect-container{
      position: relative;
      margin: 0;
      padding: 0;
      height: 340px;
      overflow-y: auto;
      font-family: "Montsrrat" sans-serif;
      ${(props)=>props.data.css}
    }
    @media (max-width:1300px){
      &{
      width: 700px;
      height: 400px;
        .effect-container{
          height: 340px;
        }
      }
    }
    @media (max-width: ${screen.mobile}px){
      &{
        width: 533px;
        height: 388px;
        .effect-container{
          height: 330px;
        }
      }
    }
`