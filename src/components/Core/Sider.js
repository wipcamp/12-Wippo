import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menuName = [
  'ข้อมูลสรุป' , 'จัดการสมาชิก' , 'ตรวจคำตอบ' , 'ผู้มีสิทธิเข้าค่าย' , 'จัดกลุ่มน้อง' , 'จัดห้องนอน' , 'เช็คอิน'
]

export default class SiderBar extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header>
            ABC
          </Header>
        </Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {
                menuName.map((data , i) => {
                  return(
                    <Menu.Item key={i}>
                      <Icon type="crown" />
                      <span>{data}</span>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Content Here</div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
