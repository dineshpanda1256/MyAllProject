import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Paymentfailure.css'
import Payfailure from "../../assets/Images/failure.gif"
import Footer from '../../components/Footer/Footer'
function Paymentfailure() {
  return (
    <div>
<Container>
<Row>
<Col md={5} xs={4}></Col>
<Col md={2} xs={4} id='Paymentfail_animatedgif'> <img src={Payfailure} alt=''  style={{width:'100%', }}/> </Col>
</Row>
<Row>
<Col md={3} xs={0}></Col>
<Col md={6} xs={12} id='paymentfail_text'> Payment Failed </Col>
</Row>


</Container>
<Footer/>
    </div>
  )
}

export default Paymentfailure