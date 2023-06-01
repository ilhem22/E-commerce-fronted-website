import React, { useState, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import products from '../products' 
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import Footer from '../components/Footer'
import Product from '../components/Product'

function MyComponent() {
  const [search, setSearch] = useState({
    e: ''
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((item) => {
      return search.e === '' ? true : item.name.toLowerCase().includes(search.e.toLowerCase());
    });
    setSearchResults(filteredProducts);
  }, [search]);

  return (
       <div>
      <Header></Header>
      <Form>
        <InputGroup className='my-3'>
          <Form.Control
            type='text'
            placeholder='Search'
            value={search.e}
            onChange={(e) => setSearch({ e: e.target.value })}
          />
        </InputGroup>
      </Form>
      

      <Row>

      {Array.isArray(searchResults) && searchResults.length > 0 ? (
        
        searchResults.map((product) => (
          
          
                <Col key ={product._id} sm={12} md={6} lg={4} xl={3} >
                  <Product product={product}/>
                </Col>
          
        ))
      
      ) 
      : (
        <p>No results found.</p>
      )}
      </Row>
       
       
      <Footer></Footer> 
    </div>
  );
}

export default MyComponent;
