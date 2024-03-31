import React from 'react'
import './ContactForm.css';

export const ContactForm = () => {
  return (
    <div className='container-about'>
         <h1>Contact Us</h1>
        <p>Get in touch with us for event planning services and inquiries.</p>
        <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required className='name'/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required className='email'/>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" className='subject'/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required className='message'></textarea>

            <input type="submit" value="Submit" className='submit'/>
        </form>
        
        
    </div>
  )
}
