import React from 'react'
import {
	MoreOutlined,
	PlusOutlined,
} from '@ant-design/icons'
import { Button, Space, Select } from 'antd'
import Breadcrumb from '../../components/Breadcrumb'

const { Option } = Select;

const Dashboard = () => {

	const onDashboardChange = () => {
		console.log('onDashboardChange')
	}
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
		<Select defaultValue="lucy" style={{ width: 'auto', borderRadius: '5px' }} onChange={onDashboardChange} bordered>
			<Option value="jack">Dashboard 1</Option>
			<Option value="lucy">Dashboard 2</Option>
			<Option value="Yiminghe">Dashboard 3</Option>
		</Select>
	)
	return (
		<>
			<Breadcrumb actions={actions} selects={selects} />
		</>
	)
}

export default Dashboard