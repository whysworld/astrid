import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { SearchOutlined, FilterFilled } from '@ant-design/icons'
import { Input, Select, Popover } from 'antd'

import { SearchMode } from '../../../types'

const Wrapper = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 5px;
	min-width: 200px;
	height: 30px;
	padding: 0 10px;
	position: relative;

	& > * {
		padding-right: 5px;
	}
	.ant-select:not(.ant-select-customize-input) .ant-select-selector {
		padding-left: 0;
	}
	.anticon {
		&.search {
			font-size: 16px;
		}
		&.filter {
			display: flex;
			height: 30px;
			align-items: center;
		}
	}
	.ant-popover {
		width: 100%;
		font-size: 14px;
		font-variant: initial;
		background-color: #fff;
		border-radius: 2px;
		outline: none;
		left: 0 !important;

		.ant-popover-inner {
			box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
			color: rgba(0, 0, 0, 0.85);
		}
	}
`
const OverlayerWrapper = styled.div`
	min-height: 150px;
`
const Search = () => {
	const [mode, setMode] = useState<SearchMode>('Global')
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [placeholder, setPlaceholder] = useState<string>('Search with natural language here')

	const onSearchModeChange = (value: SearchMode) => {
		setMode(value)
		if(value === 'Global')
			setPlaceholder('Search with natural language here')
		else
			setPlaceholder('Search by typing here')
	}
	const onPageFilterTrigger = () => {
		console.log("onPageFilterTrigger")
	}
	const content = (
		<OverlayerWrapper onClick={(e) => { e.stopPropagation(); e.preventDefault() }}>

		</OverlayerWrapper>
	)
	return (
		<>
			<Wrapper ref={wrapperRef} className='search'>
				<SearchOutlined className='search' />
				<Select
					bordered={false}
					defaultValue={mode}
					dropdownMatchSelectWidth={100}
					onChange={onSearchModeChange}
				>
					<Select.Option value='Global' label='Global'>Global</Select.Option>
					<Select.Option value='This Page' label='This Page'>This Page</Select.Option>
				</Select>
				{mode === 'This Page' && (
					<Popover
						content={content}
						arrowContent={<></>}
						trigger={['click']}
						getPopupContainer={() => wrapperRef.current || document.body}
						placement={'bottom'}
					>
						<FilterFilled className='filter' style={{ color: '#17bebb' }} onClick={onPageFilterTrigger} />
					</Popover >
				)}
				<Input allowClear bordered={false} placeholder={placeholder} />
			</Wrapper>
		</>
	)
}

export default Search