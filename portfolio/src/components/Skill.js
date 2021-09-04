import js_icon from './../icons/icons8-javascript.svg';
import python_icon from './../icons/icons8-python.svg';
import django_icon from './../icons/icons8-django.svg';
import linux_icon from './../icons/linux-brands.svg';
import docker_icon from './../icons/docker-brands.svg';
import react_icon from './../icons/react-brands.svg';
import html_icon from './../icons/html5-brands.svg';
import database_icon from './../icons/database-solid.svg';

import './../styles/Skill.css';

const Skill = ()=>{
    const HTML_LINK = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
    const JS_LINK = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
    const REACT_LINK = 'https://reactjs.org/';
    const PYTHON_LINK = 'https://www.python.org/';
    const DJANGO_LINK = 'https://www.djangoproject.com/';
    const LINUX_LINK = 'https://archlinux.org/';
    const DOCKER_LINK = 'https://www.docker.com/';
    const DATABASE_LINK = 'https://www.postgresql.org/';

    const openWebsite = (url)=>{
        window.open(url, '_blank');
    }

    return (
        <div id='skill' className='skill'>
            <h2 className='title'>SKILLS</h2>
            <hr />
            <div className='skill_list'>
                <div onClick={_=>openWebsite(HTML_LINK)} className='skill_el'>
                    <img src={html_icon} alt='HTML'/>
                    <p>HTML</p>
                </div>
                <div onClick={_=>openWebsite(JS_LINK)} className='skill_el'>
                    <img src={js_icon} alt='JavaScript'/>
                    <p>JavaScript</p>
                </div>
                <div onClick={_=>openWebsite(REACT_LINK)} className='skill_el'>
                    <img src={react_icon} alt='react'/>
                    <p>React</p>
                </div>
                <div onClick={_=>openWebsite(PYTHON_LINK)} className='skill_el'>
                    <img src={python_icon} alt='Python'/>
                    <p>Python</p>
                </div>
                <div onClick={_=>openWebsite(DJANGO_LINK)} className='skill_el'>
                    <img src={django_icon} alt='django'/>
                    <p>Django</p>
                </div>
                <div onClick={_=>openWebsite(LINUX_LINK)} className='skill_el'>
                    <img src={linux_icon} alt='Linux'/>
                    <p>Linux</p>
                </div>
                <div onClick={_=>openWebsite(DOCKER_LINK)} className='skill_el'>
                    <img src={docker_icon} alt='Docker'/>
                    <p>Docker</p>
                </div>
                <div onClick={_=>openWebsite(DATABASE_LINK)} className='skill_el'>
                    <img src={database_icon} alt='Database'/>
                    <p>Database</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;