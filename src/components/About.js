// import React from 'react'
import MainContactMe from "./MainContactMe"

const About = () => {
  return (
    <div className="page-container">
      <div className="about-text-container">
        <div className="about-text-div bg-orange">
          <h1 className="about-text">
            Hi, I'm Nathan Dong.
            <br />
            <br />
            I like using Python, Java and React
            <br />
            <br />
            I'm learning C++
          </h1>
        
        {/* <h1 className="about-text">Hi, I'm Nathan Dong.</h1>
        <h1 className="about-text">I like using Python, Java and React</h1>
        <h1 className="about-text">I like using Python, Java and React</h1> */}
          
        </div>
      </div>

      <MainContactMe />
    </div>
  )
}

export default About