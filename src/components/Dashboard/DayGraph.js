import React, { Component } from 'react'
import { Bar } from 'ant-design-pro/lib/Charts';
import userService from '../../services/UserService'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class DayGraph extends Component {
  state = {
    userData: [],
    date: null
  }

  componentDidMount(){
    let date = new Date();
    this.setDateState(date);
  }

  async getDailyGraph(date){
    this.setState({
      userData : []
    })
    let daily = await userService.getDailyGraph(date);
    let data = daily.data.data;
    console.log(data);
    let numDate = new Date()
    numDate = this.state.date
    for(let i = 0 ; i < 7 ; i++){
      let year = numDate.getFullYear();
      let month = ("0" + (numDate.getMonth() + 1)).slice(-2);
      let day = ("0" + numDate.getDate()).slice(-2);
      let cDate = year+"-"+month+"-"+day
      this.state.userData.push({
        x: cDate,
        y: data[i],
      });
      numDate.setDate(numDate.getDate() + 1)
    }
    numDate.setDate(numDate.getDate() - 7)
    
  }

  setDateState(date){
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let currentDate = year+"-"+month+"-"+day
    this.setState({
      date: date
    })
    this.getDailyGraph(currentDate)
  }

  render() {
    return (
      <div>
        <h5 className="card-title text-center">จำนวนคนที่ลงทะเบียน (แบ่งตามวัน)</h5>
        <div className="text-right">
          <DatePicker selected={this.state.date} onChange={date => this.setDateState(date)} /> 
        </div>
        <Bar 
          height={200} 
          // title="จำนวนคนที่ลงทะเบียนต่อสัปดาห์"
          data={this.state.userData} />
      </div>
    )
  }
}

