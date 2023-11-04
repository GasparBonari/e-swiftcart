import React, { useEffect } from 'react';
import '../styles/contactUs.css';
import ContactPhone from '../images/contactUs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
    const embedCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64879.14975145277!2d13.455923214675094!3d52.50524854728093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1697123362548!5m2!1sen!2sde" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const parallaxValue = scrollPosition * 1.5;
    
          document.querySelector('.contact-image').style.backgroundPositionY = `-${parallaxValue}px`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
 
    return(
        <>
            <div className="contact-image"></div>

            <div className="container-contact">

                <form className='contact-form'>
                    <h1 className="title text-center mb-4">Get in touch</h1>
                     
                    <div className="input-container">
                        <label>
                            <FontAwesomeIcon icon={faUser} />
                        </label>
                        <input type="text" className="form-control thick" placeholder="Name"/>
                    </div>

                    <div className="input-container">
                        <label>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </label>
                        <input type="email" id="formEmail" className="form-control thick" placeholder="E-mail"/>
                    </div>

                    <div className="message">
                        <textarea id="formMessage" className="form-control" rows="7" placeholder="Message"></textarea>
                    </div>
                
                    <div>
                        <button type="submit" className="btn-3d" tabIndex="-1">Send message</button>
                    </div>
                </form>

                <img src={ContactPhone}></img>
            </div>

            <div className='map' dangerouslySetInnerHTML={{ __html: embedCode }} />
        </>
    )
}

export default ContactUs;