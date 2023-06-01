import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col, Row, Image } from 'react-bootstrap';
import '../index.css';
import products from "../products";
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
function WelcomeScreen() {



  const summerProducts = products.filter((product) => product.category === 'summer');
  const latestProducts = products.filter((product) => product.category === 'latest');
  useEffect(() => {
    const scrollContainer = document.querySelector(".wrapper");
    const backbtn = document.getElementById("backbtn");
    const nextbtn = document.getElementById("nextbtn");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });

    nextbtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 900;
    });

    backbtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 900;
    });

  }, []);

  return (
    <div>
      <Header></Header>
      <div class="alert alert-info" role="alert">
      <h4 class="alert-heading text-center"><strong>Offer</strong></h4>
      <h3 class="alert-heading text-center">  -25% on all products </h3>
    

        </div>
      <Row>
        <h3 className="text-center my-3"> SHINE THIS SUMMER WITH BEST COLLECTION </h3>
        <h className="text-center my-3"> Discover our latest collection of bags designed to impress under the sun.</h>
      </Row>
      <Row>
        <Image src={'/images/ja.jpg'} style={{ width: '1400px', height: '400px', marginTop: '10px', marginBottom: '10px' }} />
      </Row>
      <Row>
        <h3 className="my-3">  SUMMER COLLECTION </h3>
        <div class="b-wrapper">
          <Image src={'/images/back.png'} style={{ width: '40px', height: '40px', marginRight: '1200px' }} id="backbtn" />
          <Image src={'/images/next.png'} style={{ width: '40px', height: '40px' }} id="nextbtn" />
          <div class="wrapper">
          
          {summerProducts.map((product) => (
            <div class="item" key={product._id}>
              <Col>
              <Image src={product.image} alt={product.name} fluid  style={{ width: '200px', height: '200px', display: 'block',margin: '0 auto', }} />

              <Link to={`/product/${product._id}`}>
              <h> <strong> {product.name} </strong> </h>
              </Link>

              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </Col>

              </div>
                    
            ))}
            
            
          </div>
        </div>
      </Row>
      <Row>
        <h3 className="my-3">  Latest COLLECTION </h3>
        <div class="b-wrapper">
          <Image src={'/images/back.png'} style={{ width: '40px', height: '40px', marginRight: '1200px' }} id="backbtn" />
          <Image src={'/images/next.png'} style={{ width: '40px', height: '40px' }} id="nextbtn" />
          <div class="wrapper">
          
          {latestProducts.map((product) => (
            <div class="item" key={product._id}>
              <Col>
              <Image src={product.image} alt={product.name} fluid  style={{ width: '200px', height: '200px', display: 'block',margin: '0 auto', }} />

              <Link to={`/product/${product._id}`}>
              <h> <strong> {product.name} </strong> </h>
              </Link>

              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </Col>

              </div>
                    
            ))}
            
            
          </div>
        </div>
      </Row>
      <div class="text-center">
      <button type="button" class="btn btn-primary btn-lg my-5">follow us on instagram</button>
      </div>
      <div class="alert alert-info" role="alert">
          <Row>
          <Col md={9}> 
             
            <h class="alert-heading text-center"> <strong> Become a member of our fidelity program and benefit from exclusive offers and advantages! </strong> </h>
         </Col>
         

         <Col md={3}>
         <button type="button" class="btn btn-light float-right">Become a member</button>
         </Col>
         </Row>


        </div>

      <Footer></Footer>
    </div>
  );
}

export default WelcomeScreen;
