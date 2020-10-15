import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F1F9FF',
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: '#044467',
    },
    secondary: {
      main: '#29AAE1',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography
});

export default theme;
