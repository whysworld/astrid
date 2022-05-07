import React from 'react'

import { DATA_FETCH_INTERVAL } from '../../../utils/constants'
import { SyncOutlined } from '@ant-design/icons'
import Dropdown from '../Dropdown'

const Refresh = () => {

	return (
		<Dropdown 
			icon={<SyncOutlined />}
			data={DATA_FETCH_INTERVAL}
		/>
	)
}

export default Refresh