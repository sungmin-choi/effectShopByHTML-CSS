import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types'
import wrapper from '../store/configureStore';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  .ant-card-body{
    height: 90%;
    padding: 0px;
  }
`
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Global />
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" crossOrigin href="https://fonts.gstatic.com"  />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  </>)
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(MyApp);
