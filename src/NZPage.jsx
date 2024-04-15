import React, { useState } from 'react'
import Hero from './Components/Hero/Hero'
import { NzList } from './Components/Australia/ReasonApi'
import AustraliaReason from './Components/Australia/AustraliaReason'

const NZPage = () => {

  const [data, SetData] = useState(NzList);

  return (
    <div>
      <Hero h1="New Zeland" />
      <div className="container">
        <div className="Australia-Big-Box">
          <div className="Para">
            <h1>Study in <span className='choose-heading'>New Zeland</span>?</h1>
            <p><b>When considering studying abroad</b>, New Zealand emerges as a compelling option, offering a unique blend of academic excellence, natural beauty, and cultural richness. Beyond the allure of its pristine landscapes and friendly locals, New Zealand provides a conducive environment for personal and academic growth. In this essay, we will explore the manifold benefits of studying in New Zealand, from its <span className='choose-heading'>world-class education system</span> and diverse range of programs to its welcoming atmosphere and abundant post-graduation opportunities.</p>
            <p>At the heart of New Zealand's appeal lies its renowned education system, which prioritizes innovation, practical learning, and academic rigor. With a wide array of programs spanning various disciplines, students have the flexibility to pursue their academic passions and carve out their unique educational journey. Moreover, New Zealand's commitment to quality assurance ensures that students receive a high-quality education that is globally recognized and respected. As students immerse themselves in this dynamic learning environment, they not only gain valuable knowledge and skills but also develop critical thinking, problem-solving, and communication abilities that are essential for success in today's globalized world.</p>
          </div>
          {data.map((obj) => {
            return <AustraliaReason key={obj.id} {...obj} />
          })}
          {/* <AustraliaReason h2="abc" p="loremsjdnbgvkgjdbvkjsdb"/> */}
        </div>
      </div>

      <div className='List-container'>
        <h2>List Of Universities in New Zeland</h2>
        <div className="container">
          <div className="List-Row">
            <div className="list-column">
              <ul>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Auckland</h3></li>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Otago</h3></li>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Victoria University of Wellington</h3></li>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Canterbury</h3></li>
              </ul></div>
            <div className="list-column">
              <ul>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Massey University</h3></li>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>University of Waikato</h3></li>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Auckland University of Technology</h3></li>
                <li><img className='blt' src='./images/blt.png' alt='' /><h3>Lincoln University</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <h1>Courses Avaliable</h1> */}
        <div className="List-Row">
          <div className="list-column">
            <h2 className='country-h2'>Bachelor’ Courses</h2>
            <ul>
              <li>Bachelor of Arts</li>
              <li>Bachelor of Science</li>
              <li>Bachelor of Commerce</li>
              <li>Bachelor of Engineering</li>
              <li>Bachelor of Laws</li>
              <li>Bachelor of Business Administration</li>
              <li>Bachelor of Education</li>
              <li>Bachelor of Nursing</li>
              <li>Bachelor of Fine Art</li>
              <li>Bachelor of Information Technology</li>
              <li>Bachelor of Health Science</li>
              <li>Bachelor of Architecture</li>
              <li>Bachelor of Design</li>
              <li>Bachelor of Environmental Science</li>
              <li>Bachelor of Communication Studies</li>
              <li>Bachelor of Tourism Management</li>
              <li>Bachelor of Psychology</li>
              <li>Bachelor of Applied Science </li>
              <li>Bachelor of Communication</li>
              <li>Bachelor of Media Studies</li>
              <li>Bachelor of International Relations</li>
              <li>Bachelor of Biomedical Science</li>
              <li>Bachelor of International Business</li>
              <li>Bachelor of Food Science and Technology</li>
              <li>Bachelor of Animatio</li>
              <li>Bachelor of Health Informatics</li>
              <li>Bachelor of Construction Management</li>
              <li>Bachelor of Criminology</li>
              <li>Bachelor of Medical Laboratory Scienc</li>
            </ul>
          </div>
          <div className="list-column">
            <h2 className='country-h2'>Master’s course</h2>
            <ul>
              <li>Master of Arts</li>
              <li>Master of Science</li>
              <li>Master of Business Administration</li>
              <li>Master of Commerc</li>
              <li>Master of Engineering</li>
              <li>Master of Laws</li>
              <li>Master of Education</li>
              <li>Master of Nursing</li>
              <li>Master of Fine Arts</li>
              <li>Master of Information Technology</li>
              <li>Master of Health Science</li>
              <li>Master of Architecture</li>
              <li>Master of Design</li>
              <li>Master of Environmental Scienc</li>
              <li>Master of Communication Studies</li>
              <li>Master of Tourism Management</li>
              <li>Master of Psychology</li>
              <li>Master of Public Health</li>
              <li>Master of Applied Finance</li>
              <li>Master of International Business</li>
              <li>Master of Engineering Management</li>
              <li>Master of Computer Science</li>
              <li>Master of Applied Psychology</li>
              <li>Master of International Relations</li>
              <li>Master of Applied Linguistics</li>
              <li>Master of Supply Chain Management</li>
              <li>Master of Sustainable Development Goals</li>
              <li>Master of Data Scienc</li>
              <li>Master of Human Resource Managemen</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NZPage
