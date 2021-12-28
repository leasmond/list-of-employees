import { AppBar, Container, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Router>
        <Route
          render={(history) => (
            <AppBar className={classes.root} color='default' position='static'>
              <Tabs
                value={history.location.pathname}
                variant='fullWidth'
                indicatorColor='primary'
                textColor='primary'
              >
                {routes.map((route) => (
                  <Tab
                    key={route.path}
                    value={route.path}
                    label={route.label}
                    to={route.path}
                    component={Link}
                  />
                ))}
              </Tabs>
            </AppBar>
          )}
        />
        <Switch>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
