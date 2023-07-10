import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDeviceModal = observer(({ show, onHide }) => {
    const { device } = useContext(Context);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    }

    const removeinfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('typeId', device.selectedType.id);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then(data => onHide());
    }

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle variant='dark'>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle variant='dark'>{device.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={() => device.setSelected(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        placeholder='Add new name'
                        className='mt-2'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        placeholder='Add new price'
                        type='number'
                        className='mt-2'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        type='file'
                        className='mt-2'
                        onChange={selectFile}

                    />
                    <hr />
                    <Button variant='outline-dark' onClick={addInfo}>Add new option</Button>
                    {info.map(i =>
                        <Row className='mt-2' key={i.number}>
                            <Col md={3}>
                                <Form.Control
                                    placeholder='Add new option'
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    placeholder='Add new value'
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={3}>
                                <Button variant='danger' onClick={() => removeinfo(i.number)}>Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDeviceModal