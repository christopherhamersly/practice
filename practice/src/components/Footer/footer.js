// TODO
// need to work on the following


import React from 'react'
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function Footer() {
  return (
    <>
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
      
        <a href="mailto:christopherhamersly@gmail.com" target="blank">
          <MailOutlineIcon />
        </a>
      
     
        <a href="https://github.com/christopherhamersly" target="blank">
          <GitHubIcon />
        </a>
      
     
        <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank">
          <LinkedInIcon />
        </a>
      

    </>
  )
}

export default Footer
