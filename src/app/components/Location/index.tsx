import React, { useRef, useState } from 'react'
import { TreeSelect } from 'antd'
import styled from 'styled-components'
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
	const [value, setValue] = useState(undefined)
	const scrollbarElement = useRef<any>(null)
	const [scrollTop, setScrollTop] = useState<Number>(0)

	const onChange = () => {
		setValue(value)
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
			style={{ width: '220px' }}
			value={value}
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
			dropdownClassName='custom-scroll'
			placeholder="Please select"
			allowClear
			treeDefaultExpandAll
			treeDataSimpleMode
			onChange={onChange}
			defaultValue="parent 1"
			virtual={false}
		>
			<TreeNode value="parent 1" title={<TreeItemWrapper><span>parent 1</span><EditOutlined className='action' style={{ paddingRight: 10 }} onClick={onEdit} /></TreeItemWrapper>} >
				<TreeNode value="parent 1-0" title="parent 1-0">
					<TreeNode value="leaf1" title="leaf1" />
					<TreeNode value="leaf2" title="leaf2" />
				</TreeNode>
				<TreeNode value="parent 1-1" title="parent 1-1">
					<TreeNode value="leaf3" title="leaf3" />
				</TreeNode>
			</TreeNode>
		</StyledTreeSelect>
	)
}

export default Location