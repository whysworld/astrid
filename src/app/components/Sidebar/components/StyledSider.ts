import styled from 'styled-components'
import { Layout } from 'antd'
const { Sider } = Layout

const StyledSider = styled(Sider)`
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