import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './SpecialOffer.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function SpecialOffer() {
    return (
        <>
            <Card className='card_offer'>
                <div className='image_card_offer'>
                    <Card.Img variant='top' src="../../../public/special-offer.png" />
                </div>
                <Card.Body className='card_body_offer'>
                    <Card.Subtitle className='card_subt_offer'>Oferta especial</Card.Subtitle>
                    <Card.Title className='card_title_offer'>Air Jordan edição de colecionador</Card.Title>
                    <Card.Text className='card_text_offer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </Card.Text>
                    <Button className='card_button_offer' variant="primary">Ver Ofertas</Button>
                </Card.Body>
            </Card>
        </>
    )

};

export default SpecialOffer;