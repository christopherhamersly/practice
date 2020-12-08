// TODO
//  projects
//  images
//  links to github or heroku
//  contributors
//  descriptions
//Change height on the QR code

import React from 'react'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { grey } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

  /////////////// SMALL SCREEN BEGIN /////////////
  rootSmall: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  /////////////// MEDIUM SCREEN BEGIN /////////////
  rootMedium: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  /////////////// LARGE SCREEN BEGIN /////////////
  rootLarge: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  /////////////// RESPONSIVE /////////////
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[500],
  }
}))


function Portfolio() {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  return (
    <>
      <Card className={classes.rootSmall}>
        <CardHeader
          avatar={
            <Avatar aria-label='avatar' className={classes.avatar}>
              TC
        </Avatar>
          }
          title="Track Chat"
          subheader="Javascript, React-Native"
        />
        <CardMedia
          className={classes.media}
          image='https://i.ibb.co/YQt5F4H/Screen-Shot-2020-12-08-at-11-44-33-AM.png'
          title='Alki Beach' />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            An app designed to use for families traveling together.  Has the ability to store username and password in a database for future use.  When signed into the app, the users location is updated every three seconds, and broadcast to the rest of the users.  The users also have the ability to chat and send an SOS to the rest of the users.
        </Typography>
          <br></br>
          <Typography variant="body2">
            <a href="https://github.com/trackChat/trackChat" target="blank"> Front End</a>
            <br></br>
            <a href="https://github.com/trackChat/trackChatServer" target="blank"> Back End</a>
            <br></br>
            <a href="https://snack.expo.io/@christopherhamersly/track-chat-presentation"> Snack </a>
          </Typography>
        </CardContent >
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardMedia
              className={classes.media}
              image='https://i.ibb.co/VYH0DWG/Screen-Shot-2020-12-08-at-11-32-46-AM.png'
              title='Alki Beach'
              height='250'
              width='250' />
            <Typography variant="body2" color="textSecondary" component="p"> Co-Contributors </Typography>
            <Typography variant="body2">
              <a href="https://github.com/mamacas" target="blank">Cas Ibrahim</a>
            </Typography>
            <Typography variant="body2">
              <a href="https://github.com/jswill88" target="blank">Josh Williams</a>
            </Typography>
            <Typography variant="body2">
              <a href="https://github.com/Rearo43" target="blank">Reagan Roberts</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card >
      <Card className={classes.rootSmall}>
        <CardHeader
          avatar={
            <Avatar aria-label='avatar' className={classes.avatar}>
              BB
    </Avatar>
          }
          title="Brain Bugs"
          subheader="Javascript, Node.js, Blessed, MongoDB, Socket.io"
        />
        <CardMedia
          className={classes.media}
          image='https://i.ibb.co/jTxTR9c/Screen-Shot-2020-12-08-at-11-49-57-AM.png'
          title='Brain Bugs' />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A command line multiplayer trivia game.  This also offers chat functionality using Socket.io.  Questions are stored in a database, and are recalled when a player selects a category.
        </Typography>
          <br></br>
          <Typography variant="body2">
            <a href="https://github.com/trackChat/trackChat" target="blank"> Github </a>
          </Typography>
        </CardContent >
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"> Co-Contributors </Typography>
            <Typography variant="body2">
              <a href="github.com/TiaLow" target="blank">Tia Low</a>
            </Typography>
            <Typography variant="body2">
              <a href="https://github.com/jswill88" target="blank">Josh Williams</a>
            </Typography>
            <Typography variant="body2">
              <a href="github.com/daisyjanejohnson" target="blank">Daisy Johnson</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card >
      <Card className={classes.rootSmall}>
        <CardHeader
          avatar={
            <Avatar aria-label='avatar' className={classes.avatar}>
              BB
    </Avatar>
          }
          title="Weekend Warrior"
          subheader="Javascript "
        />
        <CardMedia
          className={classes.media}
          image='https://i.ibb.co/37N37S9/Screen-Shot-2020-12-08-at-12-06-16-PM.png'
          title='Brain Bugs' />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A command line multiplayer trivia game.  This also offers chat functionality using Socket.io.  Questions are stored in a database, and are recalled when a player selects a category.
        </Typography>
          <br></br>
          <Typography variant="body2">
            <a href="https://github.com/trackChat/trackChat" target="blank"> Github </a>
          </Typography>
        </CardContent >
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"> Co-Contributors </Typography>
            <Typography variant="body2">
              <a href="github.com/TiaLow" target="blank">Tia Low</a>
            </Typography>
            <Typography variant="body2">
              <a href="https://github.com/jswill88" target="blank">Josh Williams</a>
            </Typography>
            <Typography variant="body2">
              <a href="github.com/daisyjanejohnson" target="blank">Daisy Johnson</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card >
    </>
  )
}

export default Portfolio
