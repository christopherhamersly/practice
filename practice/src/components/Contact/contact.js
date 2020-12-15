import React from 'react'
import emailjs from 'emailjs-com'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


// TODO
//  import the email function that I've created before
const useStyles = makeStyles((theme) => ({
  formRoot:{
    alignContent: 'center'
  },
  text: {
    fontSize: 25,
    marginLeft: 40
  },
  getInTouch:{
    width: '40%',
    height: 40,
    fontSize: 50,
    marginTop: 45,
    marginBottom: 45,
    marginLeft: '15%',
    marginRight: '45%'
  },
  nameInput: {
    width: '40%',
    height: 40,
    fontSize: 20,
    marginTop: 25,
    marginLeft: '10%',
    marginRight: '45%'
  },
  emailInput: {
    width: '40%',
    height: 40,
    fontSize: 20,
    marginTop: 25,
    marginLeft: '4.3%',
    marginRight: '45%'
  },
  subjectInput: {
    width: '40%',
    height: 40,
    fontSize: 20,
    marginTop: 25,
    marginLeft: '9%',
    marginRight: '45%'
  },
  messageInput: {
    width: '40%',
    height: 90,
    fontSize: 20,
    marginTop: 25,
    marginLeft: '8%',
    marginRight: '45%',
    marginBottom: 45
  },
  sendButton:{
    width: '20%',
    height: 40,
    fontSize: 20,
    marginTop: 25,
    marginLeft: '25%',
    marginRight: '45%'
  }

}))


function Contact() {

  const classes = useStyles();
  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jnyi882', 'template_khd6yu5', e.target, 'user_KW0vB700RZZeBNNRTVwcA')
      .then((result) => {
        window.location.reload()
      }, (error) => {
        console.log(error.text);

      });
  }
  
  
    return (

    <>
      <Typography
      variant='h3'
      align='center'
      className={classes.getInTouch}
      > Get In Touch </Typography>
      <form 
        className={classes.formRoot}
        onSubmit={sendEmail}>
        
          <Typography
            variant='h4'
            className={classes.text}><label>Name: 
          
        </label>
        
        <input 
        className={classes.nameInput}
        type='text' 
        name='from_name' />
       </Typography>
        
        
        <Typography
            variant='h4'
            className={classes.text}
           ><label>
             Email Address:
          
        </label>
        <input  
        className={classes.emailInput}
        type='email' 
        name='from_email' />
        </Typography>
       
        
        <Typography
            variant='h4'
            className={classes.text}
            ><label>Subject: 
        </label>
        <input 
        className={classes.subjectInput}
        type='text' 
        name='subject' />
       </Typography>
      
        <Typography
            variant='h4'
            className={classes.text}
            >   <label>Message: 
           </label>
       
        <textarea 
         className={classes.messageInput}
         name='message' />
        </Typography>
        <input 
        className={classes.sendButton}
        type='submit' 
        value='Send' />
      </form>
    </>
  )
}

export default Contact
