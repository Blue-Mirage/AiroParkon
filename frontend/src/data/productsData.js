// src/data/productsData.js
import ppimg from '../assets/Products/pitpark/2dp/2DP-one.jpg';
import spimg from '../assets/Products/stackpark/2ds/2DS-one.jpg';
import puzpimg from '../assets/Products/puzzlepark/2hc/2HC-one.jpg';

export const products = [
  {
    id: 1,
    name: 'PitPark',
    route: '/pitpark',
    image: ppimg, // Replace with your image path
    subProducts: [
      { id: 1, name: 'PitPark 2 Levels', description: '' },
      { id: 2, name: 'PitPark 3 Levels', description: '' },
    ],
  },
  {
    id: 2,
    name: 'StackPark',
    route: '/stackpark',
    image: spimg, // Replace with your image path
    subProducts: [
      { id: 1, name: 'StackPark 2 Levels', description: '' },
      { id: 2, name: 'StackPark 3 Levels', description: '' },
    ],
  },
  {
    id: 3,
    name: 'PuzzlePark',
    route: '/puzzlepark',
    image: puzpimg, // Replace with your image path
    subProducts: [
      { id: 1, name: 'PuzzlePark Standard', description: '' },
      { id: 2, name: 'PuzzlePark Enhanced', description: '' },
    ],
  },
];