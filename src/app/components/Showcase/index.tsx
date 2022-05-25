import React, { ReactElement, useState } from 'react'

interface IProps {
  title: string;
  className?: string;
  numbers: Array<number>;
  id: string;
  onChange: (selection: string) => void;
}
const Showcase: React.FC<IProps> = ({ title, className, numbers, id, onChange }) => {
  const [selection, setSelection] = useState<string>('name_age|0')
  const onItemSelect = (item: string) => {
    console.log(item)
    onChange(item)
    setSelection(item)
  }
  const getClasses = (index: number, id: string, selection: string) => {
    if (index === 0) {
      if (`${id}|${index}` === selection) return 'first number selected'
      else return 'first number'
    } else {
      if (`${id}|${index}` === selection) return 'last number selected'
      else return 'last number'
    }
  }
  return (
    <div className={className ? `${className} showcase` : 'showcase'}>
      <div className='title'>{title}</div>
      <div className={numbers.length > 1 ? `content between` : 'content'}>
        {numbers.map((item, index) => (
          <div
            key={`${id}-${index}`}
            className={getClasses(index, id, selection)}
            onClick={() => onItemSelect(`${id}|${index}`)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Showcase