import { useEffect, useState } from 'react'
import DashboardService from '../services'

export interface LayoutModel {
  x: number,
  y: number,
  w: number,
  h: number,
  id: string,
  title: string,
  chartType: string,
  chartVariant: string,
  privilege: string,
  colorPalette: string,
  opacity: number,
  isResizable: boolean,
  isDraggable: boolean,
  color: string,
  options?: any
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (name: string) => {
  const [layout, setLayout] = useState<LayoutModel[]>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await DashboardService.getLayout(name)
        setLayout(response.data)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error)
      }
    }

    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return layout
}
