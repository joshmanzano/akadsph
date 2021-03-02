import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import MaintenanceApp from './MaintenanceApp';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import { ConfirmProvider } from 'material-ui-confirm';
import { SnackbarProvider } from 'notistack';

ReactDOM.render((
  <Router>
    <ThemeProvider theme={theme}>
      <SnackbarProvider classes={{variantInfo: 'info'}} preventDuplicate={true} maxSnack={6}>
        <GlobalStyles />
        <ConfirmProvider>
          {process.env.REACT_APP_AVAILABLE == 'TRUE' ?
          <App/>
          :
          <MaintenanceApp/>
          }
        </ConfirmProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </Router>
), document.getElementById('root'));

serviceWorker.unregister();
