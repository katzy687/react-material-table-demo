import Example from './RmtTable';
import './App.css'
import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { lightTheme, darkTheme } from './theme'; // Import the themes you created

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSkeleton, setSkeleton] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Set the state after a delay of one second
    const timer = setTimeout(() => {
      console.log("setting skeleton")
      setSkeleton(false);
    }, 1500); // 1000 milliseconds = 1 second

    // Clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (

    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline>
        <div className={"center-div"}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>Material React Table Demo</h2>
              <Button variant="contained" color="secondary" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
            <div>
              <Example showSkeleton={showSkeleton} isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
