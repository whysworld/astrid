import styled from "styled-components";
import { Menu } from "antd";

const StyledMenu = styled(Menu)`
	& .ant-menu-item {
		color: rgba(0,0,0,0.85);
	}
	.ant-menu-item:not(:last-child) {
		margin: 0;
	}
  .ant-menu-item {
    margin: 0;
  }
`

export default StyledMenu