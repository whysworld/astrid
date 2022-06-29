import React from 'react'
import { MenuProps } from 'antd'
import {
	DesktopOutlined,
	PieChartOutlined,
	UserOutlined,
} from '@ant-design/icons'
import {
	NavLink,
	useLocation,
} from 'react-router-dom'
import StyledMenu from './components/StyledMenu'

const Menu = () => {
	type MenuItem = Required<MenuProps>['items'][number]
	const location = useLocation();

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
		getItem(<NavLink to={'/'}>Dashboard</NavLink>, '/', <PieChartOutlined />),
		getItem(<NavLink to={'/system'}>System</NavLink>, '/system', <DesktopOutlined />),
		getItem('User', 'sub1', <UserOutlined />, [
			getItem(<NavLink to={'/user/Tom'}>Tom</NavLink>, '/user/Tom'),
			getItem(<NavLink to={'/user/Bill'}>Bill</NavLink>, '/user/Bill'),
		])
	]

	return (
		<StyledMenu 
			className='custom-sider-menu' 
			selectedKeys={[location.pathname]} 
			mode="vertical" 
			items={items} 
			rootClassName='custom-sider-menu' 
			defaultSelectedKeys={['1']} 
		/>
	)
}

export default Menu