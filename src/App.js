import React from 'react';
import Navigation from "./components/Navigation";
import Main from "./routes/Main";
import Summary from "./routes/Summary";
import Document from "./routes/Document";
import About from "./routes/About";
import PDFViewer from "./routes/PDFViewer";
import Round from "./routes/Round";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./routes/Content";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/content/:name/:number/:dataType">
            <Content />
          </Route>
          <Route path="/summary/round/:name/:dataType">
            <Round />
          </Route>
          <Route path="/document/pdf/:id">
            <PDFViewer />
          </Route>
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
