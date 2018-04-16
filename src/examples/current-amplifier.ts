import { CircuitStorage } from './types';

const storage: CircuitStorage = {
    data: [
        {
            type: 'dc_voltage_source',
            id: 'V_1',
            position: [180, 280],
            rotate: [[0, 1], [-1, 0]],
            params: ['10'],
        },
        {
            type: 'resistance',
            id: 'R_1',
            position: [300, 280],
            rotate: [[1, 0], [0, 1]],
            params: ['10k'],
        },
        {
            type: 'transistor_npn',
            id: 'Q_1',
            position: [480, 280],
            rotate: [[1, 0], [0, 1]],
            params: ['40', '26', '0.6', '1'],
        },
        {
            type: 'reference_ground',
            id: 'GND_1',
            position: [100, 280],
            rotate: [[0, 1], [-1, 0]],
        },
        {
            type: 'resistance',
            id: 'R_2',
            position: [500, 400],
            rotate: [[0, 1], [-1, 0]],
            params: ['100'],
        },
        {
            type: 'line',
            way: [[120, 280], [140, 280]],
        },
        {
            type: 'line',
            way: [[220, 280], [240, 280]],
        },
        {
            type: 'line',
            way: [[500, 360], [500, 320]],
        },
        {
            type: 'line',
            way: [[420, 280], [460, 280]],
        },
        {
            type: 'line',
            way: [[380, 280], [340, 280]],
        },
        {
            type: 'current_meter',
            id: 'I_in',
            position: [400, 280],
            rotate: [[1, 0], [0, 1]],
        },
        {
            type: 'current_meter',
            id: 'I_ap',
            position: [340, 200],
            rotate: [[1, 0], [0, 1]],
        },
        {
            type: 'line',
            way: [[360, 200], [500, 200], [500, 240]],
        },
        {
            type: 'line',
            way: [[320, 200], [240, 200], [240, 280]],
        },
        {
            type: 'line',
            way: [[240, 280], [260, 280]],
        },
        {
            type: 'reference_ground',
            id: 'GND_2',
            position: [500, 480],
            rotate: [[1, 0], [0, 1]],
        },
        {
            type: 'line',
            way: [[500, 440], [500, 460]],
        },
    ],
};

export default storage;
