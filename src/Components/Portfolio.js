import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { BsFillGearFill } from 'react-icons/bs';
import MergedImages from '../assests/images/MergedImages (2).png';
import MergedImagesr from '../assests/images/MergedImagesr.png';
import MergedImagess from '../assests/images/MergedImagess.png';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
function Portfolio() {
  return (
    <div>
      <div class="container page-title text-center"><h2 class="text-center">my <span>portfolio</span></h2>
        <span class="title-head-subtitle">a few recent design and coding projects. Want to see more? Email me.</span></div>
      <section id="portfolio" >

      <Card style={{ width: '21rem', boxShadow:" 3px 6px 2px 1px rgba(0, 0, 255, .2)" , margin:"20px"}}>
        <Card.Img variant="top" src={MergedImages}/>
        <Card.Body>
          <Card.Title>Travel Agency</Card.Title>
          <h8>  Website With MERN (MongoDB, Express, React ,Nodejs) Stack</h8>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/AremAtoui/my-application" className='btn primary' target='_blank' style={{marginTop:"10px", backgroundColor:"green"}}>Github</a>
            <a href="https://www.linkedin.com/feed/" className='btn btnn' target='_blank'style={{marginTop:"10px", backgroundColor:"green", marginLeft:"10px"}} >Live Demo</a>
          </div>
          <Card.Text>
          Create a travel agency web application that allows to book a hotel that is chosen for the user, 
          while the user can create an account if he does not have an account to discover all the hotels available to book them.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    
      <Card style={{ width: '21rem' , margin:"20px", boxShadow:" 3px 6px 2px 1px rgba(0, 0, 255, .2)"}}>
        <Card.Img variant="top" src= {MergedImagesr}/>
        <Card.Body>
          <Card.Title>Parfum</Card.Title>
          <h8>Parfum Website With MERN (MongoDB, Express, React ,Nodejs) Stack</h8>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/AremAtoui/my-application" className='btn primary' target='_blank' style={{marginTop:"10px", backgroundColor:"green"}}>Github</a>
            <a href="https://www.linkedin.com/feed/" className='btn btnn'  target='_blank' style={{marginTop:"10px", backgroundColor:"green", marginLeft:"10px"}}>Live Demo</a>
          </div>
          <Card.Text>
          Create a Parfum web application that allows to buy a parfum that is chosen for the user, 
          while the user can create an account if he does not have an account to discover all the offres available to buy them.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
  
 
       <Card style={{ width: '21rem', boxShadow:" 3px 6px 2px 1px rgba(0, 0, 255, .2)" , margin:"20px"}}>
        <Card.Img variant="top" src={MergedImagess} />
        <Card.Body>

          <Card.Title>Movies</Card.Title>
          <h8>Movie App React JS</h8>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/AremAtoui/Checkpoint-movies" className='btn primary' target='_blank' style={{marginTop:"10px", backgroundColor:"green"}}>Github</a>
            <a href="https://www.linkedin.com/feed/" className='btn btnn'  target='_blank' style={{marginTop:"10px", backgroundColor:"green", marginLeft:"10px"}} >Live Demo</a>
          </div>
          <Card.Text>
          Create a movies web application that allows to see a movie that is chosen for the user, 
          
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
  

      </section>
      <div id="switcher" class="" style={{ display: "none" }}>
        <div class="content-switcher">
          <h4>STYLE SWITCHER</h4><ul><li><a href="BsFillGearFill" title="blue" class="color">
            <img src="img/styleswitcher/blue.png" alt="blue" /></a></li><li><a href="#" title="red" class="color">
              <img src="img/styleswitcher/red.png" alt="red" /></a></li>
            <li><a href="#" title="goldrenrod" class="color">
              <img src="img/styleswitcher/goldenrod.png" alt="goldrenrod" /></a></li>
            <li><a href="#" title="magenta" class="color"><img src="img/styleswitcher/magenta.png" alt="magenta" /></a></li><li><a href="#" title="yellowgreen" class="color">
              <img src="img/styleswitcher/yellowgreen.png" alt="yellowgreen" /></a></li>
            <li><a href="#" title="orange" class="color"><img src="img/styleswitcher/orange.png" alt="orange" /></a></li>
            <li><a href="#" title="green" class="color"><img src="img/styleswitcher/green.png" alt="green" /></a></li>
            <li><a href="#" title="yellow" class="color"><img src="img/styleswitcher/yellow.png" alt="yellow" /></a></li></ul>
          <br />
          <a href="" class="waves-effect waves-light btn font-weight-600 purchase hoverable">
            <span><BsFillGearFill style={{
              fontSize: "17px", position: "absolute",
              left: "40px",
              top: "500px", color: "white"
            }}> </BsFillGearFill> PURCHASE</span></a><div id="hideSwitcher">×</div></div></div>
      <div id="showSwitcher" class="styleSecondColor" ><BsFillGearFill className="Bi"></BsFillGearFill>

      </div>
         {/*-------* Footer*/}

         <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        {/* <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

      
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         arem.atoui@isimg.tn
        </a>
      </div>
    </MDBFooter>
    </div>


  )
}

export default Portfolio