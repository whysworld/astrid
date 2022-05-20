import React, { useEffect, useState } from 'react'
import {
	MoreOutlined,
	PlusOutlined,
} from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'
import { Button, Space, Select } from 'antd'
import Breadcrumb from '../../components/Breadcrumb'

const { Option } = Select;

const Dashboard = () => {
	const [searchParams, setSearchParams] = useSearchParams({});
	const [dashboard, setDashboard] = useState<string>('Dashboard1')

	const onDashboardChange = (value: string) => {
		setDashboard(value)
	}
	useEffect(() => {
		const newSearchParams = new URLSearchParams(searchParams)
		newSearchParams.set('dashboard', dashboard)
		setSearchParams(newSearchParams)
	}, [dashboard])
	const onItemAdd = () => {
		console.log('onItemAdd')
	}
	const actions = (
		<Space size={10}>
			<Button shape="circle" icon={<PlusOutlined />} onClick={onItemAdd} size="small" style={{ border: 'none' }} />
			<Button shape="circle" icon={<MoreOutlined />} onClick={onItemAdd} size="small" style={{ border: 'none' }} />
		</Space>
	)
	const selects = (
		<Select defaultValue="Dashboard1" style={{ width: 'auto', borderRadius: '5px' }} onChange={onDashboardChange} bordered dropdownClassName='custom-dropdown-menu'>
			<Option value="Dashboard1">Dashboard 1</Option>
			<Option value="Dashboard2">Dashboard 2</Option>
			<Option value="Dashboard3">Dashboard 3</Option>
		</Select>
	)
	return (
		<>
			<Breadcrumb actions={actions} selects={selects} />
		</>
	)
}

export default Dashboard