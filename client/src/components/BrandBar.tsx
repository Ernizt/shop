import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../store/redux-store";
import {setSelectedBrand} from "../redux/device-redux";
import Row from "react-bootstrap/cjs/Row";
import Card from "react-bootstrap/cjs/Card";

const BrandBar = () => {
    const device = useSelector((state:AppStateType)=>state.device);

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => setSelectedBrand(brand)}
                        >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
};

export default BrandBar;