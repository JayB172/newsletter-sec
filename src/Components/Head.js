import React from "react";
import {Container, Row, Carousel } from 'react-bootstrap';
import './Styles/Head.css'

const head = () => {
    return(
        <div>
            <Container noGutters fluid className='heading'>
              <Carousel fade>
                <Carousel.Item Interval={500}>
                   <img src={ require("../Images/Head/bgi1.jpg").default } className='bg-img' alt='first-slide' />
                </Carousel.Item>
                <Carousel.Item Interval={500}>
                   <img src={ require("../Images/Head/bgi2.jpg").default } className='bg-img' alt='first-slide' />
                </Carousel.Item>
                <Carousel.Item Interval={500}>
                   <img src={ require("../Images/Head/bgi3.jpg").default } className='bg-img' alt='first-slide' />
                </Carousel.Item>
              </Carousel>
              <div className='kws'>
                <Row>
                 <img className='logo' alt='logo' src={ require('../Images/Head/Babel1.png') } />
                 <h1 className='babel-head'>Keywords India Scoop</h1>
                    <div className='babel-intro'>
                       <p>
                         Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!
                       </p>
                    </div>
                </Row>     
              </div>
            </Container>
        </div>
    )
}

export default head;