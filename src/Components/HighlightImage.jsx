// CarContainer.jsx
import React from 'react';
import './HighlightImage.css'; // Import the CSS module
import Driver from '../Img/Driver.jpeg';
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import CarContainer from './CarContainer'

const HighlightImage = () => {
    const handleScroll = () => {
        // Mendapatkan posisi CarContainer
        const carContainerElement = document.getElementById('car-container');
        if (carContainerElement) {
          carContainerElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

  return (
    <div className='div-driver'>
        <Container className='container-driver'>
            <Row>
                <img src={Driver} alt="" className='darken-image' />
                <h1 className='text-overlay'> <span style={{fontWeight: '700'}}> Spesial jasa driver only/freelance <br /> </span>
                 tarif 250/12jam dalam kota di luar uang makan cover <br />
                 untuk daerah tangsel dan jaksel
                 <Button className='button-mid' onClick={handleScroll}>
                    Cek Armada Kami
                </Button>
                 </h1>
            </Row>
            <h1 className='about-us'>Tentang Kami</h1>
            <h1 className='about-us-mid'>Kami adalah penyedia jasa start up rental mobil di Jakarta bidang sewa kendaraan, kami telah melayani berbagai perusahaan nasional maupun multi nasional,perjalan dinas, perhotel, perbankan, event organizer, traveling dan para pribadi untuk kepentingan UKM maupun keluarga.</h1>
        <CarContainer id='car-container' />
        </Container>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#04367F'}}>
        </Navbar>
    </div>
  );
};

export default HighlightImage;
