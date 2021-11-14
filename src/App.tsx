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
import Login from './views/Login';
import Admin from './views/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './views/Signup';

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
          <div style={{ width: '100%', background: '#FDFEFB' }}>
            <NavBar>
              <div style={{ minHeight: '50vh' }}>
                <Switch>
                  <Route exact component={Home} path="/" />
                  <Route exact component={About} path="/about" />
                  <Route exact component={Faq} path="/faq" />
                  <Route exact component={Sponsors} path="/sponsors" />
                  <ProtectedRoute exact component={Reports} path="/dashboard/forms" />
                  <ProtectedRoute exact component={Admin} path="/dashboard/admin" />
                  <Route exact component={Login} path="/login" />
                  <Route exact component={Signup} path="/signup" />
                </Switch>
              </div>
            </NavBar>
            <div style={{ flexGrow: 1 }}>
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
