import React from "react";
import products from "../products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Card } from 'react-bootstrap'
import '../index.css';

function ProductScreen() {
  const params = useParams();
  const productId = params.id;
  const product = products.find((x) => x._id === productId);
  return (
    <div>
       <Link to='/' className="btn btn-light my-3 "  >Go back</Link>
       <Row>
          <Col md={6}>
          
            <Image src={product.image} alt={product.name} fluid   />
          </Col>

          <Col md={3}>
          <Card className="my-3 p-3 rounded " >
          <Card.Body>
              <Card.Title as="div">
           
             <h2> <strong>{product.name}</strong> </h2>
              
              </Card.Title>

              <Card.Text as="div">
              
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </Card.Text>  

              <Card.Text as="div">
                 Price : ${product.price}
                  
               </Card.Text>   

               <hr class="card-separator"></hr>

               <Card.Text as="div">
                 Description: ${product.description}
                  
               </Card.Text> 

          </Card.Body>        
          </Card>      
           
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                    Price:
                    </Col>
                    <Col>
                    <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                    Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button className='btn-block' disabled={product.countInStock === 0} type='button' >Add to Cart</Button>

                </ListGroup.Item>




              </ListGroup>
            </Card>
          </Col>


       </Row>
    </div>

  )
}

export default ProductScreen;