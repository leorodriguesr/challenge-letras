import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVPK3TyPKQsHCvm4Q8JKbC-XV8B0PdIHc&libraries=places"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}
