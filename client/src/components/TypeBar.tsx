import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../store/redux-store";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import s from './styles.module.css';
import {setSelectedType} from "../redux/device-redux";

const TypeBar = () => {
    const device = useSelector((state:AppStateType)=>state.device);
      console.log(device.types)
    return (
        <ListGroup>
        {device.types.map(type =>
                <ListGroup.Item
                key={type.id}
                className={s.typebar}
                onClick={()=>setSelectedType(type)}>
                    {type.name}
                </ListGroup.Item>
            )}
      </ListGroup>
    );
};

export default TypeBar;