import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App/>
  </ThemeProvider>
), document.getElementById('root'));

serviceWorker.unregister();
