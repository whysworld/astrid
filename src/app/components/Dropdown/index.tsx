import React, { ReactNode, useRef, useState } from 'react'
import { Button, Dropdown as AntDropdown } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars-2';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons'
import delay from 'lodash/delay'

import { Pair } from '../../../types';
import StyledMenu from '../StyledMenu';
import './style.css'

const CustomMenu = styled(StyledMenu)`
	padding-right: 8px;
`
const AnchorWrapper = styled(Button)`
	min-width: 40px;
	background-color: white;
	border-radius: 5px;
	padding: 0 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		height: 30px;
		display: flex;
		align-items: center;
		color: rgba(0,0,0,0.85);
		padding: 0 10px;
	}
`
const OverlayWrapper = styled.div`
	display: flex;
`
interface IProps {
	data: Pair[];
	icon: ReactNode;
	width?: number;
}
const Dropdown: React.FC<IProps> = ({ data, icon, width = 100 }) => {
	const [interval, setInterval] = useState<string>(`${data[0].label}|${data[0].value}`)
	const scrollbarElement = useRef<any>(null)

	const onIntervalChange = (value: string) => {
		setInterval(value)
	}

	const menu = (
		<CustomMenu
			selectable={true}
			defaultSelectedKeys={[`${data[0].label}|${data[0].value}`]}
			onSelect={(e) => onIntervalChange(e.key)}
			items={data.map(item => ({ ...item, key: `${item.label}|${item.value}` }))}
		/>
	);

	const scrollToTop = () => {
		if (scrollbarElement?.current)
			scrollbarElement.current.scrollTop(0)
	}
	const onVisibleChange = (value: boolean) => {
		if (value) delay(scrollToTop, 100)
	}

	return (
		<AntDropdown
			overlay={<OverlayWrapper><Scrollbars ref={scrollbarElement} style={{ height: 200 }}>{menu}</Scrollbars></OverlayWrapper>}
			trigger={['click']}
			overlayClassName='ant-custom-dropdown-menu'
			placement={'bottomRight'}
			overlayStyle={{ minWidth: width }}
			onVisibleChange={onVisibleChange}
		>
			<AnchorWrapper>
				<a onClick={e => e.preventDefault()}>
					{interval.split('|')[1] === '0' ? (<>{icon}</>) : (<>{interval.split('|')[0]}</>)}
					{interval.split('|')[1] !== '0' && <DownOutlined style={{ marginLeft: 5, fontSize: 12 }} />}
				</a>
			</AnchorWrapper>
		</AntDropdown>
	)
}

export default Dropdown