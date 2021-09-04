import './../styles/Footer.css';

const Footer = ()=>{
    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            <p>&copy; {year} - Daniel Carpio</p>
        </div>
    );
}

export default Footer;