import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </div>
  )
}

export default MyApp
