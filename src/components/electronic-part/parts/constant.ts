import PartComponent from '../component';

/** 器件类型枚举常量 */
export const enum PartType {
    /** 电阻 */
    Resistance,
    /** 电感 */
    Inductance,
    /** 电容 */
    Capacitor,
    /** 电流测量 */
    CurrentMeter,
    /** 电压测量 */
    VoltageMeter,
    /** 运算放大器 */
    OperationalAmplifier,
    /** 二极管 */
    Diode,
    /** npn 三极管 */
    TransistorNPN,
    /** 交流电压源 */
    AcVoltageSource,
    /** 直流电流源 */
    DcCurrentSource,
    /** 直流电压源 */
    DcVoltageSource,
    /** 参考地 */
    ReferenceGround,
}

/** 器件每项参数的说明 */
export interface ParmasDescription {
    /**
     * 该参数的文字描述
     * @type {string}
     */
    readonly label: string;
    /**
     * 该参数的物理单位
     * @type {string}
     */
    readonly unit: string;
    /**
     * 该参数是否对外显示
     * @type {boolean}
     */
    readonly vision: boolean;
    /**
     * 该参数的初始默认值
     * @type {string}
     */
    readonly default: string;
}

/** 器件每个节点的描述 */
export interface PointDescription {
    /**
     * 该节点距离器件中心点的相对位置
     * @type {[number, number]}
     */
    readonly position: [number, number];
    /**
     * 该节点对外延伸的方向
     * @type {[number, number]}
     */
    readonly direction: [number, number];
}

/** 外形元素描述 */
export interface ShapeDescription {
    /**
     * DOM 元素名称
     * @type {string}
     */
    readonly name: string;
    /**
     * DOM 元素的所有属性
     * @type {{ [x: string]: string }}
     */
    readonly attribute: { [x: string]: string };
    /**
     * 某些元素可能不可旋转
     * @type {true}
     */
    readonly 'non-rotate'?: true;
}

/** 迭代方程输入参数的类型 */
export const enum IterativeInputType {
    /** 电压 */
    Voltage,
    /** 电流 */
    Current,
}

/** 器件迭代方程生成器 */
export type IterativeEquation = (this: PartComponent, timeInterval: number) => {
    /** 输入参数描述 */
    input: {
        type: IterativeInputType;
        place: string;
    }[];
    /** 输出值 */
    output: number[];
    /** 迭代方程 */
    process(...args: any[]): number[];
};

/** 复杂器件的内部拆分 */
export interface ElectronicApart {
    /** 内部器件列表 */
    parts: {
        type: PartType;
        id: string;
    }[];
    /**
     * 拆分器件的连接
     *  - 每个元组即表示内部的一个节点
     */
    connect: string[][];
    /**
     * 外部引脚对内的映射
     *  - 数组下标表示是当前器件的第几个引脚
     *  - 子数组表示连接至此引脚的内部器件引脚
     */
    interface: string[][];
}

/** 器件原型数据类型 */
export interface ElectronicPrototype {
    /** 器件编号的前置标记 */
    readonly pre: string;
    /** 器件种类 */
    readonly type: PartType;
    /** 器件简述 */
    readonly introduction: string;
    /** 周围文字距离器件中心点的偏移量 */
    readonly txtLBias: number;
    /** 器件内边框范围（上、右、下、左） */
    readonly padding: [number, number, number, number];
    /** 器件外边框范围（上、右、下、左） */
    readonly margin: [number, number, number, number];
    /** 每项参数的描述 */
    readonly params: ParmasDescription[];
    /** 器件每个节点的描述 */
    readonly points: PointDescription[];
    /** 器件外形元素的描述 */
    readonly shape: ShapeDescription[];
    /** 迭代方程描述 */
    readonly iterative?: IterativeEquation;
    /** 器件内部拆分描述 */
    readonly apart?: ElectronicApart;
}
