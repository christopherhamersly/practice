import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({ 
  aboutMainText:{
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  aboutText:{
    maxWidth: 2000,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50,
    marginRight: 50,
    fontFamily: 'Helvetica'
  }
}))

function About() {

  const classes = useStyles();

  return (
    <>
      <Typography
        variant='h3'
        className={classes.aboutMainText}> About Me 
      </Typography>
      <Typography 
      variant='h4'
      className={classes.aboutText}>
        I'm a tinkerer at heart, and love to do projects.  Either working on my bikes, or repairing my van, it's something that brings me joy.  I like seeing my skills grow in different facets of my life, and I try to become a master in the small collection of interests I have.  Each of my interests are unique and access a different part of my brain that keeps me stimulated helps me learn something new every day.
      </Typography>
    </>
  )
}

export default About
