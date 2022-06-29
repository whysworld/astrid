import React, { useState } from "react"
import { Modal, Tabs, Form, Input, Button, Row, Col, FormInstance, Select, InputNumber } from 'antd'
import { CHART_PALETTES } from './constants'
import { LayoutModel } from "../../containers/Dashboard/hooks/useLayout";
import { CHART_TYPES } from "./constants";

import './style/index.less'

const { TabPane } = Tabs;

export const ChartTypes = ['Bar', 'Graph', 'Pie', 'Gauge', 'Scatter', 'Summary', 'Table']
export const ChartVariants = ['With chart', 'Without chart', 'Percentage']
export type ChartType = 'Bar' | 'Graph' | 'Pie' | 'Gauge' | 'Scatter' | 'Summary' | 'Table'
export interface ChartVariantType {
  Bar: string[],
  Graph: string[],
  Pie: string[],
  Gauge: string[],
  Scatter: string[],
  Summary: string[],
  Table: string[]
}
const ChartVariant: ChartVariantType = {
  Bar: ['Horizontal', 'Vertical'],
  Graph: ['Line', 'Area', 'Bar'],
  Pie: ['Pie', 'Donut'],
  Gauge: ['-'],
  Scatter: ['-'],
  Summary: ['With chart', 'Without chart', 'Percentage'],
  Table: ['-']
}
export interface ChartEditForm {
  widgetTitle: string;
  privilegeList: string;
  chartType: ChartType;
  chartVariant: string;
  colorPalette: string;
  opacity: number;
  query: string;
}

interface IProps {
  visible: boolean;
  defaultValue: LayoutModel;
  onCancel: () => void
  onUpdate: (result: FormInstance<ChartEditForm>) => void
}
const ChartEditModal: React.FC<IProps> = ({ visible, defaultValue, onCancel, onUpdate }) => {
  const [chartVariant, setChartVariant] = useState<any[]>(CHART_TYPES.filter(item => item.value === defaultValue.chartType)[0]["variations"])
  const [form] = Form.useForm<ChartEditForm>();
  const onChange = (key: string) => {
    console.log(key);
  };
  const onFinish = () => {
    onUpdate(form)
  };
  const onSubmit = () => {
    form.submit()
  }
  const onChartTypeChange = (type: string) => {
    const filter = CHART_TYPES.filter(item => item.value === type)
    const newChartVariant = filter[0]["variations"]
    setChartVariant(newChartVariant)
  }
  return (
    <>
      <Modal
        title="Update Panel"
        visible={visible}
        okText="Update Chart"
        cancelText="Cancel"
        centered={true}
        maskClosable={false}
        closable={false}
        footer={[
          <Button key="back" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={onSubmit}>
            Update Chart
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout={"vertical"}
          onFinish={onFinish}
        >
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Add new chart" key="1">
              <div className="content">

                <Row>
                  <Col span={24}>
                    <Form.Item label="Widget Title" name="widgetTitle" initialValue={defaultValue.title}>
                      <Input></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col span={12}>
                    <Form.Item label="Privilege list" name="privilegeList">
                      <Select>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Chart Type" name="chartType" initialValue={defaultValue.chartType}>
                      <Select dropdownClassName='custom-dropdown-menu' onChange={onChartTypeChange}>
                        {
                          CHART_TYPES.map((item) => (
                            <Select.Option value={item.value} key={item.value}>{item.text}</Select.Option>
                          ))
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col span={9}>
                    <Form.Item label="Chart variants" name="chartVariant" initialValue={defaultValue.chartVariant} >
                      <Select dropdownClassName='custom-dropdown-menu'>
                        {
                          chartVariant.map((item) => (
                            <Select.Option value={item.value} key={item.value}>{item.text}</Select.Option>
                          ))
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={9}>
                    <Form.Item label="Color palette" name="colorPalette" initialValue={defaultValue.colorPalette}>
                      <Select dropdownClassName='custom-dropdown-menu'>
                        {
                          CHART_PALETTES.map((item) => (
                            <Select.Option value={item.value} key={item.value}>
                              <>
                                {item.colorsPreview.map(color => (
                                  <span key={color} className="color" style={{ backgroundColor: color }}></span>
                                ))}
                                {item.text}
                              </>
                            </Select.Option>
                          ))
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Opacity" name='opacity' initialValue={defaultValue.opacity}>
                      <InputNumber min={0.00} max={1.00} step={0.10} style={{ width: '100%' }}></InputNumber>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </TabPane>
            {/* <TabPane tab="Import chart from JSON" key="2">
              Content of Tab Pane 2
            </TabPane> */}
          </Tabs>
        </Form>
      </Modal>
    </>
  );
}

export default ChartEditModal