import React from 'react'
import { Typography } from '@material-ui/core'


// TODO
// need to work on the following
// copyright
// links to linkedIn and Github
// email address
function Footer() {
  return (
    <>
    <h1> Footer </h1>
    <Typography
                  className={classes.copyrightLarge}
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  {"Copyright © "}
                  <Link color="inherit" href="https://www.christopherhamersly.com">
                    Chris Hamersly
        </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
    <a href="https://github.com/christopherhamersly" target="blank">Github</a>
    <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank">LinkedIn</a>

    </>
  )
}

export default Footer
