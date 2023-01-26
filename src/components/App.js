import Directors from "./Directors";
import Movies from "./Movies";
import { Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Actors from "./Actors";
import Home from "./Home";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/movies">
          <Movies/> 
             </Route>
        <Route path="/actors">
          <Actors/>
        </Route>
        <Route path="/directors">
        <Directors/>
    </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
