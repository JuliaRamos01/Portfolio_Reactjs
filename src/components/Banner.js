import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-itens-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portifolio!</span>
                        <h1>{`Hi, I'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button onClick={() => console.log('connect')}>Let's connect! <ArrowRightCircle size ={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}