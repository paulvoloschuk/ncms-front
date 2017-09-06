import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Helmet from 'react-helmet'
import Apanel from '../layouts/Apanel'
import Notifier from '../layouts/Notifier'
import defaultLayout from '../../config/layout'
import clone from 'clone'

class AppContainer extends React.Component {
  static propTypes = {
    layout: PropTypes.object,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render () {
    const { layout, history, routes, routerKey, store } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider>
          <div>
            <Apanel />
            <Helmet {...Object.assign(clone(defaultLayout), layout)} />
            <Router history={history} children={routes} key={routerKey} />
            <Notifier />
          </div>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default AppContainer
