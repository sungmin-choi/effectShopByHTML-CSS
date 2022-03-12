import styled from "styled-components";
import {Form,Card} from 'antd'


export const CustomForm = styled(Form)`
  width: 45%;
`

export const CustomCard = styled(Card)`
  width: 600px;
  height: 400px;
  z-index: 0;
  position: absolute;
  top: 10rem;
  right: 0rem;
  .effect-container{
      position: relative;
      margin: 0;
      padding: 0;
      height: 340px;
      overflow-y: auto;
      font-family: "Montsrrat" sans-serif;
      ${(props)=>props.data}
  }
  @media (max-width:1300px){
      &{
        width: 400px;
      }
  }
  @media (max-width:800px){
      &{
        width: 300px;
      }
  }
`