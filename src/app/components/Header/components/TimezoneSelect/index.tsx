import React, { useEffect, useState } from 'react'
import { Dropdown as AntDropdown } from 'antd'
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons'
import moment from 'moment'
import 'moment-timezone'

import { Pair } from '../../../../../types';
import StyledMenu from '../../../StyledMenu';

const AnchorWrapper = styled.div`
	min-width: 40px;
	padding: 0 5px;
	display: flex;
  background-color: transparent;
	align-items: center;
	justify-content: center;

	div.timer {
		height: 30px;
		display: flex;
		align-items: center;

    &:hover {
      cursor: pointer;
    }
	}
`
const times: Pair[] = [
  {
    label: 'Browser Time',
    value: 0
  },
  {
    label: 'Location Time',
    value: 1
  },
]
const TimeSelect = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [timezone, setTimezone] = useState<String>(times[0].label)
  const [time, setTime] = useState<String>('')

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })
  const onTimezoneSelect = (value: string) => {
    setTimezone(value)
  }
  const menu = (
    <StyledMenu
      selectable={true}
      items={times.map(item => ({ ...item, key: `${item.label}` }))}
      onSelect={e => onTimezoneSelect(e.key)}
    />
  );

  useEffect(() => {
    if (timezone === 'Browser Time')
      setTime(moment.tz(date, moment.tz.guess()).format('ddd, hh:mm A'))
    else
      setTime(moment.tz(date, 'Africa/Accra').format('ddd, hh:mm A'))
  }, [date, timezone])
  return (
    <AntDropdown
      overlay={<div>{menu}</div>}
      trigger={['click']}
      overlayClassName='custom-dropdown-menu'
      placement={'bottomRight'}
      overlayStyle={{ minWidth: 150 }}
    >
      <AnchorWrapper>
        <div className='timer' onClick={e => e.preventDefault}>
          <>{time}</>
          <DownOutlined style={{ marginLeft: 5, fontSize: 12 }} />
        </div>
      </AnchorWrapper>
    </AntDropdown>
  )
}

export default TimeSelect