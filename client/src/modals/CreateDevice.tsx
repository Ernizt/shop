import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import { AppStateType } from '../store/redux-store';
import {useDispatch, useSelector} from "react-redux";
import {selectedType, setSelectedBrand, setSelectedType,} from "../redux/device-redux";
//import {Context} from "../../index";
//import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
//import {observer} from "mobx-react-lite";
interface PropstType {
    show:boolean,
    onHide:()=>void,
}
interface InfoType {
    title:string,
    description:string,
    number:number,
}
const CreateDevice = ({show, onHide}:PropstType) => {

        const dispatch = useDispatch();

    const device = useSelector((state: AppStateType) => state.device);
    const TypeDevice = useSelector((state: AppStateType) => state.device.TypeT);
    console.log(TypeDevice);
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
      const  [info, setInfo] = useState<InfoType[]>([]);

   const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number:number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    /*
      useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])



    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }
*/
//    console.log(selectedType.name);
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ TypeDevice ?  TypeDevice  : "Выберите тип?"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onSelect={() => setSelectedType(type)(dispatch)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"

                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                           onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                  /*  onChange={(e) => changeInfo('title', e.target.value, i.number)}*/
                                    defaultValue="..."
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                   /* onChange={(e) => changeInfo('description', e.target.value, i.number)}*/
                                    defaultValue="Search..."
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    defaultValue="Search..."
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateDevice;
