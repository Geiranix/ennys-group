import React from 'react';
import AboutSection from '../components/AboutSection';
import Vision from "../components/Vision";
import CompanyValues from '../components/CompanyValues';


const About = () => {
  return (
    <section className="about" id="about">
 
      <AboutSection/>
      <Vision/>
      <CompanyValues/>
    </section>
  );
};

export default About;
