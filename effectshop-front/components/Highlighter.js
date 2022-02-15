import React, { useCallback, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {CopyTwoTone, CopyOutlined} from '@ant-design/icons';
import styled from 'styled-components';


const ClipboardWrapper = styled.div`
  position: absolute;
  right: 7px;
  top:7px;
  span{
    display: block;
    font-size: 2px;
  }

`

const Highlighter = ({code,language}) => {
  const [isCopied,setIsCopied] = useState(false);
  
  const onCopy = useCallback(()=>{
    setIsCopied(true);
    setTimeout(() => {setIsCopied(false)}, 3000);
  },[])
  return (
    <div style={{position:'relative'}}>
    <ClipboardWrapper>
    <CopyToClipboard text={code} onCopy={onCopy}>
    {isCopied ? <CopyTwoTone style={{fontSize:'20px'}}/> : 
                <CopyOutlined style={{fontSize:'20px'}}/>}
    </CopyToClipboard>
    <span>{isCopied ? 'Copied!!':'Copy'}</span>
    </ClipboardWrapper>
    <SyntaxHighlighter language={language} >
      {code}
    </SyntaxHighlighter>
    </div>
  )
}

export default Highlighter

