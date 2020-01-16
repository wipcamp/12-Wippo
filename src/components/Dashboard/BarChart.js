import React, { Component } from 'react'
import { Bar } from 'ant-design-pro/lib/Charts';

export default class BarChart extends Component {
  
  state = {
    salesData: []
  }

  componentDidMount(){
    for (let i = 0; i < 12; i += 1) {
      this.state.salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }
  }

  render() {
    return (
      <Bar 
        height={200} 
        title="销售额趋势" 
        data={this.state.salesData} />
    )
  }
}

