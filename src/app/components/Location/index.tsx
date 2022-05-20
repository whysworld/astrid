import React, { useEffect, useRef, useState } from 'react'
import { TreeSelect } from 'antd'
import styled from 'styled-components'
import { createSearchParams, useLocation, useSearchParams } from 'react-router-dom'
import { positionValues, Scrollbars } from 'react-custom-scrollbars-2'
import { EditOutlined } from '@ant-design/icons'
import './style.css'

const { TreeNode } = TreeSelect

const StyledTreeSelect = styled(TreeSelect)`
	.ant-select-clear,
	.ant-select-arrow {
		color: rgba(0,0,0,0.85)
	}
	.ant-select-selection-item {
		.anticon.action {
			display: none;
		}
	}
`
const TreeItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Location = () => {
	const scrollbarElement = useRef<any>(null)
	const [scrollTop, setScrollTop] = useState<Number>(0)
	const [tenant, setTenant] = useState<string>('yankees')
	const [location, setLocation] = useState<string>('yankees')
	const [searchParams, setSearchParams] = useSearchParams({loc: location, tenant: tenant});
	console.log("searchParams: ", searchParams.toString())

	useEffect(() => {
		console.log("location changed: ", location)
		const newSearchParams = new URLSearchParams(searchParams)
		newSearchParams.set('loc', location)
		setSearchParams(newSearchParams)
	}, [location])
	useEffect(() => {
		console.log("tenant changed: ", tenant)
		const newSearchParams = new URLSearchParams(searchParams)
		newSearchParams.set('tenant', tenant)
		setSearchParams(newSearchParams)
	}, [tenant])

	const onChange = (loc: any, labelList: any, extra: any) => {
		setLocation(loc)
	}
	const onTreeExpand = (keys: any) => {
		//force to hide scrollbar
		if (scrollbarElement && scrollTop === 0) {
			scrollbarElement.current?.scrollTop(1)
		}
	}
	const onEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault()
		e.stopPropagation()
		console.log("onEdit")
	}
	return (
		<StyledTreeSelect
			showSearch
			className='location'
			style={{ width: '220px' }}
			onTreeExpand={onTreeExpand}
			dropdownRender={(menu) => (
				<Scrollbars
					ref={scrollbarElement}
					autoHeight
					hideTracksWhenNotNeeded
					autoHeightMax={150}
					onUpdate={(values: positionValues) => { setScrollTop(values.scrollTop) }}
				>
					{menu}
				</Scrollbars>)}
			dropdownClassName='custom-dropdown-tree'
			placeholder="Please select"
			allowClear
			treeDefaultExpandAll
			treeDataSimpleMode
			onChange={onChange}
			defaultValue={location}
			virtual={false}
		>
			<TreeNode value="yankees" title={<TreeItemWrapper><span>yankees</span><EditOutlined className='action' style={{ paddingRight: 10 }} onClick={onEdit} /></TreeItemWrapper>} >
				<TreeNode value="nyc" title="nyc">
					<TreeNode value="town1" title="town1" />
					<TreeNode value="town2" title="town2" />
				</TreeNode>
				<TreeNode value="nyk" title="nyk">
					<TreeNode value="riverave" title="riverave" />
				</TreeNode>
			</TreeNode>
		</StyledTreeSelect>
	)
}

export default Location