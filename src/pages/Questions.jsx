import React from 'react'
import "../pages/Ass.css"
import img4 from "../components/qut.png"
import { NavLink } from 'react-router-dom'

const Questions = () => {
  return (
    <div><div className="container_ps">
    <div className="tiles">
    <NavLink to="/QuestionSemYear"> <img src={img4} alt="" className='scall' />
                <p className='text23'> sem-1 question</p>
             </NavLink>

    </div>
    <div className="tiles">
    <NavLink to="/QuestionSemYear"> <img src={img4} alt="" className='scall' />
                <p className='text23'>sem-2 question</p>
             </NavLink>

    </div>
    <div className="tiles">
    <NavLink to="/QuestionSemYear"> <img src={img4} alt="" className='scall' />
                <p className='text23'>sem-3 question</p>
             </NavLink>
    </div>
    <div className="tiles">
    <NavLink to="/QuestionSemYear"> <img src={img4} alt="" className='scall' />
                <p className='text23'>sem-4 question</p>
             </NavLink>
    </div>
    <div className="tiles">
    <NavLink to="/QuestionSemYear"> <img src={img4} alt="" className='scall' />
                <p className='text23'>sem-5 question</p>
             </NavLink>
    </div>
    <div className="tiles">
    <NavLink to="/QuestionSemYear"> <img src={img4} alt="" className='scall' />
                <p className='text23'>sem-6 question</p>
             </NavLink>
    </div>
   
   
</div>
</div>
  )
}

export default Questions