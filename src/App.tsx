import React, { Suspense } from 'react'
import { Layout } from 'antd'
import {
  Routes,
  Route,
} from 'react-router-dom'

import System from './app/containers/System'
import User from './app/containers/Users'
import Loader from './app/components/Loader'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import './App.css'
import './styles/dark.less'
import './styles/light.less'


const Header = React.lazy(() => import("./app/components/Header"))
const SideBar = React.lazy(() => import("./app/components/Sidebar"))
const Dashboard = React.lazy(() => import("./app/containers/Dashboard"));

const { Content } = Layout

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Suspense fallback={<></>}>
        <SideBar />
      </Suspense>
      <Layout className="content">
        <Suspense fallback={<></>}>
          <Header />
        </Suspense>
        <Content>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>}
            />
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
