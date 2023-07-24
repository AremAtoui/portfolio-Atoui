import React from 'react'
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsMessenger, BsWhatsapp} from 'react-icons/bs';
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jdig26m', 'template_4wtcdcm', form.current, 'HEy-cTgaDwwZhB7lE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact' style={{  backgroundColor: "#F3F6FD",
      boxShadow: "0px 1px 13px 0px #0000000d"}}>
    <div class="container page-title text-center"><h2 class="text-center">get <span>in touch</span></h2>
    <span class="title-head-subtitle">I’m always open to discussing product design work or partnerships.</span></div>
   
        <div className="container contact_container">
         
        < div style={{boxShadow:" 3px 6px 2px 1px rgba(0, 0, 255, .2)", width:"152px"}}>
            <MdOutlineMailOutline className='contact_option-icon' style={{color:"#72b626"}}/>
            <h4>Email</h4>
            <h5 style={{fontSize:"0.8rem"}}>arem.atoui@isimg.tn</h5>
            <a href="https://mail.google.com/mail/u/0/?hl=fr#inbox" style={{textDecoration:"none", color: "#72b626"}}>Send a message</a>
     </div>
     <br/>
     < div style={{boxShadow:" 3px 6px 2px 1px rgba(0, 0, 255, .2)", width:"152px"}}>
            <BsMessenger  className='contact_option-icon' style={{color:"#72b626"}}/>
            <h4>Messenger</h4>
            <h5 style={{fontSize:"1.1rem"}}>Arem Atoui</h5>
            <a href="https://www.facebook.com/" style={{textDecoration:"none", color: "#72b626"}}>Send a message</a>
            </div>
            <br/>
            < div style={{boxShadow:" 3px 6px 2px 1px rgba(0, 0, 255, .2)", width:"152px"}}>
            <BsWhatsapp className='contact_option-icon' style={{color:"#72b626"}}/>
            <h4>WhatsApp</h4>
            <h5 style={{fontSize:"1.1rem"}}>+21627793044</h5>
            <a href='https://web.whatsapp.com/send?phone=27793044' style={{textDecoration:"none", color: "#72b626"}}>Send a message</a>
       </div>
      
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required></textarea>
          <button className='btn primary' type='submit' style={{background:"#72b626", width:"128px", height: "35px"}}>Send Message</button>
        </form>
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
          <p>****
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
    </section>
  )
}

export default Contact