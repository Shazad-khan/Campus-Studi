import React from 'react'
import "../pages/Ass.css"
import img2 from "../components/chats.png"
const Chats= () => {
  return (
    <div><div className="container_ps">
    <div className="tiles">
    <a href="http://localhost:3000/">
     <img src={img2} alt="" className='scall'/>
        <p className='text23'>Messenger</p>
        </a> 

    </div>
</div>
</div>
  )
}

export default Chats