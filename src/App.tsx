import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './views/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: pink[500],
    },
  },
  typography: {
    fontFamily: 'Zilla Slab',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Zilla Slab';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap);
        }
      `,
    },
  },
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <div style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
            <NavBar />
          </div>
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
