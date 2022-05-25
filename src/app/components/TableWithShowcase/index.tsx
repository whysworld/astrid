import React, { useEffect, useState } from 'react'
import { range, random } from 'lodash';

import Showcase from '../Showcase'
import Table from './components/Table'

const TableWithShowcase = () => {
  const [selection, setSelection] = useState<string>('name_age')
  const [dataSource, setDataSource] = useState<any[]>(
    range(0, 99).map(item => ({
      key: String(item),
      name: `John Brown ${random(0, 99)}`,
      address: `New York No. ${random(0, 99)} Lake Park`,
      physics: random(50, 100),
      math: random(50, 100),
      english: random(50, 100),
    })))

  const onItemChange = (item: string) => {
    console.log("item: ", item)
    setSelection(item.split('|')[0])
    const newDataSource = range(0, 99).map(item => ({
      key: String(item),
      name: `John Brown ${random(0,99)}`,
      address: `New York No. ${random(0,99)} Lake Park`,
      physics: random(50, 100),
      math: random(50, 100),
      english: random(50, 100),
    }))
    setDataSource(newDataSource)
  }

  return (
    <>
      <div className='stack' style={{ gridTemplateColumns: 'repeat(5, minmax(0px, 1fr))', padding: 30 }}>
        <Showcase
          id='name_age'
          title="Name/Age"
          className={selection === 'name_age' ? 'selected' : ''}
          numbers={[4354, 2345]}
          onChange={onItemChange}
        />
        <Showcase
          onChange={onItemChange}
          id='address'
          title="Address"
          numbers={[6643]}
          className={selection === 'address' ? 'selected' : ''}
        />
        <Showcase
          onChange={onItemChange}
          id='math'
          title="Math Score"
          numbers={[3235]}
          className={selection === 'math' ? 'selected' : ''}
        />
        <Showcase
          onChange={onItemChange}
          id='english'
          title="English Score"
          numbers={[4443]}
          className={selection === 'english' ? 'selected' : ''}
        />

        <Showcase
          onChange={onItemChange}
          id='physics'
          title="Physics Scosre"
          numbers={[5436]}
          className={selection === 'physics' ? 'selected' : ''}
        />
      </div>
      <div className='table-wrapper' style={{ padding: 30 }}>
        <Table dataSource={dataSource} />
      </div>
    </>
  )
}

export default TableWithShowcase