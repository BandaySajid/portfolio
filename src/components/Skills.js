import React from 'react'

const Skills = () => {
    return (
        <div className="code-icons bg-success p-3" style={{ borderRadius: '10px', background: 'linear-gradient(90deg, rgba(30,34,46,1) 0%, rgba(28,49,71,1) 51%, rgba(62,68,90,1) 100%)', width: '95%' }}>
            <h4 className='text-center text-white'>things I am good at</h4>
            <div className="col-12 code-col">
                <i className="code-icon icon-nodejs" data-toggle="tooltip" data-placement="top" title="NodeJS" style={{ color: "#80bd01" }}></i>
                <i className="code-icon icon-javascript" data-toggle="tooltip" data-placement="top" title="JavaScript"
                    style={{ color: "#fef728" }}></i>
                <i className="code-icon icon-python" data-toggle="tooltip" data-placement="top" title="Python" style={{ color: "#ffcf3e" }}></i>
                <i className="code-icon icon-ubuntu" data-toggle="tooltip" data-placement="top" title="Ubuntu" style={{ color: "#ffe0ac" }}></i>
                <i className="code-icon icon-aws" data-toggle="tooltip" data-placement="top" title="Aws" style={{ color: "#ffcf3e" }}></i>
                <i className="code-icon icon-nginx" data-toggle="tooltip" data-placement="top" title="Nginx" style={{ color: "#2ba8e0" }}></i>
            </div>
            <div className="col-12 code-col">
                <i className="code-icon icon-database" data-toggle="tooltip" data-placement="top" title="SQL" style={{ color: "#f1642c" }}></i>
                <i className="code-icon icon-mysql" data-toggle="tooltip" data-placement="top" title="MYSQL" style={{ color: "#f1642c" }}></i>
                <i className="code-icon icon-redis" data-toggle="tooltip" data-placement="top" title="Redis"
                    style={{ color: "#d82c20", marginRight: "0" }}></i>
                <i className="code-icon icon-html" data-toggle="tooltip" data-placement="top" title="HTML"
                    style={{ color: "#d82c20", marginRight: "0" }}></i>
                <i className="code-icon icon-css" data-toggle="tooltip" data-placement="top" title="CSS"
                    style={{ color: "#2ba8e0", marginRight: "0" }}></i>
            </div>
        </div>
    )
}

export default Skills
