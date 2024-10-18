import React from 'react';
import Hero from './Hero';
import CurriculumSection from './Caricul';
import { IPcourse3data  ,IPCardData} from "../Course/Cources/Courseone";  // Adjust the path accordingly
import Landingpage2 from '../../components/Lpage2';
import Landingpagec from '../Course/landingcourse';
import Navbar from '@/src/components/Navbar';
 import Footer from '@/src/components/Footer';
// import Cariculum2 from "./Cources/Cricul2"
function Page() {
  return (
    <div>
    <Navbar isAuthButton={false}/>
            <Landingpagec    courseTitle="Immersion Program: Week-Long Industry Experience" 
  courseSummary="One of its kind  immersion program offers a comprehensive industry experience through daily field visits (Delhi NCR) to various organisations, providing unique insights and practical knowledge. Participants will earn a unique certification for each day's visit, validating their participation and skills acquired." />
      <Hero dataId={6}/>
      <Landingpage2  dataId={2}/>  
      {/* <CurriculumSection curriculumData={course1Curriculum} courseCardData={course1CardData} /> */}
      {/* <Cariculum2  dataId={5} />   // Adjust the id accordingly */}
      <CurriculumSection curriculumData={IPcourse3data} courseCardData={IPCardData} />

      <Footer />
    </div>
  );
}

export default Page;
