import React from "react";
import {
  AppBar,
  Container,
  Tabs,
  Tab,
  makeStyles,
  Button,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./components/utils";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };
  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
  };

  return (
    <Container
      maxWidth="lg"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   flexDirection: "column",
      //   height: "100vh",
      // }}
    >
      {/* <Button onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
      <Button>Удалить клиента</Button>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>Клиенты отсутствуют</div>
      )} */}
      <Router>
        <Route
          // path="/"
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
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
