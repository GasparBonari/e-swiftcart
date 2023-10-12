import React, { useEffect } from 'react';
import '../styles/contactUs.css';
import ContactPhone from '../images/contactUs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactUs()
{

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

                <form>
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
                        <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
                    </div>
                </form>

                <img src={ContactPhone}></img>
            </div>
        </>
    )
}

export default ContactUs;