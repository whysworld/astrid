import React from 'react'
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

const menu = (
  <StyledMenu
    selectable={true}
    items={[
      {
        label: 'Light',
        key: '0',
      },
      {
        label: 'Dark',
        key: '1',
      }
    ]}
  />
);
const ThemezoneSelect = () => {
  return (
    <>
      <Dropdown
        overlay={<div>{menu}</div>} trigger={['click']}
        overlayClassName='ant-custom-dropdown-menu'
      >
        <StyledButton icon={<BgColorsOutlined />} />
      </Dropdown>
    </>
  )
}

export default ThemezoneSelect