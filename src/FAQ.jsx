import React from 'react'
import img56 from './components/faq23.png'
import './assets/Faq.css'

const FAQ = () => {
  return (
    <>
      <div className="can">
        <div className="imogi">
           <img src={img56} alt="" />
        </div>
        <div className="text_faq">
          <p className='line_1'>Why this is next generaton task manager..! </p>
          <p className='line_2'>We had developed a web application which can manage all the task
            which are done manually in the college that can be done online through 
            our website this website can take exams and assigned the assignments to
             the students, students can submit their assignments and the teacher can give 
             marks on that on this website it self. The students do not have to go anywhere and install different IDEs for different language this website also give the facility to write code and run directly on through the multi language compiler used in it. It will also give a benefit to the teacher that they do not have to share the class link every time they can just embed it once and they can just click on classes and they will be directly land on the meet page and they can start the class for that. Students don’t have to worry about the notes the notes will be also available over the website and the syllabus as well, the students can pay the fees also from this website and also for the communication there is a messenger provided in this website.
</p>
        </div>
      </div>
    </>
  )
};


export default FAQ