import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { DATA_FETCH_DURATION } from '../../../utils/constants'
import { HistoryOutlined } from '@ant-design/icons'
import Dropdown from '../Dropdown'

const History = () => {
	const [searchParams, setSearchParams] = useSearchParams({});
	const onItemChange = (value: string) => {
		console.log(value)
		const newSearchParams = new URLSearchParams(searchParams)
		if (value === 'Today|0') newSearchParams.delete('history')
		else newSearchParams.set('history', value.split('|')[1])
		setSearchParams(newSearchParams)
	}
	return (
		<Dropdown
			icon={<HistoryOutlined />}
			data={DATA_FETCH_DURATION}
			width={150}
			onChange={onItemChange}
		/>
	)
}

export default History