// TODO
// need to work on the following


import React from 'react'


function Footer() {
  return (
    <>
      <h1> Footer </h1>
      <h1
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {"Copyright © "}
        <a color="inherit" href="https://www.christopherhamersly.com">
          Chris Hamersly
        </a>{" "}
        {new Date().getFullYear()}
        {"."}
      </h1>
      <a href="mailto:christopherhamersly@gmail.com" target="blank">Email</a>
      <a href="https://github.com/christopherhamersly" target="blank">Github</a>
      <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank">LinkedIn</a>

    </>
  )
}

export default Footer
