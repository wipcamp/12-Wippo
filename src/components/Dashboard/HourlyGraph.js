import React, { Component } from 'react'
import { Bar } from 'ant-design-pro/lib/Charts';
import userService from '../../services/UserService'


export default class HourlyGraph extends Component {

  state = {
    userData: [],
    date: null
  }

  componentDidMount(){
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let currentDate = year+"-"+month+"-"+day
    this.setState({
      date: currentDate
    })
    this.getHourlyGraph(currentDate)
  }

  async getHourlyGraph(currentDate){
    let data = await userService.getHourlyGraph(currentDate);
    let hourly = data.data.data;
    console.log(hourly)
    for(let i = 0 ; i < 24 ; i++){
      this.state.userData.push({
        x: `${i + 1}:00`,
        y: hourly[i],
      });
    }
  }

  render() {
    return (
      <Bar 
        height={200} 
        title="จำนวนคนที่ลงทะเบียนต่อวัน" 
        data={this.state.userData} 
      />
    )
  }
}

