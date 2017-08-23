import React,{Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import classes from './style.scss'
import {login} from '../../../store/actions/user'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      password: {
        fill: false,
        hidden: true
      },
      errors: {
        login: false,
        password: false
      }
    }
    this.inputs = {}
  }
  submit() {
    let errorMsg = {login: '', password: ''}
    let {login, password} = this.inputs
    // Login
    if (login.input.value == '')
      errorMsg.login += 'Field is required. '
    if (login.input.value.search(/^[a-zA-Z][a-zA-Z0-9-_\.]{8,32}$/))
      errorMsg.login += 'Please enter correct login. '

    // Password
    if (password.input.value == '')
      errorMsg.password += 'Field is required. '
    if (password.input.value.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/))
      errorMsg.password += 'Please enter correct password. '

    // Implement error messages
    this.setState({errors: errorMsg})

    // OnSuccess
    if (!errorMsg.login && !errorMsg.password)
      this.props.signupRequest({login:login.input.value, password:password.input.value})
  }
  render() {
    const style = {
      checkbox: {
        position: 'absolute',
        width: '1.5em',
        right: 0,
        top: '2.5em'
      },
      submit: {
        marginTop: '2em',
        float: 'right'
      }
    }
    let {password, errors} = this.state,
        {processing} = this.props
    return (
      <form>
        <p className={classes.info}>Log as user to enable hidden functions.</p>
        <TextField
          hintText="Username Field"
          maxLength="32"
          floatingLabelText="Username"
          type="text"
          errorText={errors.login}
          fullWidth={true}
          ref={element => this.inputs.login = element}
          disabled={processing}
        />
        <div style={{position:'relative'}}>
          <TextField
            hintText="Password Field"
            maxLength="32"
            floatingLabelText="Password"
            type={password.hidden ? 'password' : 'text'}
            errorText={errors.password}
            fullWidth={true}
            ref={element => this.inputs.password = element}
            onKeyUp={() => this.setState({password: Object.assign(password, {fill: !!this.inputs.password.input.value})})}
            disabled={processing}
          />
          <Checkbox
            checkedIcon={<Visibility />}
            uncheckedIcon={<VisibilityOff />}
            style={{...style.checkbox, display: password.fill ? 'block' : 'none'}}
            onClick={() => {this.inputs.password.input.focus(); this.setState({password: Object.assign(password, {hidden: !password.hidden})})}}
            disabled={processing}
          />
        </div>
        <RaisedButton
          primary={true}
          style={style.submit}
          label="Login"
          onClick={this.submit.bind(this)}
          disabled={processing}
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  processing: state.common.processing
})

const mapDispatchToProps = dispatch => ({
  signupRequest: (data) => dispatch(login(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
