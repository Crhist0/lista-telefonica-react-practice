import { createTheme, darkScrollbar } from '@mui/material';

const darkTheme = createTheme({
  mode: 'dark',
  palette: {
    background: {
      default: 'rgba(51, 51, 53, 1)',
      alternative: '#f8f9fb',
    },
    primary: {
      main: '#f8f9fb',
    },
  },
  typography: {
    fontFamily: 'Fredoka',
    allVariants: {
      color: '#f8f9fb',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: '#f8f9fb',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectIcon: {
          color: '#f8f9fb',
        },
        select: {
          color: '#f8f9fb',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#333335',
          transition: '0.3s',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
        '#name, #phone': {
          color: '#f8f9fb',
        },
      },
    },
  },
});

export default darkTheme;
