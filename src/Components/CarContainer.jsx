// CarContainer.jsx
import React from 'react';
import './CarContainer.css'; // Import the CSS module
import Ertiga from '../Img/Ertiga.jpeg'; // Adjust the path to your image
import Avanza from '../Img/Avanza.jpeg';
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';

const CarContainer = () => {
    const redirectToWhatsApp = (carName) => {
        // Replace '123456789' with the actual phone number
        const phoneNumber = '6288901715506';
        const message = `Halo, saya ingin memesan ${carName}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      };

  return (
    <div style={{backgroundColor: '#FAF7EE'}}>
        <Container id="car-container">
            <Row className='container-car-top'>
                <Col md={4} className='text-left mb-4 tittle-card'>
                <h1>D Fast Rent Car</h1>
                <p className='solusi'>Solusi Transportasi Terbaik.</p>
                <p className='isi-biar-ga-sepi'>Apakah Anda Mencari Rental Mobil dan Supir Jakarta dengan Pelayanan 24 Jam? <br /> <br />
                Apakah Anda Membutuhkan Rental Mobil dan Supir Jakarta dan Sekitarnya Dengan Pelayanan 24 Jam, Mobil Terawat & Bersih Serta Banyak Fasilitas?  <br /> <br /> 
                <span className='highlights'> Jika Iya, Anda Berada di Website Yang Tepat! </span></p>
                </Col>

                <Col md={4} className='text-center mb-4 '>
                <Card>
                    <Card.Img variant="top" src={Ertiga} alt="Car 1" />
                    <Card.Body className='card-body-color'>
                    <Card.Title>
                        <p  className='card-body-text'>
                             Ertiga 
                             <br />
                             <span className='middle-body-tittle'>
                             SEWA + SUPIR 12 JAM / FULL DAY
                             </span>
                        </p>
                        
                        <p  className='card-body-text-2'>
                            <ul>
                                <li style={{marginTop:'15px'}}>Kapasitas 7 Penumpang </li>
                                <li style={{marginTop:'15px'}}>Sudah Termasuk Jasa Driver</li>
                                <li style={{marginTop:'15px'}}>Harga belum termasuk uang BBM, Toll, Parkir, dan Uang Makan Driver</li>
                            </ul>
                        </p>
                    </Card.Title>
                    <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Ertiga')}>Pesan Sekarang</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={4} className='text-center mb-4'>
                <Card>
                    <Card.Img variant="top" src={Avanza} alt="Car 2"  />
                    <Card.Body className='card-body-color'>
                    <Card.Title >
                        <p  className='card-body-text'>
                             Avanza <br />
                             <span className='middle-body-tittle'>
                             SEWA + SUPIR 12 JAM / FULL DAY
                             </span>
                        </p>
                        
                        <p  className='card-body-text-2'>
                            <ul>
                                <li style={{marginTop:'15px'}}>Kapasitas 7 Penumpang </li>
                                <li style={{marginTop:'15px'}}>Sudah Termasuk Jasa Driver</li>
                                <li style={{marginTop:'15px'}}>Harga belum termasuk uang BBM, Toll, Parkir, dan Uang Makan Driver</li>
                            </ul>
                        </p>
                    </Card.Title>
                    <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Avanza')}>Pesan Sekarang</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

    </div>
  );
};

export default CarContainer;
