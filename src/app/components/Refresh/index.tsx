import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { DATA_FETCH_INTERVAL } from '../../../utils/constants'
import { SyncOutlined } from '@ant-design/icons'
import Dropdown from '../Dropdown'

const Refresh = () => {
	const [searchParams, setSearchParams] = useSearchParams({});

	const onItemChange = (value: string) => {
		const newSearchParams = new URLSearchParams(searchParams)
		console.log(value)
		if (value === 'Now|0') newSearchParams.delete('refresh')
		else newSearchParams.set('refresh', value.split('|')[0])
		setSearchParams(newSearchParams)
	}
	return (
		<Dropdown
			icon={<SyncOutlined />}
			data={DATA_FETCH_INTERVAL}
			onChange={onItemChange}
		/>
	)
}

export default Refresh