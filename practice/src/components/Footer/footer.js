// TODO
// need to work on the following


import React from 'react'
import Typography from '@material-ui/core/Typography';


function Footer() {
  return (
    <>
      <h1> Footer </h1>
      <Typography
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
      </Typography>
      <Typography variant="body2"
        color="textSecondary"
        align="center">
        <a href="mailto:christopherhamersly@gmail.com" target="blank">Email</a>
      </Typography>
      <Typography variant="body2"
        color="textSecondary"
        align="center">
        <a href="https://github.com/christopherhamersly" target="blank">Github</a>
      </Typography>
      <Typography variant="body2"
        color="textSecondary"
        align="center">
        <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank">LinkedIn</a>
      </Typography>

    </>
  )
}

export default Footer
