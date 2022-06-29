import React, { useEffect, useState } from 'react'
import {
	MoreOutlined,
	PlusOutlined,
} from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'
import { Button, Space, Select } from 'antd'

import RGL, { Layout, WidthProvider } from "react-grid-layout";

import Breadcrumb from '../../components/Breadcrumb'
import GridLayoutItem from '../../components/GridLayoutItem';
import useLayout, { LayoutModel } from './hooks/useLayout';

const ReactGridLayout = WidthProvider(RGL);

const { Option } = Select;

const Dashboard = () => {
	const [searchParams, setSearchParams] = useSearchParams({});
	const [dashboard, setDashboard] = useState<string>('dashboard')
	let layout: LayoutModel[] | undefined = useLayout(dashboard)
	const onDashboardChange = (value: string) => {
		setDashboard(value)
	}
	useEffect(() => {
		const newSearchParams = new URLSearchParams(searchParams)
		newSearchParams.set('dashboard', dashboard)
		setSearchParams(newSearchParams)
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<Select defaultValue="dashboard" style={{ width: 'auto', borderRadius: '5px' }} onChange={onDashboardChange} bordered dropdownClassName='custom-dropdown-menu'>
			<Option value="dashboard">dashboard</Option>
			<Option value="health">health</Option>
			<Option value="top10">top10</Option>
		</Select>
	)
	return (
		<>
			<Breadcrumb actions={actions} selects={selects} />
			<ReactGridLayout
				className="layout"
				layout={layout?.map(item => ({ ...item, i: item.id } as Layout))}
				cols={12}
				containerPadding={[30, 30]}
				rowHeight={98}
				margin={[30, 30]}
				maxRows={6}
			>

				{layout?.map(item => (
					<GridLayoutItem key={item.id} data={item}></GridLayoutItem>
				))}
			
			</ReactGridLayout>
		</>
	)
}

export default Dashboard