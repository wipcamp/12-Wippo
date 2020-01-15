import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Sider } = Layout;

const path = [
  'dashboard' , 'managemember' , 'checkanswer' , 'confirmregistrant' , 'managegroup' , 'managebedroom' , 'checkin'
]
const menuName = [
  'ข้อมูลสรุป' , 'จัดการสมาชิก' , 'ตรวจคำตอบ' , 'ผู้มีสิทธิเข้าค่าย' , 'จัดกลุ่มน้อง' , 'จัดห้องนอน' , 'เช็คอิน'
]

export default class SiderBar extends Component {
  render() {
    return (
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            {
              menuName.map((data , i) => {
                return(
                  <Menu.Item key={i}>
                    <a href = {`/${path[i]}`}>
                      <Icon type="crown" />
                      <span>{data}</span>
                    </a>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
    )
  }
}
