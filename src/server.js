import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from 'components/Html/Html';
import express from 'express';
import bodyParser from 'body-parser';
import registerApiRoutes from 'api';
import { port } from 'config';

const app = express();
app.disable('x-powered-by');

app.use(bodyParser.json());
registerApiRoutes(app);
app.use(express.static(`${__dirname}/../static`));

const assets = {
  styles: [
    'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
  ],
  scripts: [
    process.env.NODE_ENV === 'development' ?
      'http://localhost:8080/main.js' :
      '/dist/main.js'
  ]
};

if (process.env.NODE_ENV === 'production') {
  assets.styles.push('/dist/main.css');
}

app.use((req, res) => {
  const element = <Html assets={assets}/>;
  res.send(ReactDOM.renderToString(element));
});

console.log(`App started listening on port ${port}`);

app.listen(port);
