const Homepage = loadable(() => import("../Homepage"));
const SearchResults = loadable(() => import("../SearchResults"));
const Help = loadable(() => import("../Help"));
const DefaultRoute = loadable(() => import("../DefaultRoute"));
const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path={HOMEPAGE} component={Homepage} />
      <Route exact path={SEARCH} component={SearchResults} />
      <Route exact path={HELP} component={Help} />
      <Route render={() => <DefaultRoute />} />
    </Switch>
  </Router>
);
export default Routes;

import React from 'react';
import loadable from '@loadable/component';

import ComponentOne from '../ComponentOne';
import ComponentTwo from '../ComponentTwo';

import STYLES from './Homepage.scss';

const ComponentThree = loadable(() => import('./ComponentThree'));

//const Homepage = () => (
//  <div className={STYLES.container}>
//    <ComponentOne />
//    <ComponentTwo />
//    <ComponentThree fallback={<div>Loading...</div>}/>
//  </div>
//);

//const OtherComponent = loadable(() =>
//  import(/* webpackPrefetch: true */ "./OtherComponent")
//);

function example (){
const [dynamicComponentThree, setDynamicComponentThree] = useState(null);return (
    <div className={STYLES.container}>
      <ComponentOne />
      <button
        type="button"
        onClick={async () => {
          const ComponentThree = await loadable(() => /* webpackPrefetch: true */ import('./ComponentThree'));setDynamicComponentThree(ComponentThree);
        }}
      />
      {dynamicComponentThree && <DynamicComponentThree />}
    </div>
  );
}

//Routes.jsconst Homepage = loadable(() => /* webpackPrefetch: true */ import('../Homepage'));
//const SearchResults = loadable(() => import('../SearchResults'));const Routes = ({ history }) => (
//  <Router history={history}>
//    <Switch>
//      <Route exact path={HOMEPAGE} component={Homepage} />
//      <Route exact path={SEARCH} component={SearchResults} />
//    </Switch>
//  </Router>
//);

const OtherComponent = loadable(() => import("./OtherComponent"));
OtherComponent.preload();