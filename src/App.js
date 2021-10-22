import './App.css';

import {retry} from './utils/commonFunctions';

import {lazy, Suspense} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';
const Home = lazy(() => retry(() => import('./components/Home')));
const App = () => {
  const location = useLocation();
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
  ];
  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
