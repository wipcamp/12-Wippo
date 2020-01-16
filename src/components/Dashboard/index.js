import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
// import dayjs from 'dayjs'
import PieChart from './PieChart'
import BarChart from './BarChart'

const Div = styled(Col)`
  background-color: #FFF;
`

// const datenow = dayjs().format('YYYY-MM-DD')
// const date1 = dayjs(`${datenow}`)
// const date2 = dayjs('2020-03-12')
// datenow.diff(date2) // 20214000000 default milliseconds
// datenow.diff(date2, 'month') // 7
// datenow.diff(date2, 'month', true) // 7.645161290322581

export default class index extends Component {
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
            วันเดือนปี
              {/* {date2.diff(datenow, 'day')} */}
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
