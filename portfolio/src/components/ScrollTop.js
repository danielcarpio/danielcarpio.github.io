import './../styles/ScrollTo.css';
import arrow_icon from './../icons/arrow-up-solid.svg';
import { useEffect } from 'react';

const ScrollTop = ()=>{
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            let scr = window.scrollY;
            let elem = document.getElementById('scrollToTop');
            if(scr < 75){
                elem.style.display = 'none';
            } else {
                elem.style.display = 'flex';
            }
        });
    }, []);

    return (
        <div onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })} id='scrollToTop' className='scrollTo'>
            <img alt='Back to top' src={arrow_icon}/>
        </div>
    );
};

export default ScrollTop;