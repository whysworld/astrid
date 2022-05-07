import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import { BellOutlined } from '@ant-design/icons'
const StyledButton = styled(Button)`
  width: 40px;
  background-color: white;
  border-radius: 5px;
  height: 30px;

`
const Notification = () => {
  return (
    <>
      <StyledButton icon={<BellOutlined />} />
    </>
  )
}

export default Notification