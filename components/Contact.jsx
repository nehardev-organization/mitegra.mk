import React, {useState, useRef} from "react";
import emailjs from 'emailjs-com';
import style from '../styles/Contact.module.css'

const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_oj6nxus', 'template_l2jt7ji', form.current, 'user_mzImomBFN2igtV8fhRjt5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };
    
   
    return (
        
        <>
        <div className={style.wraper}>
            <form  ref={form} onSubmit={sendEmail}>
                <input type="text" className={style.email} placeholder="Email" name="email" />
                <input type="text" className={style.number} placeholder="Number" name="number" />
                <input type="text" className={style.fname} placeholder="Frist name" name="FristName" />
                <input type="text" className={style.lname} placeholder="Last Name" name="lastName" />
                <input type="text" className={style.mess} placeholder="Message" name="message" />
                <input type="submit" className={style.submit} value="Contact Us" />
            </form>
            
        </div>
        </>
    )

}

export default Contact