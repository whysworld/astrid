import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

import {
	useParams
} from 'react-router-dom'
import TableWithShowcase from '../../components/TableWithShowcase'

const User = () => {
	const params = useParams()
	const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['User'])
	useEffect(() => {
		if (params.name)
			setBreadcrumbs(['User', params.name])
	}, [params])
	return (
		<>
			<Breadcrumb labels={breadcrumbs} />
			{params.name === 'Tom' && (
				<TableWithShowcase />
			)}
		</>
	)
}

export default User