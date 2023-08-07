import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import back from '../../assets/180DC_Background.jpg'
import classes from './Mentors.module.css'

const Mentors = () => {
  return (
    <div style={{backgroundColor:'#F9F5EB',color:'#7DCE13',padding:'2% 0'}} id="mentors" className={classes['mentors']}>
        <h1 style={{textAlign:'center',paddingBottom:'2%'}}><span style={{color:'black'}}>Our </span>Mentors</h1>
        <Carousel style={{padding:'0%',margin:'0 5%'}}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={back}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={back}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={back}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Mentors;