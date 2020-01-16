import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import dayjs from 'dayjs'
import PieChart from './PieChart'
import BarChart from './BarChart'

const Div = styled(Col)`
  background-color: #FFF;
`



export default class index extends Component {

  state = {
    day:0,
    hour:0,
    min:0
  }

  componentDidMount(){
    this.updateTime()
    this.interval = setInterval(() => {
      dayjs('2020-03-12T23:59').isAfter(dayjs().format('YYYY-MM-DDTHH:mm')) ? this.updateTime() : this.stop();
    }, 1000);
  }
// think flow register who regit camp
 

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
    // console.log(hoursRemaining)
    // console.log(minutesRemaining)
// datenow.diff(date2) // 20214000000 default milliseconds
// datenow.diff(date2, 'month') // 7
// datenow.diff(date2, 'month', true) // 7.645161290322581

  }

  render() {
    return (
      <React.Fragment>
        <h1>ข้อมูลสรุป</h1>
        <Row>
          <Div span={20} >
          <PieChart />
          </Div>
          <Row>
          <Div span={4} >
            {/* วันเดือนปี */}
            วัน {this.state.day} <br />
            ชั่วโมง {this.state.hour} <br />
            นาที {this.state.min}
          </Div>
          <Div span={4} >
            Percent Compare 
          </Div>
          </Row>
          <Div span={24} >
          <BarChart />
          </Div>
          <Div span={24} >
          <BarChart />
          </Div>
        </Row>
      </React.Fragment>
    )
  }
}
