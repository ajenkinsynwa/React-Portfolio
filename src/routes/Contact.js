import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/heroImg2";
import Form from "../components/Form";


const Contact = () => {
  return (
   <div>
    <Navbar />
    <HeroImg2 heading="Contact Me." text=""/>
    <Form />
    <Footer />
   </div>
  )
}

export default Contact;