import React from "react";

function About({
    image = "https://via.placeholder.com/215",
    alt = 'blog logo',
    about
}) {
    return (
        <div>
            <aside>
                <img src={image} alt={alt}></img>
                <p>{about}</p>
            </aside>
        </div>
    )
}

export default About;