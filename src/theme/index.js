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
      main: '#4655A5',
    },
    secondary: {
      main: '#EB5531',
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
