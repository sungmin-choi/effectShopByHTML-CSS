import styled from 'styled-components'
import { Button } from 'antd'
export const Container = styled.div`
  width: 320px;
  height: 374px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
export const Title = styled.div`
    font-weight: 700;
    font-size:32px;
    text-align: center;
    width: 100%;
`
export const SubmitBtn = styled(Button)`
    width: 100%;
    margin-top: 10px;
`
export const SignUpMessage = styled.div`
    text-align: center;
    >span{
        margin-right: 2rem;
        color :#98A8B9;
    }

`
export const ProjectTitle = styled.h1`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-family: 'Rowdies', cursive;
    color: #303952;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    left: 10px;
`