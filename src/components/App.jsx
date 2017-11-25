import React from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
import { bindActionCreators } from 'redux'
import * as contractActions from '../redux/actions/contractActions'

import Dashboard from './main/Dashboard'
import Account from './main/Account'
import ContractView from './main/ContractView'
import ContractNew from './main/ContractNew'

import 'antd/dist/antd.css'

const { Header, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class App extends React.Component {
  state = {
    collapsed: false
  }

  componentWillMount() {
    this.props.contractActions.loadUser()
    this.props.contractActions.loadAccounts()
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }

  render() {
    const { data } = this.props
    const { collapsed } = this.state

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">{data.user && data.user.name && collapsed ? data.user.name.split(' ')[0][0] + data.user.name.split(' ')[1][0] : data.user && data.user.name}</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/dashboard">
                <Icon type="wallet" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:id" component={Account} />
          <Route exact path="/dashboard/:id/newcontract" component={ContractNew} />
          <Route exact path="/dashboard/:accountId/contracts/:id" component={ContractView} />

          <Footer style={{ textAlign: 'center' }}>
            This.Bank ©2017 Created with ❤️ at Junction
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

App = connect(
  (state) => ({ data: state.contracts }),
  (dispatch) => ({ contractActions: bindActionCreators(contractActions, dispatch) })
)(App)

export default withRouter(App)
