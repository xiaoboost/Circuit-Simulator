import { ElectronicPrototype, PartType, UnitType  } from './constant';
import { numberParser } from 'src/lib/number';
import { isNumber } from 'src/lib/utils';

const data: ElectronicPrototype = {
    pre: 'R',
    type: PartType.Resistance,
    introduction: '电阻器',
    txtLBias: 14,
    padding: [0, 1, 0, 1],
    margin: [1, 1, 1, 1],
    params: [
        {
            label: '阻值',
            unit: UnitType.Ohm,
            default: '10k',
            vision: true,
            ranks: ['G', 'M', 'k', ''],
        },
    ],
    points: [
        {
            position: [-40, 0],
            direction: [-1, 0],
        },
        {
            position: [40, 0],
            direction: [1, 0],
        },
    ],
    shape: [
        {
            name: 'path',
            attribute: {
                d: 'M-40,0H-24L-20,-9L-12,9L-4,-9L4,9L12,-9L20,9L24,0H40',
            },
        },
        {
            name: 'rect',
            attribute: {
                x: '-30', y: '-13', width: '60', height: '26', class: 'focus-transparent',
            },
        },
    ],
    constant: ({ F, H }, params, branch) => {
        const param = params[0];
        const val = isNumber(param) ? param : numberParser(param);

        F.set(branch, branch, -1);
        H.set(branch, branch, val);
    },
};

export default data;
