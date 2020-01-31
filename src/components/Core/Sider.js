import React, { Component } from 'react'
import { Layout, Menu , Icon } from 'antd';
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default class SiderBar extends Component {
  state = {
    menu : [
      { path : 'dashboard' , name : 'ข้อมูลสรุป'},
      { path : 'managemember' , name : 'จัดการสมาชิก'},
      { path : 'checkanswer' , name : 'ตรวจคำตอบ'},
      { path : 'confirmregistrant' , name : 'ผู้มีสิทธิเข้าค่าย'},
      { path : 'managegroup' , name : 'จัดกลุ่มน้อง'},
      { path : 'managebedroom' , name : 'จัดห้องนอน'},
      { path : 'checkin' , name : 'เช็คอิน'},
    ]
  }
  
  render() {
    return (
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            {
              this.state.menu.map((data , i) => (
                <Menu.Item key={i}>
                    <Link to = {`/${data.path}`}>
                      <Icon type="crown" />
                      <span>{data.name}</span>
                    </Link>
                  </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
    )
  }
}
