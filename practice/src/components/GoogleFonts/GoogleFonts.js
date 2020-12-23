import React from 'react'
import GoogleFontLoader from 'react-google-font-loader'


function GoogleFonts() {
  return (
    <GoogleFontLoader
      fonts={[
        {
          font: 'Bebas Neue',
          weights: [400, '400i']
        },
      ]} />
  )
}

export default GoogleFonts
