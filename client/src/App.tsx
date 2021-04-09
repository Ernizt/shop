import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Provider} from "react-redux";
import store from './store/redux-store';
import NavBar from "./components/NavBar";
import { actions } from './redux/user-redux';
import {check} from "./http/userAPI";
import Spinner from "react-bootstrap/cjs/Spinner";

function App() {
     const [loading, setLoading] = useState(true);

     useEffect( () => {
         setTimeout(()=> {
             check().then(data => {
                 actions.setUser(true);
                 actions.setIsAuth(true)
             }).finally(()=> setLoading(false));
         },1000)
     }, [])
  if(loading) {
      return <Spinner animation={'grow'}/>
  }
  return (
      <BrowserRouter>
          <Provider store={store}>
              <NavBar/>
              <AppRouter/>
          </Provider>

      </BrowserRouter>

  );
}

export default App;
