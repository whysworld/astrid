import React from 'react'
import { Layout } from 'antd'
import Header from './app/components/Header'
import SideBar from './app/components/Sidebar'
import './App.css'
import Dashboard from './app/containers/Dashboard'

import './styles/dark.less'
import './styles/light.less'

const { Content } = Layout

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className="site-layout" style={{ background: "white" }}>
        <Header />
        <Content>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
