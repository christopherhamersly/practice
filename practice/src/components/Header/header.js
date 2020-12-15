// TODO
// need to work on the name, and work on the nav part

import React from 'react'
// import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import CodeIcon from '@material-ui/icons/Code';
import PaletteIcon from '@material-ui/icons/Palette';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({ 
  icon: {
    color: '#A9A9A9',
    height: 130,
    fontSize: 60,
    marginLeft: 50
  },
  fontContainer: {
    marginLeft: '36%',
    marginRight: '80&'
  }
}))

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCat, faMountain, faBug, faMapMarkerAlt, faBiking } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h1"
        align="center"
      > Chris Hamersly
      </Typography>
      <Typography
        variant="h3"
        align="center"> Software Developer
      </Typography>
      <div
      className={classes.fontContainer}>
      <a href="https://ibb.co/wLn9f4b" target="blank">
        <PaletteIcon  
         className={classes.icon}
          />
     
    </a>
      <a href="https://ibb.co/7nV18SH" target="blank">
        <DirectionsBikeIcon
         className={classes.icon}
          fontSize='large' />
      </a>
      <a href="https://ibb.co/dmX6jN7" target="blank">
        <FilterHdrIcon
         className={classes.icon}
          fontSize='large' />
      </a>
      <a href="https://ibb.co/4tyNqHw" target="blank">
        <CodeIcon
          className={classes.icon}
          fontSize='large' />
      </a>
      </div>
    </>

  )
}

export default Header
