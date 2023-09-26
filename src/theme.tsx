// Import necessary modules
import { createTheme } from '@mui/material/styles';

// Create a light theme
const lightTheme = createTheme();

// Create a dark theme by extending the light theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export { lightTheme, darkTheme };
