import React from 'react';
import { Table as AntTable } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';

interface DataType {
  key: React.Key;
  name: string;
  address: string;
  physics: number;
  math: number;
  english: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Physics Score',
    dataIndex: 'physics',
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
  },
  {
    title: 'English Score',
    dataIndex: 'english',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

interface IProps {
  dataSource: any[];
}
const Table: React.FC<IProps> = ({ dataSource }) => {

  return (
    <div className='table-wrapper'>
      <div className='table-header'>
        <div className='title'>Profiles</div>
      </div>
      <AntTable
        pagination={{ position: ['bottomLeft', 'bottomLeft'], showQuickJumper: false }}
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
      />
    </div>
  )
}

export default Table;