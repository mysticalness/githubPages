import Navigation from "./components/Navigation";
import Main from "./routes/Main";
import Summary from "./routes/Summary";
import Document from "./routes/Document";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/document">
            <Document />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
