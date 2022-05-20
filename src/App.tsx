import React from 'react'
import { Layout } from 'antd'
import {
  Routes,
  Route,
} from 'react-router-dom'
import Header from './app/components/Header'
import SideBar from './app/components/Sidebar'
import './App.css'
import Dashboard from './app/containers/Dashboard'

import './styles/dark.less'
import './styles/light.less'
import System from './app/containers/System'
import User from './app/containers/Users'

const { Content } = Layout

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className="content">
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="system" element={<System />} />
            <Route path="user">
              <Route path=":name" element={<User />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
