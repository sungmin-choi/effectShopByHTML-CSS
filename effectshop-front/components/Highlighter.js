import React, { useCallback, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {CopyTwoTone, CopyOutlined} from '@ant-design/icons';
import { ClipboardWrapper,Container } from '../styles/highlighterStyle';
import PropTypes from 'prop-types';
const Highlighter = ({code,language}) => {
  const [isCopied,setIsCopied] = useState(false);
  
  const onCopy = useCallback(()=>{
    setIsCopied(true);
    setTimeout(() => {setIsCopied(false)}, 3000);
  },[])
  return (
    <Container>
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
    </Container>
  )
}

Highlighter.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}


export default Highlighter

