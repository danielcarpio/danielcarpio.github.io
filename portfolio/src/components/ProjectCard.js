import link_icon from './../icons/external-link-alt-solid.svg';

const ProjectCard = (props)=>{
    const openWebsite = (url)=>{
        window.open(url, '_blank');
    }
    return (
        <div className='card'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p className='tech'>{props.tech}</p>
            <div onClick={_=>openWebsite(props.link)} className='link'>
                <img alt='External link' src={link_icon}></img>
            </div>
        </div>
    )
}

export default ProjectCard;