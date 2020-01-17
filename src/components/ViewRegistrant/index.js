import React, { Component } from 'react'
import { Tabs, Icon , Table } from 'antd';

const { TabPane } = Tabs;
const Menu = [
  'รออนุมัติ' , 'WIPPER ในระบบ'
]
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default class index extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        {
          Menu.map((data , i ) => {
            return(
              <TabPane
                tab={
                  <span>
                    <Icon type="apple" />
                    {data}
                  </span>
                }
                key={i}>
                  
                  <Table dataSource={dataSource} columns={columns} />
                </TabPane>
            )
          })
        }
      </Tabs>
    )
  }
}