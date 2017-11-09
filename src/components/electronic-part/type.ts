import Vue from 'vue';
import { Point } from 'src/lib/point';
import { Matrix } from 'src/lib/matrix';

/** 器件数据接口 */
export interface PartData {
    id: string;
    type: string;
    rotate: Matrix;
    position: Point;
    params: string[];
    connect: string[];
}

/** 器件引脚描述接口 */
export interface PointClass {
    position: Point;
    direction: Point;
    class: 'part-point-close' | 'part-point-open';
}

/** 器件内外边距 */
export interface PartMargin {
    inner: [[number, number], [number, number]];
    outter: [[number, number], [number, number]];
}

/** 器件组件对外接口 */
export interface PartComponent extends Vue {
    /** 器件 ID 编号 */
    readonly id: string;
    /** 器件类型 */
    readonly type: string;
    /** 器件参数 */
    readonly params: string[];
    /** 器件引脚描述 */
    readonly points: PointClass[];
    /** 器件内外边距 */
    readonly margin: PartMargin;

    /** 器件引脚连接 */
    connect: Array<false | string>;
    /** 器件旋转矩阵 */
    rotate: Matrix;
    /** 器件几何中心相对图纸原点的坐标 */
    position: Point;

    /** 更新器件参数至 vuex */
    update(): void;
    /** 在图纸中标记器件 */
    markSign(): void;
    /** 删除图纸中器件的标记 */
    deleteSign(): void;
    /** 当前器件能否处于 position 位置 */
    isCover(position?: Point): boolean;
}
