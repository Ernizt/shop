import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../store/redux-store";
import Row from "react-bootstrap/cjs/Row";
import DeviceItem from "./DeviceItem";



const DeviceList  = () => {
    const devicesData = useSelector((state:AppStateType)=>state.device);
    return (
        <Row className='d-flex'>
            {
                devicesData.devices.map(device =>

                       <DeviceItem key={device.id} {...device}/>
                )
            }
        </Row>
    );
};

export default DeviceList;