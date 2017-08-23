import React from 'react'
import Header from '../../components/Header'
import classes from './style.scss'
import '../../styles/core.scss'

export const Page = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

Page.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Page
