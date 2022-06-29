export interface ChartDataModel {
  title: string;
  privilege: string;
  type: string;
  variation: string;
  colorPalette: string;
  queries: QueryDataModel[];
  chartOptions: any;
}

export interface QueryDataModel {
  color: string;
  query: string;
}

export const CHART_TYPES = [
  {
    text: 'Bar',
    value: 'bar',
    variations: [
      {
        text: 'Horizontal',
        value: 'horizontal',
        maxQueries: 1
      },
      {
        text: 'Vertical',
        value: 'vertical',
        maxQueries: 1
      },
    ]
  },
  {
    text: 'Graph',
    value: 'graph',
    variations: [
      {
        text: 'Line',
        value: 'line',
        maxQueries: 4
      },
      {
        text: 'Area',
        value: 'area',
        maxQueries: 4
      },
      {
        text: 'Bar',
        value: 'bar',
        maxQueries: 2
      }
    ]
  },
  {
    text: 'Pie',
    value: 'pie',
    variations: [
      {
        text: 'Pie',
        value: 'pie',
        maxQueries: 1
      },
      {
        text: 'Donut',
        value: 'doughnut',
        maxQueries: 1
      }
    ]
  },
  {
    text: 'Gauge',
    value: 'gauge',
    variations: [
      {
        text: '-',
        value: 'gauge',
        maxQueries: 2
      }
    ]
  },
  {
    text: 'Scatter',
    value: 'scatter',
    variations: [
      {
        text: '-',
        value: 'scatter',
        maxQueries: 1
      }
    ]
  },
  {
    text: 'Summary',
    value: 'summary',
    variations: [
      {
        text: 'With chart',
        value: 'with-chart',
        maxQueries: 4
      },
      {
        text: 'Without chart',
        value: 'without-chart',
        maxQueries: 1
      },
      {
        text: 'Percentage',
        value: 'percentage',
        maxQueries: 1
      }
    ]
  },
  {
    text: 'Table',
    value: 'table',
    variations: [
      {
        text: '-',
        value: 'table',
        maxQueries: 1
      }
    ]
  },
];

export const CHART_PALETTES = [
  {
    text: 'Default',
    value: 'default',
    colorsPreview: [
      '#ffb74d',
      '#a1887e',
      '#65b5f5',
      '#b9dcd7',
      '#ffddb8',
      '#e0bae6',
    ]
  },
  {
    text: 'Dark',
    value: 'dark',
    colorsPreview: [
      '#598bff',
      '#2ce69b',
      '#42aaff',
      '#ffc94d',
      '#ff708d',
      '#795548'
    ]
  },
  {
    text: 'Fuse',
    value: 'fuse',
    colorsPreview: [
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#00a9f4',
      '#3f51b5',
    ]
  },
  {
    text: 'Orange',
    value: 'orange',
    colorsPreview: [
      '#f45a38',
      '#ffb802',
      '#ffde2e',
      '#ff896e',
      '#c62300',
      '#b58200',
    ]
  },
  {
    text: 'Blue',
    value: 'blue',
    colorsPreview: [
      '#027bd4',
      '#49b3ff',
      '#4adeff',
      '#7ba2ff',
      '#eeab02',
      '#ffd602',
    ]
  },
  {
    text: 'Vibrant',
    value: 'vibrant',
    colorsPreview: [
      '#ed4b4a',
      '#3acf49',
      '#0b92fb',
      '#ff7e36',
      '#c06dff',
      '#ffc043',
    ]
  },
  {
    text: 'Pastel',
    value: 'pastel',
    colorsPreview: [
      '#ef5323',
      '#002b49',
      '#73cee1',
      '#ec008b',
      '#cc24df',
      '#ffae34',
    ]
  },
  {
    text: 'Traditional 1',
    value: 'traditional1',
    colorsPreview: [
      '#CCDC3B',
      '#005770',
      '#EE524E',
      '#00ADC7',
      '#FFC903',
      '#5482B7',
    ]
  },
  {
    text: 'Traditional 2',
    value: 'traditional2',
    colorsPreview: [
      '#BF6CFE',
      '#EC4A49',
      '#3BCF49',
      '#0A92FB',
      '#FD7D37',
      '#0182C1',
    ]
  },
  {
    text: 'Traditional 3',
    value: 'traditional3',
    colorsPreview: [
      '#C80B7C',
      '#E5C703',
      '#7BC906',
      '#00ADD0',
      '#6F3271',
      '#0182C1',
    ]
  },
  {
    text: 'Modern 1',
    value: 'modern1',
    colorsPreview: [
      '#8dd4e0',
      '#f3d99a',
      '#7fddc3',
      '#f5b0c0',
      '#4c72fd',
      '#344a88',
    ]
  },
  {
    text: 'Modern 2',
    value: 'modern2',
    colorsPreview: [
      '#e8914f',
      '#8ecae8',
      '#47777f',
      '#989ca0',
      '#c2b1a9',
      '#a6adba',
    ]
  }
];
