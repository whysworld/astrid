export const SIDEBAR_WIDTH = 180; //left panel width
export const HEADER_HEIGHT = 40; //left panel width

//fetch data every given interval
export const DATA_FETCH_INTERVAL = [
    { label: 'Now', value: 0 },
    { label: '5s', value: 5000 },
    { label: '10s', value: 10000 },
    { label: '30s', value: 30000 },
    { label: '1m', value: 60000 },
    { label: '5m', value: 300000 },
    { label: '15m', value: 900000 },
    { label: '30m', value: 1800000 },
    { label: '1h', value: 3600000 },
    { label: '2h', value: 7200000 },
    { label: '1d', value: 86400000 }
];
//fetch data in given duration
// export const DATA_FETCH_DURATION = [
//     { label: 'Today', short: 'today', start: 0, end: 0, step: 0 },
//     { label: 'Last 5 minutes', short: '5m', start: 0, end: 0, step: 5 },
//     { label: 'Last 15 minutes', short: '15m', start: 0, end: 0, step: 15 },
//     { label: 'Last 30 minutes', short: '30m', start: 0, end: 0, step: 30 },
//     { label: 'Last 1 hour', short: '1h', start: 0, end: 0, step: 60 },
//     { label: 'Last 3 hours', short: '3h', start: 0, end: 0, step: 180 },
//     { label: 'Last 6 hours', short: '6h', start: 0, end: 0, step: 360 },
//     { label: 'Last 12 hours', short: '12h', start: 0, end: 0, step: 720 },
//     { label: 'Last 24 hours', short: '24h', start: 0, end: 0, step: 1440 },
//     { label: 'Last 2 days', short: '2d', start: 0, end: 0, step: 2880 }
// ];
export const DATA_FETCH_DURATION = [
    { label: 'Today', value: 0 },
    { label: 'Last 5 minutes', value: 5 },
    { label: 'Last 15 minutes', value: 15 },
    { label: 'Last 30 minutes', value: 30 },
    { label: 'Last 1 hour', value: 60 },
    { label: 'Last 3 hours', value: 180 },
    { label: 'Last 6 hours', value: 360 },
    { label: 'Last 12 hours', value: 720 },
    { label: 'Last 24 hours', value: 1440 },
    { label: 'Last 2 days', value: 2880 }
];