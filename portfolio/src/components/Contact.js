import email_icon from './../icons/email.svg';
import linkedin_icon from  './../icons/linkedin.svg';
import github_icon from './../icons/github.svg';

import './../styles/Contact.css';

const Contact = ()=>{

    const LINKEDIN_URL = 'https://www.linkedin.com/in/danielcarpiocamacho/';
    const GITHUB_URL = 'https://github.com/danielcarpio';
    const EMAIL = 'mailto:danielcarpioc@gmail.com';
    const openWebsite = (url)=>{
        window.open(url, '_blank');
    }

    return (
        <div className='contact' id='contact'>
            <h2 className='title'>CONTACT</h2>
            <hr />
            <div className='contact_button_list'>
                <div onClick={()=>{openWebsite(EMAIL)}} className='contact_button email'><img alt='email' src={email_icon}/>Email</div>
                <div onClick={()=>{openWebsite(LINKEDIN_URL)}} className='contact_button linkedin'><img alt='Linkedin' src={linkedin_icon}/> Linkedin</div>
                <div onClick={()=>{openWebsite(GITHUB_URL)}} className='contact_button github'><img alt='email' src={github_icon} />Github</div>
            </div>
        </div>
    );
}

export default Contact;