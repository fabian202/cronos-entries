import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import Home from './components/Home'
import Entry from './components/Entry'
import Login from './components/Login'
import SignUp from './components/SignUp'

const routes = {
  '/': () => <Login />,
  '/signup': () => <SignUp />,
  '/home': () => <Home />,
  '/entry': () => <Entry />
};

const App = () => {
  const routeResult = useRoutes(routes);

  // return routeResult || <NotFoundPage />;
  return routeResult;
  // return (
  //   <Button variant="contained" color="primary">
  //     Hello World
  //   </Button>
  // );
}

export default App;
