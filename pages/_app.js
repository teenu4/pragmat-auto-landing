// These styles apply to every route in the application
import '/styles/globals.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}