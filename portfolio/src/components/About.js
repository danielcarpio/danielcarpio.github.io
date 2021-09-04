import './../styles/About.css';

const About = ()=>{
    return (
        <div id='about' className='about'>
            <div className='name'>
                <p>Hi. I am</p>
                <p className='name'>Daniel</p>
                <p className='surname'>Carpio</p>
            </div>
            <div className='introduction'>
                <p>I am a full stack developer in Spain. I enjoy writing clean code, creating web apps and doing stuff in the terminal on my Linux setup and more.</p>
            </div>
        </div>
    );
}

export default About;