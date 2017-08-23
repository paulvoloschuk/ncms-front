import React,{Component} from 'react'
import classes from './style.scss'
import {activeStateClass} from '../../helpers'

class Field extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: !!props.value
    }
  }
  fillCheck() {
    this.setState({
      fill: !!this.refs.field.value
    })
  }
  render() {
    const Component = this.props.component || 'input'
    let props = {...this.props},
        placeholder = props.placeholder ? <span className={classes.label__placeholder}>{props.placeholder}</span> : null

    delete props.placeholder, props.component, props.style

    return (
      <div className={activeStateClass(classes, 'label', this.state.fill)} style={this.props.style}>
        <Component ref='field' {...props} onKeyDown={this.fillCheck.bind(this)}/>
        {placeholder}
      </div>
    )
  }
}

export default Field
