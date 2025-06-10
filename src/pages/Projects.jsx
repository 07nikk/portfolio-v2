// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Project.scss';

// const CreativeCoding = () => {
//     const projects = [
//         {
//             title: "Clock",
//             description: "Draws a clock in which the numbers are mapped as per the seconds",
//             link: "https://07nikk.github.io/p5-sketches/sketch1",
//             type: "external"
//         },
//          {
//             title: "Barnsley fern",
//             description: "Draws a Barnsley fern",
//             link: "https://07nikk.github.io/p5-sketches/sketch2",
//             type: "external"
//         },
//         {
//             title: "Colorful Flower",
//             description: "A flower made using sin and cos function",
//             link: "https://07nikk.github.io/p5-sketches/sketch3",
//             type: "external"
//         },
//         {
//             title: "Give it a Try!!",
//             description: "It's in the GAME",
//             link: "https://07nikk.github.io/p5-sketches/sketch4",
//             type: "external"
//         }
//     ];

//     return(
//         <div className="projects-container">
//             <h1 className="projects-title">Creative Coding</h1>
//             <p className="projects-subtitle">Interactive sketches and generative art</p>

//             <div className="projects-grid">
//                 {projects.map((proj, i) => (
//                     <div key={i} className="project-card">
//                         <div className="project-header">
//                             <h3 className="project-title">{proj.title}</h3>
//                             <span className={`project-type ${proj.type}`}>
//                                 {proj.type === 'interactive' ? '🎨' : '🔗'}
//                             </span>
//                         </div>

//                         <p className="project-description">{proj.description}</p>

//                         <div className="project-content">
//                                 <Link to={proj.link} className="btn btn-primary">
//                                     Launch Interactive Sketch
//                                 </Link>
//                         </div>

//                         {!proj.isInternal && (
//                             <a
//                                 href={proj.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="btn btn-secondary"
//                             >
//                                 View Full Screen
//                             </a>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


// export default CreativeCoding;


import React from 'react';
import { Link } from 'react-router-dom';
import './Project.scss';

const CreativeCoding = () => {
    const projects = [
        {
            title: "Clock",
            description: "Draws a clock in which the numbers are mapped as per the seconds",
            link: "https://07nikk.github.io/p5-sketches/sketch1",
            type: "external"
        },
        {
            title: "Barnsley fern",
            description: "Draws a Barnsley fern",
            link: "https://07nikk.github.io/p5-sketches/sketch2",
            type: "external"
        },
        {
            title: "Colorful Flower",
            description: "A flower made using sin and cos function",
            link: "https://07nikk.github.io/p5-sketches/sketch3",
            type: "external"
        },
        {
            title: "Give it a Try!!",
            description: "It's in the GAME",
            link: "https://07nikk.github.io/p5-sketches/sketch4",
            type: "external"
        }
    ];

    return(
        <div className="projects-container">
            <h1 className="projects-title">Creative Coding</h1>
            <p className="projects-subtitle">Interactive sketches and generative art</p>

            <div className="projects-grid">
                {projects.map((proj, i) => (
                    <div key={i} className="project-card">
                        <div className="project-header">
                            <h3 className="project-title">{proj.title}</h3>
                            <span className={`project-type ${proj.type}`}>
                                {proj.type === 'interactive' ? '🎨' : '🔗'}
                            </span>
                        </div>

                        <p className="project-description">{proj.description}</p>

                        <div className="project-content">
                            <iframe
                                src={proj.link}
                                title={proj.title}
                                width="100%"
                                height="400"
                                // frameBorder="0"
                                allowFullScreen
                                style={{ borderRadius: '8px', marginBottom: '1rem' }}
                            ></iframe>

                            <Link to={proj.link} className="btn btn-primary">
                                Launch Interactive Sketch
                            </Link>
                        </div>

                        {!proj.isInternal && (
                            <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                View Full Screen
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreativeCoding;
