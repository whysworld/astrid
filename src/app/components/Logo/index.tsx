import React from 'react'
import {
	DesktopOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 40px;
	display: flex;
	justify-content: center;
	
	.logo-text {
		color: white;
		font-size: 25px;
	}
`
const Logo = () => {

	return (
		<Wrapper>
				<div className='logo-text'>Logo</div>
		</Wrapper>
	)
}

export default Logo