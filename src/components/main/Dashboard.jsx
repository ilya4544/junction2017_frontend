import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Layout, Breadcrumb, Card } from 'antd'
const { Content } = Layout

class Dashboard extends React.Component {
  render () {
    const { contracts } = this.props.data

    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/dashboard">Dashboard</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {
            contracts && contracts.map((contract) => (
              <Card key={contract.id} title={contract.name} extra={<Link to={`/dashboard/${contract.id}`}>Edit</Link>} style={{ width: '100%', marginBottom: 10 }}>
                <p>Сюда можно статы всякие впихнуть или что-то такое</p>
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
