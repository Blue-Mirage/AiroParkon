// src/data/productsData.js
import ppimg from '../assets/Products/pitpark/2dp/2DP-one.jpg';
import spimg from '../assets/Products/stackpark/2ds/2DS-one.jpg';
import puzpimg from '../assets/Products/puzzlepark/2hc/2HC-one.jpg';
import vpimg from '../assets/Products/vertipark/puzzle/VPP-one.jpg';
import hpimg from '../assets/Products/hidepark/2ih/2ih-one.jpg';
import apimg from '../assets/Products/assistpark/steer/steer-one.jpg';

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
  {
    id: 4,
    name: 'VertiPark',
    route: '/vertipark',
    image: vpimg, // Replace with your image path
    subProducts: [
      { id: 1, name: 'VertiPark 5 Levels', description: '' },
      { id: 2, name: 'VertiPark 10 Levels', description: '' },
    ],
  },
  {
    id: 5,
    name: 'HidePark',
    route: 'hidepark',
    image: hpimg, // Replace with your image path
    subProducts: [
      { id: 1, name: 'HidePark Residential', description: '' },
      { id: 2, name: 'HidePark Commercial', description: '' },
    ],
  },
  {
    id: 6,
    name: 'AssistPark',
    route: '/assistpark',
    image: apimg, // Replace with your image path
    subProducts: [
      { id: 1, name: 'AssistPark Basic', description: '' },
      { id: 2, name: 'AssistPark Pro', description: '' },
    ],
  },
];