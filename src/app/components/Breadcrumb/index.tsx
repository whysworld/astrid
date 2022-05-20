import React from 'react'
import StyledBreadcrumb from './components/StyledBreadcrumb'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Row, Col, Space } from 'antd'

interface IProps {
	labels?: string[];
	actions?: React.ReactNode;
	selects?: React.ReactNode;
}

const Label = styled.span`

`
const Breadcrumb: React.FC<IProps> = ({ labels = ['Dashboard'], actions = null, selects = null }) => {
	return (
		<StyledBreadcrumb className='breadcrumb'>
			<Row>
				<Col span={12}>
					<Space size={5}>
						<HomeOutlined style={{ fontSize: '150%', marginRight: '5px' }} />
						<RightOutlined style={{ fontSize: '70%', marginRight: '5px' }} />
						{labels?.map(label => (
							<span key={label}>
								<Label>{label}</Label>
								<RightOutlined style={{ fontSize: '70%', marginRight: '5px' }} />
							</span>
						))}
						{selects ? (
							<>
								{selects}
							</>
						) : <></>}
					</Space>
				</Col>
				<Col className={'column-reverse'} span={12}>
					{actions ? (
						<>
							{actions}
						</>
					) : (<></>)}
				</Col>
			</Row>
		</StyledBreadcrumb>
	)
}

export default Breadcrumb