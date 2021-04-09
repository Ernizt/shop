import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";
import {AppStateType} from "../store/redux-store";
const AppRouter = () => {
    const user = useSelector((state:AppStateType)=>state.user);
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component})=>
            <Route key={path}  path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path}  path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;