import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {id}</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet repudiandae blanditiis a? Quis, officia suscipit accusantium id quae alias ut illum eaque dolor dolorem, nihil recusandae esse dicta dignissimos?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">Posted by Mk
                <div>2nd March 2 am</div></div>
                
            </div>
        </div>
    )
}
export default ProjectDetails
