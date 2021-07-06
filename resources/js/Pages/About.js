import React from 'react'
import Layout from './Layout' 

const About = () => {
    return (
        <>
        <span>About Page</span>
        </>
    )   
}

About.layout = page => <Layout children={page} title="About" />

export default About