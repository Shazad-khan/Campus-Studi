import React from 'react'
import img1 from "../components/note.png"
import img2 from "../components/dsa.png"
import img3 from "../components/question.png"
import img4 from "../components/assig.png"
import img5 from "../components/sem.png"
import "../pages/Ass.css"
import { NavLink } from "react-router-dom";

const Assigmant = () => {
  return (
    <>  
       <div className="container_ps">
       <div className="tiles">
            <NavLink to="/Notes"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Notes</p>
             </NavLink>
            
            </div>
            <div className="tiles">
            <NavLink to="/DSA"> <img src={img2} alt="" className='scall' />
                <p className='text23'>DSA</p>
             </NavLink>
            
            </div>
            <div className="tiles">
            <NavLink to="/Questions"> <img src={img3} alt="" className='scall' />
                <p className='text23'>Questions</p>
             </NavLink>
            
            </div>
            <div className="tiles">
            <NavLink to="/Assingments"> <img src={img4} alt="" className='scall' />
                <p className='text23'>Assignment</p>
             </NavLink>
            
            </div>
            <div className="tiles">
            <NavLink to="/Semesters"> <img src={img5} alt="" className='scall' />
                <p className='text23'>Semester</p>
             </NavLink>
            
            </div>
            
        </div>
        </>
  )
}

export default Assigmant