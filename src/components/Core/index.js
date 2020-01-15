import React, { Component } from 'react'
import Sider from './Sider'
import Header from './Header'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content } = Layout;

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header />
        </Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />
          <Layout>
            <Content style={{ margin: '16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Content Here.
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
