import React from 'react';
import Hero from './Hero';
import CurriculumSection from './Caricul';
import { course1Curriculum, course1CardData,curriculumData2,courseCardData2 } from "./Cources/Courseone";  // Adjust the path accordingly
import Landingpage2 from '../../components/Lpage2';
import Cariculum2 from "./Cources/Cricul2"
 import Landingpagec from './landingcourse';
 import Navbar from '@/src/components/Navbar';
 import Footer from '@/src/components/Footer';
function Page() {
  
  return (
    <div>
     <Navbar isAuthButton={false}/>
      <Landingpagec    courseTitle= "Suicide Prevention Training"
  courseSummary="The suicide prevention training is an evidence-based, set of two workshops designed to equip you with the skills to recognize the warning signs of suicide, intervene effectively, and connect individuals in crisis with appropriate resources." />  
      <Hero dataId={4}/>
      <Landingpage2  dataId={2}/>  
      <CurriculumSection curriculumData={course1Curriculum} courseCardData={course1CardData} />
      {/* <Cariculum2  dataId={5} />   // Adjust the id accordingly */}
      

      <Footer />
    </div>
  );
}

export default Page;
