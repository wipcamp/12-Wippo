import React, { Component } from 'react'
import { Bar } from 'ant-design-pro/lib/Charts';
import userService from '../../services/UserService'


export default class BarChart extends Component {
  
  state = {
    userData: []
  }

  componentDidMount(){
    this.getDailyGraph();
  }

  async getDailyGraph(){
    let daily = await userService.getDailyGraph();
    let data = daily.data.data;
    console.log(data)
    for(let i = 0 ; i < 7 ; i++){
      this.state.userData.push({
        x: `Day ${i + 1}`,
        y: data[i],
      });
    }
  }

  render() {
    return (
      <Bar 
        height={200} 
        title="จำนวนคนที่ลงทะเบียนต่อวัน" 
        data={this.state.userData} />
    )
  }
}

