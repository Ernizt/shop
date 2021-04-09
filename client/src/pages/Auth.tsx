import React, {useState} from 'react';
import Container from "react-bootstrap/cjs/Container";
import {Card, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";
import {login, registration} from "../http/userAPI";
import {useDispatch} from "react-redux";
import { actions } from '../redux/user-redux';

const Auth = () => {
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch()

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            dispatch(actions.setUser(data));
             dispatch(actions.setIsAuth(true));
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className='d-flex justify-content-center align-items-center'
        style={{height:window.innerHeight - 54}}>
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                 <Form.Control className='mt-2'
                               placeholder='Введите ваш email...'
                 value={email}
                 onChange={e=> setEmail(e.target.value)}/>
                    <Form.Control className='mt-2'
                                  placeholder='Введите ваш пароль...'
                                  type='password'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                                  <Row className='d-flex justify-content-between mt-3 pr-3'>
                                      {isLogin ?
                                          <div>
                                              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                          </div>
                                          :
                                          <div>
                                              Есть аккаунт? <NavLink to={LOGIN_ROUTE} >Войдите!</NavLink>
                                          </div>
                                      }
                                      <Button variant={'outline-success'} onClick={click}> {isLogin ? 'Войти' : 'Регистрация'}</Button>
                                  </Row>
                </Form>
            </Card>

        </Container>
    );
};

export default Auth;