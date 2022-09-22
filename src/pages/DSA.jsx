import React from 'react'
import "../pages/Ass.css"
import img4 from "../components/dsa.png"

const DSA = () => {
  return (
    <div>

        <div className="container_ps">
            <div className="tiles">
            <a href="https://drive.google.com/drive/folders/1YWcX5kmtYAaa9SXW42zmorMhoePJmh9Z?usp=sharing">
             <img src={img4} alt="" className='scall'/>
                <p className='text23'>Semester-1</p>
                </a> 

            </div>
            <div className="tiles">
            <a href="https://docs.google.com/spreadsheets/d/1enODMq9_T923ccNjmpyPXkxLuOIzCWOdr9i13hPtjFU/edit?usp=sharing">
             <img src={img4} alt="" className='scall'/>
                <p className='text23'>Semester-2</p>
                </a> 

            </div>
            <div className="tiles">
           <a href='https://drive.google.com/drive/folders/1ARdczAjUAQEI69JlVLU4yDhPqDzxntbE?usp=sharing'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-3</p>
                </a>
            </div>
            <div className="tiles">
           <a href='https://drive.google.com/drive/folders/1ixvtUFcARGTcTFcDFEo6CEPOjJ7powrF?usp=sharing'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-4</p>
                </a>
            </div>
            <div className="tiles">
           <a href='https://drive.google.com/drive/folders/1mx1OTW9d7Gz0jAU_ySegfSn3OYOOLyV7?usp=sharing'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-5</p>
                </a>
            </div>
            <div className="tiles">
           <a href='https://drive.google.com/file/d/1Rzs4byhMZdleclDNRo4d4M5hQqoNt3yq/view?usp=sharing'>
            <img src={img4} alt="" className='scall' />
                <p className='text23'>Semester-6</p>
                </a>
            </div>
            </div>

    </div>
  )
}

export default DSA