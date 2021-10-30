import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './views/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, red } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: blueGrey[900],
    },
  },
  typography: {
    fontFamily: `'Rokkitt', serif`,
    // fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Rokkitt', serif;
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.googleapis.com/css2?family=Rokkitt&display=swap);
        }
      `,
    },
  },
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <NavBar />
          <div>
            <Switch>
              <Route exact component={Home} path="/" />
              {/* <Route exact component={VehicleDetails} path="/vehicle/:id" /> */}
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
