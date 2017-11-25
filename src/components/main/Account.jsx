import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Breadcrumb, Card, Button } from 'antd'
import * as contractActions from '../../redux/actions/contractActions'

const { Content } = Layout

class Account extends React.Component {

  componentWillMount() {
    const { location, contractActions } = this.props
    contractActions.loadContracts(location.pathname.split('/')[2])
  }

  render () {
    const { contracts } = this.props.data
    const { location } = this.props

    const accountId = location.pathname.split('/')[2]

    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/dashboard">Dashboard</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to={`/dashboard/${accountId}`}>{accountId}</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Link to={`/dashboard/${accountId}/newcontract`}><Button style={{marginBottom: 10}}>New contract</Button></Link>
          {
            contracts && contracts.map((contract) => (
              <Card key={contract.id} title={contract.name} extra={<Link to={`/dashboard/${accountId}/contracts/${contract.id}`}>Edit</Link>} style={{ width: '100%', marginBottom: 10 }}>
                <p><strong>Status: </strong> <div className="green">Working</div></p>
              </Card>
            ))
          }
        </div>
      </Content>
    )
  }
}

export default connect(
  (state) => ({ data: state.contracts }),
  (dispatch) => ({ contractActions: bindActionCreators(contractActions, dispatch) })
)(Account)
