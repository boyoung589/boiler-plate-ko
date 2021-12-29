import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
//react-router-dom version 6부턴 Switch를 지원하지 않음.

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact={true} path={'/'} element={<LandingPage />}/>
          <Route exact={true} path={'/login'} element={<LoginPage />}/>
          <Route exact={true} path={'/register'} element={<RegisterPage />}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;