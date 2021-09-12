import React from 'react';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activites/dashboard/ActivityDashboard';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activites/form/ActivityForm';
import { Route, useLocation } from 'react-router-dom';
import ActivityDetails from '../../features/activites/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
              <Route exact path='/Activities' component={ActivityDashboard} />
              <Route path='/Activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
            </Container>
            </>
        )}
      />    
    </>
  );
}

export default observer(App);
