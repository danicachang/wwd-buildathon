import '../styles/globals.css'
import '../styles/App.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../components/layout/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
