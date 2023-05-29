import './App.css';
import LeftNav from './components/leftNav';
import { StyledMargin } from './utils/style';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';


import { map } from 'lodash/fp';
import routes  from './routes';
import NavContainer from './components/navContainer';





function App() {
  return (
    <Router>
<StyledMargin>
  {/* <LeftNav> </LeftNav> */}
  <NavContainer></NavContainer>
<Switch>
              {map(
                route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ),
                routes
              )}
            </Switch>
           
</StyledMargin>
</Router>
  );
}

export default App;
