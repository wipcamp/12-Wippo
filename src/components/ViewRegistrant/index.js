import React, { Component } from 'react'
import { Tabs, Icon , Table } from 'antd';
import userService from '../../services/UserService';

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
    title: 'wipId',
    dataIndex: 'wipId',
    key: 'wipId',
  },{
    title: 'lineId',
    dataIndex: 'lineId',
    key:'lineId',
  },{
    title: 'firstName',
    dataIndex: 'firstName',
    key:'firstName',
  },{
    title: 'lastName',
    dataIndex: 'lastName',
    key:'lastName',
  },{
    title: 'status',
    dataIndex: 'status',
    key:'status',
  }
];

export default class index extends Component {
  state = {
    userData:null,
  }
  async componentDidMount(){
    let data = await userService.getAllUser()
    this.setState({userData:data.data.data});
  }
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
                  {console.log(this.state.userData)}
                  <Table dataSource={this.state.userData} columns={columns} />
                </TabPane>
            )
          })
        }
      </Tabs>
    )
  }
}