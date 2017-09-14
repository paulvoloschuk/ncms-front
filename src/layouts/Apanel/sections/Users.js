import React,{Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'
import classes from './style.scss'
import {getUsers} from '../../../store/actions/apanel'
import SvgIcon from 'material-ui/SvgIcon'
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset'
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class Users extends Component {
  constructor() {
    super()
    this.state = {
      sortBy: 1
    }
  }
  componentWillMount() {
    this.props.getUsers()
  }
  provide(id) {
    return {
      show: event => {
        console.log('show', id);
      },
      edit: event => {
        console.log('edit', id);
      },
      delete: event => {
        event.stopPropagation()
        console.log('delete', id);
      },
      add: event => {
        console.log('add', id);
      },
    }
  }
  render() {
    let infoClassName,
        infoText,
        placeholder,
        content

    if (this.props.data == null) {
      infoText = 'Fail to load data'
      infoClassName = classes.issue
    } else if (typeof this.props.data == 'undefined') {
      infoText = 'Loading data...'
      infoClassName = classes.placeholder
    }
    placeholder = <div className={infoClassName}>{infoText}</div>
    content = (!!this.props.data && !!this.props.data.length)
      ? <List>
          {this.props.data.map(item =>
            <ListItem
              onClick={this.provide(item.id).show}
              key={item.id}
              primaryText={item.fullname}
              secondaryText={item.role || 'Not set'}
              rightIcon={
                <SvgIcon
                  onClick={this.provide(item.id).delete}
                  hoverColor={red500}
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </SvgIcon>
              }
            />
          )}
        </List>
      : '';
    return (
      <div>
        {content}
        {placeholder}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  data: state.apanel.page.users
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
