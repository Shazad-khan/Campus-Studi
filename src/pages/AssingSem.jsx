import React from 'react'
import "../pages/Ass.css"
import img1 from "../components/contract.png"
import { NavLink } from 'react-router-dom'

const AssingSem = () => {
  return (
    <div>
        <div className="container_ps">
            <div className="tiles">
            <NavLink to="/Sem1allyear"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Sem-1 <br /> All <br /> 
                Assigments</p>
             </NavLink>

            </div>
            <div className="tiles">
            <NavLink to="/Sem1allyear"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Sem-2 <br /> All <br /> 
                Assigments</p>
             </NavLink>

            </div>
            <div className="tiles">
            <NavLink to="/Sem1allyear"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Sem-3 <br /> All <br /> 
                Assigments</p>
             </NavLink>
            </div>
            <div className="tiles">
            <NavLink to="/Sem1allyear"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Sem-4 <br /> All <br /> 
                Assigments</p>
             </NavLink>
            </div>
            <div className="tiles">
            <NavLink to="/Sem1allyear"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Sem-5 <br /> All <br /> 
                Assigments</p>
             </NavLink>
            </div>
            <div className="tiles">
            <NavLink to="/Sem1allyear"> <img src={img1} alt="" className='scall' />
                <p className='text23'>Sem-6 <br /> All <br /> 
                Assigments</p>
             </NavLink>
            </div>
           
           
        </div>
       
    </div>
  )
}

export default AssingSem