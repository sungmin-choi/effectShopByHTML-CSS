import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {coldarkCold} from 'react-syntax-highlighter/dist/esm/styles/hljs';




const Highlighter = ({code,language}) => {
  return (
    <SyntaxHighlighter language={language} style={coldarkCold}>
      {code}
    </SyntaxHighlighter>
  )
}

export default Highlighter