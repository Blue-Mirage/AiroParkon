// src/data/subProductsData.js
import TwoDP1 from '../assets/Products/pitpark/2dp/2DP-one.jpg';
import ThreeDP1 from '../assets/Products/pitpark/3dp/3DP-one.jpg';
import FourDP1 from '../assets/Products/pitpark/4dp/4DP-one.jpg';
import TwoIP1 from '../assets/Products/pitpark/2ip/2IP-one.jpg';
import ThreeRP1 from '../assets/Products/pitpark/3rp/3RP-one.jpg';
import ThreeIP1 from '../assets/Products/pitpark/3ip/3IP-one.jpg';


export const pitParkSubProducts = [
  {
    id: '2IP',
    name: '2IP',
    description: `2IP uses 2 interconnected platforms ... (copied from site)`,
    image: TwoIP1,
    specs: {
      loadingCapacity: '2000 Kgs per car',
      drive: 'Hydraulic',
      // Add more specs as needed
    },
    route: '/pitpark/2ip',
  },
  {
    id: '2DP',
    name: '2DP',
    description: `2DP uses 2 interconnected platforms similar to 2IP...`,
    image: TwoDP1,
    specs: {
      loadingCapacity: '2000 Kgs per car',
      drive: 'Hydraulic',
      // Add more specs as needed
    },
    route: '/pitpark/2dp',
  },
  {
    id: '3DP',
    name: '3DP',
    description: `3DP uses 3 platforms, 2 of which...`,
    image: ThreeDP1,
    specs: {
      loadingCapacity: '2000 Kgs per car',
      drive: 'Hydraulic',
      // Add more specs as needed
    },
    route: '/pitpark/3dp',
  },
  {
    id: '4DP',
    name: '4DP',
    description: `4DP uses 4 platforms driven...`,
    image: FourDP1,
    specs: {
      loadingCapacity: '2000 Kgs per car',
      drive: 'Hydraulic',
      // Add more specs as needed
    },
    route: '/pitpark/4dp',
  },
  {
    id: '3IP',
    name: '3IP',
    description: `3IP uses 3 interconnected platforms...`,
    image: ThreeIP1,
    specs: {
      loadingCapacity: '2000 Kgs per car',
      drive: 'Hydraulic',
      // Add more specs as needed
    },
    route: '/pitpark/3ip',
  },
  {
    id: '3RP',
    name: '3RP',
    description: `3RP uses 3 platforms, 2 of which...`,
    image: ThreeRP1,
    specs: {
      loadingCapacity: '2000 Kgs per car',
      drive: 'Hydraulic',
      // Add more specs as needed
    },
    route: '/pitpark/3rp',
  },
];
