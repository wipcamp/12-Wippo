import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import MainRouter from '../../Router'
import Header from './Header'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Dashboard from '../Dashboard'

const { Content } = Layout;

export default class Index extends Component {
  render() {
    return (
        <Layout>
          <Layout>
            <Header />
          </Layout>
          <Layout style={{ minHeight: '100vh' }}>
            <MainRouter />
          </Layout>
        </Layout>
    )
  }
}
