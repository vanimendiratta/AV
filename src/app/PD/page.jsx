import React from 'react';
import Hero from './Hero';
import CurriculumSection from './Caricul';
import { course1Curriculum, course1CardData,curriculumData2,courseCardData2 } from "../Course/Cources/Courseone";  // Adjust the path accordingly
import Landingpage2 from '../../components/Lpage2';
import Landingpagec from '../Course/landingcourse';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
// import Cariculum2 from "./Cources/Cricul2"
function Page() {
  return (
    <div>
    <Navbar isAuthButton={false}/>
            <Landingpagec    courseTitle="Comprehensive Personality Development for Aspiring Psychologists" 
  courseSummary="This course is meticulously designed to equip aspiring psychologists with essential skills and knowledge for personal and professional growth. With a focus on communication, cultural competency, presentation skills, and financial literacy, participants will be well-prepared for various therapeutic settings." />
      <Hero dataId={5}/>
      <Landingpage2  dataId={2}/>  
      {/* <CurriculumSection curriculumData={course1Curriculum} courseCardData={course1CardData} /> */}
      {/* <Cariculum2  dataId={5} />   // Adjust the id accordingly */}
      <CurriculumSection curriculumData={curriculumData2} courseCardData={courseCardData2} />

      <Footer />
    </div>
  );
}

export default Page;
