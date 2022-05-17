import React from 'react'
import { Space } from 'antd'

import StyledHeader from './components/StyledHeader'
import TenantIcon from '../TenantIcon'
import Location from '../Location'
import Search from '../Search'
import Refresh from '../Refresh'
import History from '../History'
import Notification from '../Notification'
import User from './components/User'
import ThemeSelect from './components/ThemeSelect'
import ThemezoneSelect from './components/TimezoneSelect'

const Header = () => {
	return (
		<StyledHeader className='header'>
			<TenantIcon />
			<Location />
			<Search />
			<Refresh />
			<History />
			<Notification />
			<User />
			<ThemeSelect />
			<ThemezoneSelect />
		</StyledHeader>
	)
}

export default Header