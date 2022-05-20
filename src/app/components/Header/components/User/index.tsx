import React from 'react'
import { Button, Dropdown, Menu, Space } from 'antd'
import styled from 'styled-components'
import { UserOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons'
import StyledMenu from '../../../StyledMenu'

const StyledButton = styled(Button)`
  width: 40px;
  background-color: white;
  border-radius: 5px;
  height: 30px;

`

const menu = (
  <StyledMenu
    selectable={false}
    items={[
      {
        label: <Space size={10}><UserOutlined />Abdullah Darwech</Space>,
        key: '0',
      },
      {
        label: <Space size={10}><MailOutlined />amdarwech68@gmail.com</Space>,
        key: '1',
      },
      {
        label: <Space size={10}><LogoutOutlined />Logout</Space>,
        key: '3',
      },
    ]}
  />
);
const User = () => {
  return (
    <>
      <Dropdown
        overlay={<div>{menu}</div>} trigger={['click']}
        overlayClassName='custom-dropdown-menu'
      >
        <StyledButton icon={<UserOutlined />} />
      </Dropdown>
    </>
  )
}

export default User