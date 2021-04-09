import React from 'react';
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Image from "react-bootstrap/cjs/Image";
import star from '../assets/star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

type PropsType = {
    id:number,
    name:string,
    price:number,
    rating:number,
    img:string
    key:number
}

const DeviceItem:React.FC<PropsType> = ({id, img, price, name, rating}:PropsType) => {
    const history = useHistory();
    return (
       <Col md={3} className={'mt-3'} onClick={()=> history.push(DEVICE_ROUTE+'/' + id)}>

           <Card style={{width:150, cursor:'pointer'}} border={"light"}>
               <Image width={150} height={150} src={process.env.REACT_APP_API_URL + img}/>
               <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                   <div >Samsung...</div>
                   <div className='d-flex align-items-center'>
                       <div>{rating } </div>
                        <Image width={18} height={18} src={star}/>
                   </div>

               </div>
               <div>{name}</div>
           </Card>
       </Col>
    );
};

export default DeviceItem;