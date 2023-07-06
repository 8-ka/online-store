import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className='d-flex justify-content-center'>
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    style={{ maxWidth: '10rem', cursor: 'pointer' }}
                    className='p-3 ms-2'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'info' : 'dark'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar