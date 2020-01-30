import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header } = Layout;

export default class MainHeader extends Component {
  state = {
    wipId: 120000,
    position: 'รองประธานค่าย',
    name: 'น้องคนเมษลอยได้'
  }

  render() {
    return (
      <Header style={{textAlign: 'right',color:'white'}}>
          {this.state.name} ({this.state.position}) {" "}
          <button className="btn ant-btn-danger">Logout</button>
      </Header>
    )
  }
}
