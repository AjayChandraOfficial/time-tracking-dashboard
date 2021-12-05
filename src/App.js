import "./App.css";
import TimeTrackerPage from "./Pages/TimeTrackerDashboard/TimeTrackerPage";
import GlobalStyle from "./GlobalStyle";
import { Switch, Route, Redirect } from "react-router";
function App() {
  return (
    <>
      <GlobalStyle />
      <Route exact path="/timetracker" component={TimeTrackerPage} />
      <Route exact path="/timetracker/*" component={TimeTrackerPage} />

      <Route exact path="/">
        <Redirect to="/timetracker" />
      </Route>
    </>
  );
}

export default App;
