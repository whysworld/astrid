import styled from 'styled-components'
import { Layout } from 'antd'
const { Header } = Layout

const StyledHeader = styled(Header)`
	height: 40px;
	padding: 0 7px;
	display: flex;
	align-items: center;

	& > * {
		margin-right: 7px;

		&:last-child {
			margin-right: 0;
		}
	}
`
export default StyledHeader