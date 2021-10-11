import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import Home from "./pages/home/home";
import AboutMe from "./pages/aboutMe/aboutMe";
import Header from "./components/header/header";

//Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/aboutMe/matthias-guilbert"
                render={() => <AboutMe imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
