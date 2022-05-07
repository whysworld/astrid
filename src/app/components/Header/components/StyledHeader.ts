import styled from 'styled-components'
import { Layout } from 'antd'
import { colors } from '../../../../themes/theme'
const { Header } = Layout

const StyledHeader = styled(Header)`
	background-color: ${colors.header};
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