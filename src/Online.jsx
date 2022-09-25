import React from 'react'
import img1 from './components/zoom.png'
import img2 from './components/meet.png'
import img3 from './components/team.png'
import "./Online.css"

const Online = () => {
  return (
    
    <>
        <div className="container_ps">
            <div className="meets">
            <a href="https://meet.google.com/gas-bwcw-jzy" target="_blank">
             <img src={img2} alt="" />
                <p className='meet_p'>google meet</p>
                </a> 

            </div>
            <div className="meets">
            <a href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software" target="_blank">
             <img src={img3} alt="" />
                <p className='meet_p'>Microsoft Team</p>
                </a> 

            </div>
            <div className="zooms">
           <a href='https://us05web.zoom.us/j/87880066370?pwd=aEVYVEFjcE41OWdyNUl6bk9mWlREQT09' target="_blank">
            <img src={img1} alt="" />
                <p className='zoom_p'>zoom class</p>
                </a>
            </div>
        </div>
        
    </>
  )
}

export default Online