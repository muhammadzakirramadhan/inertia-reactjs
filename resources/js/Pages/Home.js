import React from 'react'
import Layout from './Layout' 

const Home = (...props) => {
    let nama = props[0].nama

    return (
        <>
        <span>Welcome {nama}</span>
        </>
    )
}

Home.layout = page => <Layout children={page} title="Home" />

export default Home