import React, { useState } from 'react'
import styled from 'styled-components'

import { SIDEBAR_WIDTH } from '../../../utils/constants'
import StyledSider from './components/StyledSider'
import Logo from '../Logo'
import Menu from '../Menu'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const SideBar = () => {
	const [collapsed, onCollapse] = useState<boolean>(false)
	return (
		<Wrapper className='sider'>
			<Logo />
			<StyledSider className='sider' collapsible collapsed={collapsed} onCollapse={onCollapse} width={SIDEBAR_WIDTH}>
				<Menu />
			</StyledSider>
		</Wrapper>
	)
}

export default SideBar