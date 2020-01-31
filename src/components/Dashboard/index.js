import React, { Component } from 'react'
import dayjs from 'dayjs'
import PieChart from './PieChart'
import DayGraph from './DayGraph'
import HourlyGraph from './HourlyGraph'
import userService from '../../services/UserService';

export default class index extends Component {
  state = {
    day:0,
    hour:0,
    min:0,
    updateCount:0,
    updateStatus: 'green',
  }

  componentDidMount(){
    this.updateTime()
    this.getUserUpdateCount()
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

  async getUserUpdateCount(){
    let count = await userService.getUserUpdateCount()
    count = count.data.data[0].count
    if(count >= 0){
      this.setState({
        updateCount : 'ผู้สมัครเพิ่มขึ้นจำนวน ' +  count + ' คน',
        updateStatus : 'green'
      })
    } else if(count === 0){
      this.setState({
        updateCount : 'ผู้สมัครจำนวนเท่ากับเมื่อวาน',
        updateStatus : 'black'
      })
    } else if(count <= 0){
      this.setState({
        updateCount : 'ผู้สมัครลดลงจำนวน ' + count + ' คน',
        updateStatus : 'red'
      })
    } else{
      this.setState({
        updateCount : 'Error Cannot get count.',
        updateStatus : 'red'
      })
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3 style={{marginTop: "30px"}}>ข้อมูลสรุป</h3>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <PieChart />
                    </div>
                    <div className="col-3 text-center">
                      บันทึกข้อมูลส่วนตัว
                      <h3>100</h3>
                    </div>
                    <div className="col-3 text-center">
                      ตอบคำถามแล้ว
                      <h3>100</h3>
                    </div>
                    <div className="col-3 text-center">
                      ส่งใบสมัครเรียบร้อย
                      <h3>100</h3>
                    </div>
                  </div>
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
                  <h5 className="card-title">เหลือเวลาอีก</h5>
                  {this.state.day} วัน {this.state.hour} ชั่วโมง {this.state.min} นาที  
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Google Rankings</h5>
                  <h6 style={{ color: `${ this.state.updateStatus }` }}> {this.state.updateCount}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
