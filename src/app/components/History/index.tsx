import React from 'react'

import { DATA_FETCH_DURATION } from '../../../utils/constants'
import { HistoryOutlined } from '@ant-design/icons'
import Dropdown from '../Dropdown'

const History = () => {

	return (
		<Dropdown 
			icon={<HistoryOutlined />}
			data={DATA_FETCH_DURATION}
			width={150}
		/>
	)
}

export default History