import React, { Component } from 'react'
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import { Pie } from "ant-design-pro/lib/Charts";

export default class PieChart extends Component {
  state = {
    salesPieData : [
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
  render() {
    return (
      <Pie
        hasLegend
        title="555555"
        subTitle="ssss"
        total={() => (
          <span
            dangerouslySetInnerHTML={{
              __html: this.state.salesPieData.reduce((pre, now) => now.y + pre, 0)
            }}
          />
        )}
        data={this.state.salesPieData}
        valueFormat={val => (
          <span dangerouslySetInnerHTML={{ __html: val }} />
        )}
        height={294}
      />
    )
  }
}
