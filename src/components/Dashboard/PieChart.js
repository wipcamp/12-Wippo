import React, { Component } from 'react'
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import { Pie } from "ant-design-pro/lib/Charts";
import userService from '../../services/UserService'
export default class PieChart extends Component {
  state = {
    userData : [
    {
      x: "สมัครเสร็จแล้ว",
      y: 10
    },
    {
      x: "ยังสมัครไม่เสร็จ",
      y: 300
    }
    ]
  }

  componentDidMount(){
    this.getAllUser()
  }

  async getAllUser(){
    let allUser = await userService.getAllUser();
    let data = allUser.data.data;
    console.log(data)
    this.state.userData.push({
      x: "ในระบบ",
      y: data.length,
    });
  }
  render() {
    return (
      <Pie
        hasLegend
        title="Bar Chart"
        // subTitle="ssss"
        // total={() => (
        //   <span
        //     dangerouslySetInnerHTML={{
        //       __html: this.state.userData.reduce((pre, now) => now.y + pre, 0)
        //     }}
        //   />
        // )}
        data={this.state.userData}
        // valueFormat={val => (
        //   <span dangerouslySetInnerHTML={{ __html: val }} />
        // )}
        height={294}
      />
    )
  }
}
