import React from 'react'
import { MenuProps } from 'antd'
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons'
import StyledMenu from './components/StyledMenu'

const Menu = () => {
	type MenuItem = Required<MenuProps>['items'][number]

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
		} as MenuItem
	}

	const items: MenuItem[] = [
		getItem('Option 1', '1', <PieChartOutlined />),
		getItem('Option 2', '2', <DesktopOutlined />),
		getItem('User', 'sub1', <UserOutlined />, [
			getItem('Tom', '3'),
			getItem('Bill', '4'),
			getItem('Alex', '5'),
		]),
		getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
		getItem('Files', '9', <FileOutlined />),
	]

	return (
		<StyledMenu className='menu' defaultSelectedKeys={['1']} mode="vertical" items={items} />
	)
}

export default Menu