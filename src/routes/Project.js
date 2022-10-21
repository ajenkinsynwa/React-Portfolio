import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/heroImg2';
import ProjectsCard from '../components/ProjectsCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="My 
      Recents Projects" />
      <ProjectsCard />
      <Footer />
    
    </div>
  )
}

export default Project;