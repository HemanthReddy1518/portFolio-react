
function Project({ id, projectName, tools, details, img }) {


    return (

        <div className="project">
            <div className="project-info">
                <h4>{projectName}</h4>
                <p className="project-tools">{tools}</p>
                <p className="project-details">{details}</p>
            </div>
            <div className='project-img'>
                <img src={img}></img>
            </div>
        </div>
    )
}

export default Project