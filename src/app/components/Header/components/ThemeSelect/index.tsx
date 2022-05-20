import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Menu, Space } from 'antd'
import styled from 'styled-components'
import { BgColorsOutlined } from '@ant-design/icons'
import StyledMenu from '../../../StyledMenu'

const StyledButton = styled(Button)`
  width: 40px;
  background-color: white;
  border-radius: 5px;
  height: 30px;

`


const ThemezoneSelect = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme])

  const changeTheme = (value: any) => {
    // console.log('theme: ', value)
    // setTheme(theme === 'light' ? 'dark' : 'light');
    setTheme(value.key)
  }
  const menu = (
    <StyledMenu
      selectable={true}
      onSelect={changeTheme}
      defaultSelectedKeys={['light']}
      items={[
        {
          label: 'light',
          key: 'light',
        },
        {
          label: 'dark',
          key: 'dark',
        }
      ]}
    />
  );
  return (
    <>
      <Dropdown
        overlay={<div>{menu}</div>} trigger={['click']}
        overlayClassName='custom-dropdown-menu'
      >
        <StyledButton icon={<BgColorsOutlined />} />
      </Dropdown>
    </>
  )
}

export default ThemezoneSelect