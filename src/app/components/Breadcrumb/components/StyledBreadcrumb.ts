import styled from 'styled-components'

const StyledBreadcrumb = styled.div`
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
	padding: 5px 30px;
	position: relative;
	height: 40px;
	display: flex;
	align-items: center;

	.ant-row {
		width: 100%;

		.ant-col {
			display: flex;
			align-items: center;
				
			&.column-reverse {
				justify-content: flex-end;
			}
		}
	}
`
export default StyledBreadcrumb