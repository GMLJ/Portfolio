import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";

//Styles
import "./App.scss";

function App() {
  const imageSize = () => {
    if (window.innerWidth > 600) {
      return {
        width: 524,
        height: "75vh",
      };
    } else if (window.innerWidth > 350) {
      return {
        width: 320,
        height: "60vh",
      };
    } else {
      return {
        width: 260,
        height: "60vh",
      };
    }
  };

  const imageDetails = imageSize();

  return (
    <Router>
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
                path="/portfolio/matthias-guilbert"
                render={() => <Portfolio imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
