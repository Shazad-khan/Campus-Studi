import React from 'react'
import "../pages/Ass.css"
import img4 from "../components/dsa.png"

const DSA = () => {
  return (
    <div>

        <div className="container_ps">
            <div className="tiles">
            <a href="https://docs.google.com/spreadsheets/d/1enODMq9_T923ccNjmpyPXkxLuOIzCWOdr9i13hPtjFU/edit#gid=0">
             <img src={img4} alt="" className='scall'/>
                <p className='text23'>Semester-1</p>
                </a> 

            </div>
            <div className="tiles">
            <a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/">
             <img src={img4} alt="" className='scall'/>
                <p className='text23'>Semester-2</p>
                </a> 

            </div>
            <div className="tiles">
           <a href='https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-3</p>
                </a>
            </div>
            <div className="tiles">
           <a href='https://workat.tech/problem-solving/lists/three-month-dsa-practice-sheet/practice'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-4</p>
                </a>
            </div>
            <div className="tiles">
           <a href='https://docs.google.com/spreadsheets/d/1enODMq9_T923ccNjmpyPXkxLuOIzCWOdr9i13hPtjFU/edit#gid=0'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-5</p>
                </a>
            </div>
            <div className="tiles">
           <a href='https://docs.google.com/spreadsheets/d/1enODMq9_T923ccNjmpyPXkxLuOIzCWOdr9i13hPtjFU/edit#gid=0'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-6</p>
                </a>
            </div>
            </div>

    </div>
  )
}

export default DSA