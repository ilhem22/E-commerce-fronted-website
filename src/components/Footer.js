import React from 'react'
import { Row , Col , Image} from 'react-bootstrap'

function Footer() {
  return (
    
      <footer class="text-black bg-secondary ">
        <Row >
        <Col md={4}>
        <div className="text-center py-3">
          <h className="mx-3 my-5"> <strong> Get connected with us on social networks: </strong></h>
          <br/> <br/>

    <i class="fab fa-facebook-f mx-2"></i>
    <i class="fab fa-twitter mx-2"></i>
    <i class="fab fa-google mx-2"></i>
    <i class="fab fa-instagram mx-2"></i>
    <i class="fab fa-linkedin mx-2"></i>
    <i class="fab fa-github mx-2"></i>
        </div>
        </Col>
        <Col md={4}>
        <div className="text-center py-3">
        <h className="mx-3 my-5"> <strong> About us </strong> </h>
        <br/> <br/>
        <h className="mx-3 my-5"> General overview </h>
        <br/> <br/>
        <h className="mx-3 my-5"> The Best Collection Group </h>
        <br/> <br/>
        <h className="mx-3 my-5"> Careers </h>
        <br/> <br/>
        <h className="mx-3 my-5"> Our Blog </h>

        </div>
        </Col>

        <Col md={4}>
        <div className="text-center py-3">
        <h className="mx-3 my-5"> <strong> Payment methods</strong> </h>
        <br/> <br/>
        <Image src={'/images/dahab.jpg'} style={{ width: '70px', height: '50px'}} />
        <br/> <br/>
        <Image src={'/images/cpa.jpg'} style={{ width: '70px', height: '50px'}} />
        <br/> <br/>
        <Image src={'/images/vi.jpg'} style={{ width: '70px', height: '50px'}} />

        

        </div>
        
        </Col> 
        </Row>
        
       

          <Row >
            <Col className=" text-center py-3 "  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} expand="xl" >
            <strong> Copyright &copy; Best Collection </strong>
            </Col>
          </Row>
      
      </footer>
    
  )
}

export default Footer
