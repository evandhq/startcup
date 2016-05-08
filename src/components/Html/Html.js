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
      <meta charset="utf-8" data-reactid=".10txbw6ccg0.0.0"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" data-reactid=".10txbw6ccg0.0.1"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" data-reactid=".10txbw6ccg0.0.2"/>
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
