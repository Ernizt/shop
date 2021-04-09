import React, {useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import Row from 'react-bootstrap/cjs/Row';
import DeviceList from "../components/DeviceList";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {actions} from "../redux/device-redux";
import {useDispatch} from "react-redux";

const Shop = () => {
     const dispatch = useDispatch();
   useEffect(()=> {
       fetchTypes().then(data => dispatch(actions.setTypes(data)));
       fetchBrands().then(data => dispatch(actions.setBrands(data)));
       fetchDevices().then(data=> dispatch(actions.setDevices(data)))
   }, [])



    return (
       <Container >
           <Row className='mt-2'>
               <Col md={3}><TypeBar/></Col>
               <Col md={9}>
                   <BrandBar/>
                   <DeviceList/>
               </Col>
           </Row>

       </Container>
    );
};

export default Shop;