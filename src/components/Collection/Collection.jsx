import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './Collection.css'

export function Collection() {
    return (
        <>
            <div className='cards'>
                <div className='card-colection'>
                    <h1>Coleções em destaque</h1>
                    <div className='collection'>
                        <Card className="card-custom card-1">
                            <Card.Body>
                                <Card.Title>30% OFF</Card.Title>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card-custom card-2">
                            <Card.Body>
                                <Card.Title>30% OFF</Card.Title>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card-custom card-3">
                            <Card.Body>
                                <Card.Title>30% OFF</Card.Title>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='icons-collection'>
                    <h1>Coleções em destaque</h1>
                    <Container>
                        <Row>
                            <div className='icon-item'>
                                <div className='button-container'>
                                    <button className="circular-image-button" style={{ backgroundImage: 'url(src/assets/shirt.svg)' }} />
                                </div>
                                <p>Camisetas</p>
                            </div>

                            <div className='icon-item'>
                                <div className='button-container'>
                                    <button className="circular-image-button" style={{ backgroundImage: 'url(src/assets/pants.svg)' }} />
                                </div>
                                <p>Calças</p>
                            </div>

                            <div className='icon-item'>
                                <div className='button-container'>
                                    <button className="circular-image-button" style={{ backgroundImage: 'url(src/assets/cap.svg)' }} />
                                </div>
                                <p>Bonés</p>
                            </div>

                            <div className='icon-item'>
                                <div className='button-container'>
                                    <button className="circular-image-button" style={{ backgroundImage: 'url(src/assets/fone.svg)' }} />
                                </div>
                                <p>Headphones</p>
                            </div>

                            <div className='icon-item'>
                                <div className='button-container'>
                                    <button className="circular-image-button" style={{ backgroundImage: 'url(src/assets/shoes.svg)' }} />
                                </div>
                                <p>Tênis</p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
};

export default Collection;