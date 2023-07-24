import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import {AiFillBook} from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { Tilt } from 'react-tilt';
function Home() {
  return (
    <div className="App">
      <div className="Big">
   
        
        
        
        
         <Tilt  >
      <div style={{marginTop:"50px"}}>
         <img className="Name" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/339088256_567185958843262_1597734654359871899_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=blOI3HI9bUAAX82RmaA&_nc_oc=AQmHkQ75QauvYwvDKxZPOTxBb5mW_nwdUI7VAcVpbNHYR1lA_r4-5tm1IvGwRdVenPqnbux7eMRAxj3SjH192aga&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTFXT586rhlegQPfjzMS4PFNO4OxJDTjg7q8p9Q55Yxwg&oe=64CAB7FD" style={{ height: 300, width: 300, borderRadius:"50%" }}/></div>
    </Tilt>
       
        <div class="main-text" id="selector"><h3>Hi there !</h3><h1 class="ah-headline d-flex"> I'M
          <div>&nbsp;<span> a web developer</span><span class="sc-bdVaJa bBePZj"></span></div></h1>
          <p style={{fontSize:"20px"}}> 
            Am a graduate in research master's degree in Computer Science and Multimedia at the Higher Institute of Computer Science and Multimedia of Gabes.
            I am looking for an internship for a job offer. Dynamic and having an exellent sense of contact.
            I like to collaborate with various interlocutors.
            Voluntary, I distinguish myself by my commitment to the service of the collective and my taste for learning.
          </p>
          <div class="call-to-actions-home">
            <div class="text-left"><a href="#about" class="btn link-portfolio-one">
              <span><FaUser style={{
                fontSize: "17px", position: "absolute",
                left: "40px",
                top: "809px", color: "white"
              }}></FaUser></span></a>
              <a href="/about" class="btn btn-secondary link-portfolio-two" style={{ backgroundColor: "#72b626", margin: "10px", borderRadius:"20px" }}>
                <span><i class="fa fa-suitcase"></i>MORE ABOUT ME</span></a>
              <a href="/portfolio" class="btn btn-secondary link-portfolio-two" style={{ backgroundColor: "#72b626", borderRadius:"20px" }} >
                <span><FaSuitcase></FaSuitcase><i class="fa fa-suitcase"></i>PORTFOLIO</span></a>
                {/* <a href="/contact" class="btn btn-secondary link-portfolio-two" style={{ backgroundColor: "#72b626", borderRadius:"20px",  margin: "10px" }} >
                <span><AiFillBook></AiFillBook><i class="fa fa-suitcase"></i>CONTACT</span></a> */}
            </div></div>
      
            </div>
         
            </div>
           

   </div>


  )
}

export default Home