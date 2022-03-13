import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    background: {
      default: '#f8f9fb',
      alternative: 'rgba(51, 51, 53, 1)',
    },
    primary: {
      main: 'rgba(51, 51, 53, 1)',
    },
  },
  typography: {
    fontFamily: 'Fredoka',
    allVariants: {
      color: 'rgba(51, 51, 53, 1)',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(51, 51, 53, 1)',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectIcon: {
          color: 'rgba(51, 51, 53, 1)',
        },
        select: {
          color: 'rgba(51, 51, 53, 1)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgba(51, 51, 0)',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f9fb5',
          transition: '0.3s',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '#name, #phone': {
          color: 'rgba(51, 51, 53, 1)',
        },
      },
    },
  },
});

export default lightTheme;
