import React, { FunctionComponent, ReactNode, useState } from 'react'
import { MoreOutlined, EyeOutlined, EditOutlined, LockOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Dropdown, FormInstance, Menu } from 'antd';

import ChartEditModal, { ChartEditForm } from '../ChartEditModal';

import './style/index.less'
import { LayoutModel } from '../../containers/Dashboard/hooks/useLayout';
import Summary from '../Charts/Summary';
import Graph from '../Charts/Graph';
import Pie from '../Charts/Pie';
import Bar from '../Charts/Bar';

type Action = 'View' | 'Edit' | 'Unlock' | 'Remove'

interface IProps {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children?: ReactNode;
  data: LayoutModel;
}
const GridLayoutItem: FunctionComponent<IProps> = React.forwardRef(({ style, className, children, data, ...otherProps }, ref: React.Ref<HTMLDivElement>) => {
  const [chartEditModalVisible, setChartEditModalVisible] = useState<boolean>(false)
  const onChartEditModalHide = () => {
    setChartEditModalVisible(false)
  }
  const onChartUpdate = (form: FormInstance<ChartEditForm>) => {
    console.log("form: ", form.getFieldsValue())
    // setChartEditModalVisible(false)
  }
  const onActionTrigger = (action: Action) => {
    console.log("action: ", action)
    switch (action) {
      case "View":
        break;
      case "Edit":
        setChartEditModalVisible(true)
        break;
      default:
        break;
    }
  }
  const menu = (
    <Menu
      selectable={false}
      items={[
        {
          label: <div className='dropdown-menu-item' onClick={() => onActionTrigger('View')}><EyeOutlined />View</div>,
          key: '0',
        },
        {
          label: <div className='dropdown-menu-item' onClick={() => onActionTrigger('Edit')}><EditOutlined />Edit</div>,
          key: '1',
        },
        {
          label: <div className='dropdown-menu-item' onClick={() => onActionTrigger('Unlock')}><LockOutlined />Unlock Resize/Position</div>,
          key: '3',
        },
        {
          type: 'divider',
        },
        {
          label: <div className='dropdown-menu-item' onClick={() => onActionTrigger('Remove')}><DeleteOutlined />Remove</div>,
          key: '4',
        },
      ]}
    />
  );
  return (
    <div style={{ ...style }} className={className} ref={ref} {...otherProps}>
      <>
        <div className='header'>
          <div className='title'>
            {data.title || <></>}
          </div>
          <div className='action'>
            <Dropdown
              overlay={<div>{menu}</div>}
              trigger={['click']}
              placement="bottomRight"
              overlayClassName='custom-dropdown-menu'
            >
              <Button type={"link"} shape="circle" icon={<MoreOutlined style={{ fontSize: '25px' }} />}></Button>
            </Dropdown>
          </div>
        </div>
        <div className='content'>
          {data.chartType === 'summary' && (
            <Summary data={data} />
          )}
          {data.chartType === 'graph' && (
            <Graph data={data} />
          )}
          {data.chartType === 'pie' && (
            <Pie data={data} />
          )}
          {data.chartType === 'bar' && (
            <Bar data={data} />
          )}
        </div>
      </>
      <ChartEditModal
        visible={chartEditModalVisible}
        onCancel={onChartEditModalHide}
        onUpdate={onChartUpdate}
        defaultValue={data}
      />
    </div>
  );
})

export default GridLayoutItem