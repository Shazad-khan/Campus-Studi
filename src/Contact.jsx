import React, {useState} from "react";
import styled from "styled-components";


const Contact = () => {
  const[userData, setUserData]= useState({
    userName: "",
    email:"",
    message:"",
  });

  let name,value;
  const postUserData=(event)=>{
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]:value})
  }
  // connect with firebase
    const submitData=async(event)=>{
      event.preventDefault();
      const {userName,email,message}=userData;
      if(userName & email & message){
      const res = fetch('https://campsstudio-8d8b1-default-rtdb.firebaseio.com/userDataRecords.json',
      {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        message,
      }),
      }
    );
    if(res){
      setUserData({
        userName: "",
        email:"",
        message:"",
      });
      alert("Data Stored");
    }else{
      alert("please Fill the Data");
    }
  }else{
    alert("please Fill the Data");
  }
  };
    
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;
  

      .contact-form {
        max-width: 50rem;
        margin: auto;
      textarea{
        border:2px solid rgb(8,217,213);
        border-radius:10px;
      }
      .bt11{
        border:2px solid rgb(8,217,213);
        border-radius:10px;
      }

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          
        
        

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s
            ;
           

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">24/7 Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.8540597641722!2d86.19768952745373!3d22.80083147214153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3120cac91c5%3A0x73c6bf11a0a0f479!2sKarim%20City%20College!5e0!3m2!1sen!2sin!4v1661169016483!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xaykoqgb"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="userName"
              placeholder="userName"
              autoComplete="off"
              className="bt11"
              required
              value={userData.userName}
              onChange={postUserData}
              
            />

            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="off"
              className="bt11"
              required
              value={userData.email}
              onChange={postUserData}
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="message"
              required
              value={userData.message}
              onChange={postUserData}
              ></textarea>

            <input type="submit" value="send" onClick={submitData}/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
