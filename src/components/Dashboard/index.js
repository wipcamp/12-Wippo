import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import dayjs from 'dayjs'
import PieChart from './PieChart'
import DayGraph from './DayGraph'
import HourlyGraph from './HourlyGraph'

const Div = styled(Col)`
  background-color: #FFF;
`



export default class index extends Component {

  state = {
    day:0,
    hour:0,
    min:0,
    percent:0,
  }

  componentDidMount(){
    this.updateTime()
    this.interval = setInterval(() => {
      dayjs('2020-03-12T23:59').isAfter(dayjs().format('YYYY-MM-DDTHH:mm')) ? this.updateTime() : this.stop();
    }, 1000);
  }

  updateTime = () => {
    const datenow = dayjs().format('YYYY-MM-DDTHH:mm')
    const date2 = dayjs('2020-03-12T23:59')
    let dayRemaining = Math.trunc((date2.diff(datenow, 'minute') / 60)/24) 
    let hoursRemaining = Math.trunc((date2.diff(datenow, 'minute')/60) - (dayRemaining * 24))
    let minutesRemaining = Math.ceil((date2.diff(datenow, 'minute', true)) - (((dayRemaining*24)+hoursRemaining)*60)) + 1
    this.setState({
      day: dayRemaining,
      hour: hoursRemaining,
      min: minutesRemaining
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 style={{marginTop: "30px"}}>ข้อมูลสรุป</h1>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <PieChart />
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <HourlyGraph/>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <DayGraph />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 class="card-title">เหลือเวลาอีก</h5>
                  {this.state.day} วัน {this.state.hour} ชั่วโมง {this.state.min} นาที  
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 class="card-title">Google Rankings</h5>
                  {this.state.percent}  
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
