import React from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/cjs/Button";
import {AppStateType} from "../store/redux-store";
import {useDispatch, useSelector} from "react-redux";
import Container from "react-bootstrap/cjs/Container";
import {useHistory} from 'react-router-dom';
import {actions} from "../redux/user-redux";

const NavBar = () => {
    const user = useSelector((state:AppStateType)=>state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = () => {
        dispatch(actions.setUser({}));
        dispatch(actions.setIsAuth(false));
    }
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Купидевайс</NavLink>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={()=> history.push(ADMIN_ROUTE)}>Админ панель </Button>
                        <Button variant={"outline-light"} className="ml-2" onClick={()=> logOut()}>Выйти</Button>
                    </Nav> :
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={()=> history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Navbar>
        </Container>

         );
};

export default NavBar;