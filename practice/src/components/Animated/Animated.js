import React from 'react'
import { Wave } from 'react-animated-text'

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
// import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({

  boxOne: {
    padding: 90,
    color: '#ffffff',
    backgroundColor: '#000000'

  },
  boxTwo: {
    padding: 60,
    color: '#ffffff',
    backgroundColor: '#ffffff'
  },
  boxThree: {
    padding: 40,
    color: '#000000',
    backgroundColor: '#000000'
  },
  boxFour: {
    padding: 25,
    color: '#ffffff',
    backgroundColor: '#ffffff'
  },
  boxFive: {
    padding: 25,
    color: '#000000',
    backgroundColor: '#000000'
  },
  boxSix: {
    padding: 40,
    color: '#ffffff',
    backgroundColor: '#ffffff'
  },
  boxSeven: {
    padding: 60,
    color: '#000000',
    backgroundColor: '#000000'
  },
  boxEight: {
    padding: 90,
    color: '#ffffff',
    backgroundColor: '#ffffff'
  },
  enterLink: {
    marginLeft: 150,
    fontSize: 30
  }
}))

function Animated() {

  const classes = useStyles();

  return (
    <>
    <Link to="home" >
    <motion.div 
  
        animate={{ rotate:720 }}
        transition={{ duration: 30 }}className={classes.container}>
    <Wave text="" 
      effect="stretch" 
      speed='1'
      effectChange={2.2} />
      <Link to="/home" >Enter
              </Link>
              
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 30 }}
        className={classes.boxOne}>
      </motion.div>
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 32 }}
        className={classes.boxTwo}>Box Two
      </motion.div>
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 34 }}
        className={classes.boxThree}>Box Three</motion.div>
      <motion.div
       animate={{ rotate: 180 }}
       transition={{ duration: 36 }}
        className={classes.boxFour}>Box Four</motion.div>
      <motion.div 
      animate={{ rotate: 180 }}
      transition={{ duration: 38 }}className={classes.boxFive}>Box Five
      </motion.div>
      <motion.div 
      animate={{ rotate: 180 }}
      transition={{ duration: 40 }}
      className={classes.boxSix}>Box Six</motion.div>
      <motion.div 
      animate={{ rotate: 180 }}
      transition={{ duration: 42 }}
      className={classes.boxSeven}>Box Seven</motion.div>
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 44 }}
        className={classes.boxEight}></motion.div>

      </motion.div>
      </Link>

    </>
  )
}

export default Animated
