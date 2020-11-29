import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import { ConfirmProvider } from 'material-ui-confirm';

ReactDOM.render((
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ConfirmProvider>
        <App/>
      </ConfirmProvider>
    </ThemeProvider>
  </Router>
), document.getElementById('root'));

serviceWorker.unregister();
