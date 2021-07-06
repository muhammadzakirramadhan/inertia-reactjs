import React from 'react'

const Home = (...props) => {
    let nama = props[0].nama
    
    return (
        <>
        <span>Welcome {nama}</span>
        </>
    )
}

export default Home