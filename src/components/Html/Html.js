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
