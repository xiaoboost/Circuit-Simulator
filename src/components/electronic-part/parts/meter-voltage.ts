import { ElectronicPrototype, PartType  } from './constant';

const part: ElectronicPrototype = {
    pre: 'VM',
    type: PartType.VoltageMeter,
    introduction: '电压表',
    txtLBias: 24,
    padding: [1, 1, 1, 1],
    margin: [1, 0, 1, 0],
    params: [],
    points: [
        {
            position: [0, -40],
            direction: [0, -1],
        },
        {
            position: [0, 40],
            direction: [0, 1],
        },
    ],
    shape: [
        {
            name: 'circle',
            attribute: {
                cx: '0', cy: '0', r: '19', class: 'fill-white',
            },
        },
        {
            name: 'path',
            attribute: {
                d: 'M0,-40V-20M0,20V40M0,-16V-8M-4,-12H4M-4,12H4',
            },
        },
        {
            'name': 'path',
            'non-rotate': true,
            'attribute': {
                d: 'M-7,-6L0,7L7,-6',
            },
        },
        {
            name: 'rect',
            attribute: {
                x: '-20', y: '-30', width: '40', height: '60', class: 'focus-transparent',
            },
        },
    ],
};

export default part;
