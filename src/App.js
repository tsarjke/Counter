import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./router/router";
import Navbar from "./components/Navbar";

const App = () => {
  const routes = useRoutes();
  return (
    <Router>
      <div className="App">
        <header>
          Deployed with GitHub Actions
          <Navbar />
        </header>
        {routes}
      </div>
    </Router>
  );
};

export default App;
