import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const StyledButton = styled(Button)`
	width: 40px;
	height: 30px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`
interface IProps {
	imgSrc?: string;
}
const TenantIcon: React.FC<IProps> = ({ imgSrc = 'https://www.google.com/s2/favicons?sz=24&domain_url=https://www.mlb.com/yankees' }) => {

	return (
		<StyledButton>
			<img src={imgSrc} />
		</StyledButton>
	)
}

export default TenantIcon