import React, { Component, PropTypes } from 'react';

export default class Html extends Component {
  static propTypes = {
    children: PropTypes.node,
    assets: PropTypes.shape({
      scripts: PropTypes.array,
      styles: PropTypes.array
    })
  };

  render() {
    const { children, assets: { styles, scripts } } = this.props;

    return (<html>
    <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta property="twitter:card" content="summary"/>
      <meta property="twitter:site" content="@startcup_ir"/>
      <meta property="twitter:creator" content="@startcup_ir"/>
      <meta property="twitter:title" content="استارت‌کاپ"/>
      <meta property="twitter:description" content="جام فوتسال بین استارتاپ‌ها"/>
      <meta property="twitter:image" content="/logo-social.jpg"/>
      <meta property="twitter:image:width" content="200"/>
      <meta property="twitter:image:height" content="200"/>
      <title>استارت‌کاپ</title>
      { styles.map((style, key) => <link key={key} rel="stylesheet" href={style}/>) }
    </head>
    <body>
    <div id="content">
      { children }
    </div>
    { scripts.map((script, key) => <script key={key} src={script}/>) }
    </body>
    </html>);
  }
}
