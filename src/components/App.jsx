import React from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
import { bindActionCreators } from 'redux'
import * as contractActions from '../redux/actions/contractActions'

import Dashboard from './main/Dashboard'
import ContractView from './main/ContractView'

import 'antd/dist/antd.css'

const { Header, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class App extends React.Component {
  state = {
    collapsed: false
  }

  componentWillMount() {
    this.props.contractActions.loadUser()
    this.props.contractActions.loadContracts()
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }

  render() {
    const { data } = this.props

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">{data.user && data.user.name}</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/dashboard">
                <Icon type="pie-chart" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:id" component={ContractView} />

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
