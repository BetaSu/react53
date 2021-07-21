import {TChoice} from '../../helper/types';
/** 
 * 今天的课后作业是选择题
 * 做完了执行 npm test 3 批改作业
*/

export default [
  // 这是个选择题例子
  () => {
    // 问题：卡颂帅么？
    // 1. 帅
    // 2. 不帅
    return 1; /** return你的答案 */
  },
  () => {
    // 问题：调用this.setState触发更新后，只有被更新组件及其子孙组件会执行遍历流程？
    // 1. 对
    // 2. 错
    return 1/** 你的答案 */; 
  },
  () => {
    // 问题：state的最新值需要计算么？
    // 1. 不需要，this.setState(x)中x就是最新值，直接使用就行
    // 2. 需要，state需要根据Update计算得出
    return 2/** 你的答案 */; 
  },
  () => {
    // 问题：被更新的state是在什么时候被计算的？
    // 1. 触发更新那一刻
    // 2. 遍历流程进行到state所在组件对应fiber时
    return 2/** 你的答案 */; 
  },
  () => {
    // 问题：为什么在触发更新后，有些组件没有render？
    // 1. 虽然更新是全局概念，但是React内置了遍历时的优化策略，以及提供了性能优化API（如：PureComponent），命中这些策略的组件不会render
    // 2. 因为更新是局部概念，只有触发更新的组件及其子孙组件才会render
    return 2/** 你的答案 */; 
  },
  () => {
    // 问题：一次更新，只有触发更新的组件对应DOM会变化？
    // 1. 是，因为这次更新只在该组件对应fiber上创建了Update
    // 2. 不一定，如果其他组件对应fiber上也存在Update并计算出新的state，可能也会产生对应DOM变化
    return 2/** 你的答案 */; 
  }
] as TChoice[];
