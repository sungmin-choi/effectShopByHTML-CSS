import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    .effect-container{
      position: relative;
      margin: 0;
      padding: 0;
      width: 930px;
      height: 500px;
      font-family: "Montsrrat" sans-serif;
      ${(props)=>props.data.css}
    }
`
export const CodeContainer = styled.section`
  width: 80%;
  margin: auto;
  padding-bottom: 20px;
`