import React from 'react'
// import Main from './Components/Main/Main'
import Title from './Components/Title/Title'
import AboutComp from './Components/About/AboutComp'
import Hero from './Components/Hero/Hero'
import AboutRight from './Components/About/AboutRight'
// import Header from './Components/Top/Header'

const Service = () => {
  return (
    <div>
      {/* <Main /> */}
      <Hero h1="Our Services" h2="" />
      {/* <Header /> */}

      <div className="container">
        <Title subTitle="Our Services" Title="What We Offer" />
        <AboutComp sTitle="Consultation and Assessment" bTitle="Navigating Visa Solutions" p1="Unitrack Global specializes in comprehensive consultation and assessment for students pursuing study abroad. Through meticulous evaluation, they provide personalized guidance, considering academic backgrounds, career goals, and preferences. Unitrack assesses eligibility criteria such as academic qualifications, language proficiency, and financial status, offering tailored recommendations for study visa applications. Additionally, they offer insights into various study destinations, considering factors like university reputation and job prospects." p2="With customized strategies, Unitrack empowers students to navigate university selection, application procedures, and visa documentation, increasing their chances of successful admission and obtaining study visas." source="./images/s1.png" />

        <AboutRight sTitle='Application Assistance' bTitle='Guiding Visa Journey' p1="Unitrack Global provides comprehensive application assistance services to streamline the study visa application process for students. Our dedicated team guides students through every step, from filling out application forms to compiling required documentation, ensuring accuracy and completeness. We offer personalized support tailored to each student's needs and destination country, helping them navigate any complexities or challenges they may encounter." p2='With our expertise and attention to detail, we maximize the chances of successful visa applications, providing peace of mind to students and their families. Unitrack Global aims to simplify the application journey, empowering students to pursue their academic goals abroad confidently.' source='./images/s2.png' />

        <AboutComp sTitle="University selection" bTitle="Choosing the Right University" p1="Unitrack Global specializes in university selection services, assisting students in finding the perfect academic institution to match their academic aspirations and career goals. Our experienced team evaluates various factors such as the student's academic profile, desired field of study, budget considerations, and preferred location. Through personalized consultations, we provide tailored recommendations and insights into reputable universities worldwide." p2="We consider factors such as university rankings, program offerings, faculty expertise, research opportunities, campus facilities, and student support services. By carefully matching students with universities that align with their aspirations and preferences, Unitrack Global ensures that students make informed decisions and embark on a fulfilling academic journey abroad." source="./images/s3.png" />

        <AboutRight sTitle='Financial guidance' bTitle='Navigating Financial Terrain' p1="Unitrack Global offers comprehensive financial guidance services to help students navigate the financial aspects of studying abroad. Our expert advisors provide detailed information on tuition fees, living expenses, and available financial aid options such as scholarships, grants, and loans." p2=' We work closely with students to create personalized financial plans that suit their budget and funding requirements.' source='./images/s4.png' />

        <AboutComp sTitle=" Pre-departure support" bTitle="Seamless Transition" p1="Unitrack Global provides comprehensive pre-departure support services to ensure students are well-prepared for their study abroad journey. Our team offers guidance on essential pre-departure tasks such as arranging travel logistics, securing accommodation, and obtaining necessary travel documents. We provide detailed information on visa requirements, health insurance, and travel advisories, helping students navigate any potential challenges or concerns." p2=" Additionally, we organize pre-departure orientation sessions to familiarize students with their destination country's culture, customs, and academic expectations. Our goal is to ease the transition process for students and ensure they feel confident and prepared to embark on their academic adventure abroad." source="./images/s5.png" />

      </div>
    </div>
  )
}

export default Service
