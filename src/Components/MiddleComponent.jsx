// MiddleComponent.jsx
import React from 'react';
import './MiddleComponent.css'; // Import the CSS module
import Ertiga from '../Img/Ertiga.jpeg'; // Adjust the path to your image
import { Navbar, Container,Col, Card, Button, Row } from 'react-bootstrap';
import Alphard from '../Img/Alphard.jpeg'; // Adjust the path to your image
import Venturer from '../Img/Venturer.jpeg';
import AlphardT from '../Img/Alphard-trans.jpeg';
import InnovaR from '../Img/Innova-Reborn.jpeg';
import Suzuki from '../Img/Suzuki-XL7.jpeg';
import Pajero from '../Img/Pajero Sport.jpeg';
import Fortuner from '../Img/Toyota Fortuner.jpeg';
import Foxy from '../Img/Toyota Foxy.jpeg';
import Inara from '../Img/Inara.png';


const MiddleComponent = () => {
    const redirectToWhatsApp = (carName) => {
        // Replace '123456789' with the actual phone number
        const phoneNumber = '6288901715506';
        const message = `Halo, saya ingin memesan ${carName}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      };
  return (
    <div style={{backgroundColor: '#FAF7EE'}}>
        <Container>
            <h1 className='text-center mobil-pilih'>Pilihan Mobil</h1>
            <Row> 
                <Col md={4} className='middle-card mb-4'>
                <Card>
                    <Card.Img variant="top" src={Ertiga} alt="Car 1" />
                    <Card.Body className='card-body-color'>
                    <Card.Title>
                        <p  className='card-body-text'>
                             Ertiga <br />
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

                <Col md={4} className='middle-card mb-4'>
                    <Card>
                        <Card.Img variant="top" src={Alphard} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Alphard <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Alphard')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='middle-card mb-4'>
                    <Card>
                        <Card.Img variant="top" src={Venturer} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Venturer <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Venturer')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row> 
                <Col md={4} className='middle-card mb-4'>
                    <Card>
                        <Card.Img variant="top" src={Pajero} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Pajero Sport <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Pajero Sport')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='middle-card mb-4'>
                    <Card>
                        <Card.Img variant="top" src={InnovaR} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Innova  Reborn <br /> 
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Innova Reborn')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='middle-card mb-4'>
                    <Card>
                        <Card.Img variant="top" src={Suzuki} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Suzuki XL7 <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Suzuki XL7')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row> 
                <Col md={4} className='middle-card mb-4'>
                    <Card>
                        <Card.Img variant="top" src={AlphardT} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Alphard Transformer <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Alphard Transformer')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='middle-card mb-4'>
                <Card>
                        <Card.Img variant="top" src={Fortuner} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Toyota Fortuner <br /> <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Toyota Fortuner')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='middle-card mb-4'>
                <Card>
                        <Card.Img variant="top" src={Foxy} alt="Car 2"  />
                        <Card.Body className='card-body-color'>
                        <Card.Title >
                            <p  className='card-body-text'>
                                Toyota Foxy <br /> <br />
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
                        <Button style={{backgroundColor: '#003381', border: 'none'}} onClick={() => redirectToWhatsApp('Toyota Foxy')}>Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#04367F'}}>
            <Row>
            <h1 className='text-support'>Supported by : 

            <img src={Inara} className='footer-img' alt="" />
            </h1>
            </Row>
        </Navbar>
    </div>
  );
};

export default MiddleComponent;
