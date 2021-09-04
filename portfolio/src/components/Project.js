import ProjectCard from './ProjectCard';

import './../styles/Project.css';

const Project = ()=>{
    return (
        <div id='project' className='project'>
            <h2 className='title'>PROJECTS</h2>
            <hr />
            <div className='projects_cards'>
                <ProjectCard 
                    title='Capsulefy' 
                    description='Capsulefy is an online time capsule that allow users to store their memories and share them in the future. Users will be able to create a time capsule, attach a message to it, load files such as videos or images into it and set a date when they want the capsule to be released.' 
                    tech='Django Bootstrap4'
                    link='https://github.com/pabreblob/capsulefy'/>
                <ProjectCard 
                    title='Chess clock' 
                    description='Chess clock web app designed for a better experience with phones, without having to download any application.' 
                    tech='HTML  CSS  TypeScript  React' 
                    link='https://github.com/danielcarpio/chess_clock'/>
                <ProjectCard 
                    title='Mapea-Snippets' 
                    description='Visual Code Studio extension which provides some utilities to help coding Mapea5 framework' 
                    tech='JavaScript' 
                    link='https://github.com/danielcarpio/Mapea-Snippets'/>
            </div>
            <h2 className='title'>OPEN SOURCE CONTRIBUTIONS</h2>
            <hr />
            <div className='projects_cards'>
            <ProjectCard 
                    title='Mapea4' 
                    description='Mapea 4 is a framework that allows you to easily add a dynamic map to any web application and configure it by adding WMC files, WMS services, WFS services, KML files, etc.' 
                    tech='JavaScript'
                    link='https://github.com/sigcorporativo-ja/Mapea4'/>
            </div>
        </div>
    );
}

export default Project;