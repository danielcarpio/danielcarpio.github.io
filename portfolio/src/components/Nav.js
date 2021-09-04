import './../styles/Nav.css';

const Nav = ()=>{
    const scrollFunc = (id)=>{
        const elem = document.getElementById(id);
        window.scrollTo({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <nav>
            <div className='name'><h1>Daniel Carpio</h1></div>
            <ul>
                <li onClick={()=>{scrollFunc('about');}}>About</li>
                <li onClick={()=>{scrollFunc('skill');}}>Skills</li>
                <li onClick={()=>{scrollFunc('project');}}>Projects</li>
                <li onClick={()=>{scrollFunc('contact');}}>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;