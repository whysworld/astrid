import React, { useState } from 'react'
import { TreeSelect } from 'antd'
import styled from 'styled-components'

const { TreeNode } = TreeSelect

const StyledTreeSelect = styled(TreeSelect)`
	.ant-select-clear,
	.ant-select-arrow {
		color: rgba(0,0,0,0.85)
	}
`
const Location = () => {
	const [value, setValue] = useState(undefined)
	const onChange = () => {
		setValue(value)
	}

	return (
		<StyledTreeSelect
			showSearch
			style={{ width: '220px' }}
			value={value}
			dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
			placeholder="Please select"
			allowClear
			treeDefaultExpandAll
			treeDataSimpleMode
			onChange={onChange}
			virtual={true}
		>
			<TreeNode value="parent 1" title="parent 1">
				<TreeNode value="parent 1-0" title="parent 1-0">
					<TreeNode value="leaf1" title="leaf1" />
					<TreeNode value="leaf2" title="leaf2" />
				</TreeNode>
				<TreeNode value="parent 1-1" title="parent 1-1">
					<TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
				</TreeNode>
			</TreeNode>
		</StyledTreeSelect>
	)
}

export default Location