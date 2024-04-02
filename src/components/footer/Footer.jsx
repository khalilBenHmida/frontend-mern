import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>This is my personal Blog App where i post my own articles
            feel free to join me !
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +216 52 438 403</span>
          <span>https://www.facebook.com/fatma.hmida.9</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Tunisia</span>
          <span>Current Location: Tunisia</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
