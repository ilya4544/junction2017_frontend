import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Layout, Breadcrumb, Card } from 'antd'
const { Content } = Layout

class Dashboard extends React.Component {
  render () {
    const { accounts } = this.props.data

    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/dashboard">Dashboard</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {
            accounts && accounts.map((account) => (
              <Card key={account._id} title={account.accountNumber.value} extra={<Link to={`/dashboard/${account._id}`}>Show contracts</Link>} style={{ width: '100%', marginBottom: 10 }}>
                <p><strong>Balance: </strong>{account.availableBalance} {account.currency}</p>
                <p><strong>Account type: </strong>{account.accountType}</p>
              </Card>
            ))
          }
        </div>
      </Content>
    )
  }
}

export default connect(
  (state) => ({ data: state.contracts })
)(Dashboard)
