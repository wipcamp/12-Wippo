import React, { Component } from 'react'
import { Bar } from 'ant-design-pro/lib/Charts';
import userService from '../../services/UserService'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class HourlyGraph extends Component {

  state = {
    userData: [],
    date: null
  }

  componentDidMount(){
    let date = new Date();
    this.setDateState(date);
  }

  async getHourlyGraph(currentDate){
    this.setState({
      userData : []
    })
    let data = await userService.getHourlyGraph(currentDate);
    let hourly = data.data.data;
    for(let i = 0 ; i < 24 ; i++){
      this.state.userData.push({
        x: `${i + 1}:00`,
        y: hourly[i],
      });
    }
    console.log(currentDate)
  }

  setDateState(date){
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let currentDate = year+"-"+month+"-"+day
    this.setState({
      date: date
    })
    this.getHourlyGraph(currentDate)
  }

  render() {
    return (
      <div>
      <DatePicker selected={this.state.date} onChange={date => this.setDateState(date)} /> 
      <Bar 
        height={200} 
        title="จำนวนคนที่ลงทะเบียนต่อวัน" 
        data={this.state.userData} 
      />
      </div>
    )
  }
}

