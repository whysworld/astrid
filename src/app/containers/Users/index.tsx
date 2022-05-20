import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

import {
	useParams
} from 'react-router-dom'

const User = () => {
	const params = useParams()
	const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['User'])
	useEffect(()=>{
		if(params.name)
			setBreadcrumbs(['User', params.name])
	}, [params])
	return (
		<>
			<Breadcrumb labels={breadcrumbs} />
		</>
	)
}

export default User