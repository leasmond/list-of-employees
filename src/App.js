import React, { useState } from "react";
import { AppBar, Container, Tabs, Tab, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employees from "./components/Employees/Employees";
import Settings from "./components/Settings/Settings";
import Record from "./components/Record/Record";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const routes = [
  {
    path: "/employee",
    component: Employees,
    label: "Список сотрудников",
  },
  {
    path: "/record",
    component: Record,
    label: "Добавить запись",
  },
  {
    path: "/settings",
    component: Settings,
    label: "Настройки",
  },
];

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Router>
        <Route
          path="/"
          render={(history) => (
            <AppBar className={classes.root} color="default" position="static">
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                {routes.map((route, index) => (
                  <Tab
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
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
