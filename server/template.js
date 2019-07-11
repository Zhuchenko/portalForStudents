import React from 'react'
import { ServerStyleSheet } from 'styled-components'

const template = (props) => {
    const { assetsRoot, _id } = props
    const config = { _id }

    const sheet = new ServerStyleSheet()
    const styles = sheet.getStyleTags()

    return (
        `<!doctype html>
    <html lang="ru" class="html">
      <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#3F51B5">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Portal For Students</title>      
        ${styles}
      </head>
      <body>
        <div id="root">
          PortalForStudents is loading... 
        </div>                      
        <script type="text/javascript">
          window['APP_CONFIG'] = ${JSON.stringify(config)}
          
        </script>
        <script async type="text/javascript" src="${assetsRoot + 'vendors.js'}"></script>
        <script async type="text/javascript" src="${assetsRoot + 'main.js'}"></script>
      </body>
    </html>`
    )
}

export default template