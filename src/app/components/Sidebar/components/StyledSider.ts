import styled from 'styled-components'
import { Layout } from 'antd'
import { colors } from '../../../../themes/theme'
const { Sider } = Layout

const StyledSider = styled(Sider)`
	background-color: ${colors.primary};
	padding: 0;
	display: flex;
	flex-direction: column-reverse;

	.ant-layout-sider-trigger {
		position: relative;
		height: 40px;
		background: transparent;
	}
`
export default StyledSider