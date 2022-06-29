import React from 'react'
import { Spin } from 'antd';

const Loader = () => {
  return (
    <Spin 
      style={{position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 26px)'}}
      size="large"
    />
  )
}

export default Loader