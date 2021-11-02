import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './views/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, red } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import Footer from './components/Footer';
import About from './views/About';
import Faq from './views/Faq';
import Sponsors from './views/Sponsors';
import Reports from './views/Reports';

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
          <div style={{ width: '100%' }}>
            <NavBar>
              <div style={{ marginTop: '56px' }}>
                <Switch>
                  <Route exact component={Home} path="/" />
                  <Route exact component={About} path="/about" />
                  <Route exact component={Faq} path="/faq" />
                  <Route exact component={Sponsors} path="/sponsors" />
                  <Route exact component={Reports} path="/dashboard/forms" />
                </Switch>
              </div>
            </NavBar>
            <div style={{ flexGrow: 1, position: 'static', bottom: 0 }}>
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
