import React,{Component} from 'react'
import {connect} from 'react-redux'
import classes from './style.scss'
import logoImage from '../../static/img/logo-white.svg'
import CircularProgress from 'material-ui/CircularProgress';
import privileges from '../../privileges'

import Login from './sections/Login'
import Users from './sections/Users'
import {activeStateClass} from '../../helpers'




class Apanel extends Component {
  constructor () {
    super()
    this.sections = {
      login: <Login />,
      users: <Users />
    }
    this.hotkeys = {
      togglePanel: ['Control', 'Insert']
    }
    this.keyEvents = ['keyup', 'keydown']
    this.holdedKeys = {}
  }
  hotkeyListener(event) {
    // Logging active Keys
    if(event.type === 'keydown') this.holdedKeys[event.key] = true
    else delete this.holdedKeys[event.key]

    // Searching for existing hotKeys
    Object.keys(this.hotkeys).map(functionName => {
      if(this.hotkeys[functionName].sort().join() === Object.keys(this.holdedKeys).sort().join()) {
        event.preventDefault()
        this.props[functionName]()
      }
    })
  }
  componentWillMount() {
    if(process.browser) this.keyEvents.map(eventName => document.addEventListener(eventName, this.hotkeyListener.bind(this)))
  }
  componentWillUnmount() {
    if(process.browser) this.keyEvents.map(eventName => document.removeEventListener(eventName, this.hotkeyListener.bind(this)))
  }
  render () {
    let {common, user, apanel} = this.props,
        offsetX = `translateX(${apanel.open ? 0 : -100}%)`,
        logotype = common.processing ? <CircularProgress size={50} thickness={4} /> : <img alt='Logo'/>;

    return (
      <div className={activeStateClass(classes, 'apanel', apanel.open)} style={{transform:offsetX}}>
        <div className={classes.apanel__bar}>
          <div className={classes.apanel__bar__logo}>
            {logotype}
          </div>
          {privileges[user.rank].map((actionName, index) =>
            <button className={activeStateClass(classes, 'apanel__bar__item', apanel.module === actionName)} key={index} onClick={() => this.props.toggleSection(actionName)}>
              <div>
                <img src="/" />
                <span>{actionName}</span>
              </div>
            </button>)}
          <button className={classes.apanel__bar__item} title={`[${this.hotkeys.togglePanel.join('+')}] to toggle`} onClick={() => {user.rank ? this.props.logOut() : this.props.togglePanel()}}>
            <img src="/" />
            <span>{user.rank ? 'logout' : 'exit'}</span>
          </button>
        </div>
        <div className={activeStateClass(classes, 'apanel__body', apanel.module)}>
          <div className={classes.apanel__body__wrapper}>
            {privileges[user.rank].map((sectionName, index) => (
              <div className={activeStateClass(classes, 'apanel__body__wrapper__section', apanel.module === sectionName)} key={index}>
                {this.sections[sectionName]}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  common: state.common,
  apanel: state.apanel,
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  togglePanel: () => dispatch({type: 'apanel/TOGGLE_STATE'}),
  toggleSection: sectionName => dispatch({type: 'apanel/TOGGLE_SECTION', payload: sectionName}),
  logOut: () => dispatch({type: 'user/LOGOUT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Apanel)
