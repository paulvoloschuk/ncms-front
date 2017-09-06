import React,{Component} from 'react'
import {connect} from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import {insertData} from '../../helpers'

class Notifier extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleRequestClose() {
    this.setState({
      open: false
    })
  }
  componentWillReceiveProps(props) {
    if (props.dateTime !== this.props.dateTime)
      this.setState({
        open: true
      })
  }
  render() {

    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.props.msg || ''}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}

export default connect(state => state.common.notification, null)(Notifier)
