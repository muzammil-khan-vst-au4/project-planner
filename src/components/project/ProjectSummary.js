import React from 'react'

export default function ProjectSummary({project}) {
    return (
        <div className="card z-depth-0 prjecct-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by MK</p>
                <p className="grey-text">21 March 2 pm</p>
            </div>
        </div>
    )
}
