import React from 'react';
import Hero from './Hero';
import CurriculumSection from './Caricul';
import { course1Curriculum, course1CardData,coursessCurriculum ,coursessCardData} from "../Course/Cources/Courseone";  // Adjust the path accordingly
import Landingpage2 from '../../components/Lpage2';
// import Cariculum2 from "./Cources/Cricul2"
 import Landingpagec from '../Course/landingcourse';
 import Navbar from '@/src/components/Navbar';
 import Footer from '@/src/components/Footer';
function Page() {
  
  return (
    <div>
     <Navbar isAuthButton={false}/>
      <Landingpagec    courseTitle= "Stepping Stones"
  courseSummary="This program is an essential resource for building a strong foundation in therapy. This course offers practical tools and insights to help you develop essential skills, create meaningful therapeutic relationships, understand and effectively support yourself and your clients." />  
      <Hero dataId={7}/>
      <Landingpage2  dataId={2}/>  
      <CurriculumSection curriculumData={coursessCurriculum} courseCardData={coursessCardData} />
      {/* <Cariculum2  dataId={5} />   // Adjust the id accordingly */}
      

      <Footer />
    </div>
  );
}

export default Page;
