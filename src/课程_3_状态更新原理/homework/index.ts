import {TChoice} from '../../helper/types';
/** 
 * 今天的课后作业是选择题和应用题
 * 做完了执行 npm test 3 批改作业
*/

export const homework = [
  () => {
    // 问题：调用this.setState触发更新后，只有被更新组件及其子孙组件会执行遍历流程？
    // 1. 对
    // 2. 错
    return /** 你的答案 */; 
  },
  () => {
    // 问题：state的最新值需要计算么？
    // 1. 不需要，this.setState(x)中x就是最新值，直接使用就行
    // 2. 需要，state需要根据Update计算得出
    return /** 你的答案 */; 
  },
  () => {
    // 问题：被更新的state是在什么时候被计算的？
    // 1. 触发更新那一刻
    // 2. 遍历流程进行到state所在组件对应fiber时
    return /** 你的答案 */; 
  },
  () => {
    // 问题：为什么在触发更新后，有些组件没有render？
    // 1. 虽然更新是全局概念，但是React内置了遍历时的优化策略，以及提供了性能优化API（如：PureComponent），命中这些策略的组件不会render
    // 2. 因为更新是局部概念，只有触发更新的组件及其子孙组件才会render
    return /** 你的答案 */; 
  },
  () => {
    // 问题：一次更新，只有触发更新的组件对应DOM会变化？
    // 1. 是，因为这次更新只在该组件对应fiber上创建了Update
    // 2. 不一定，如果其他组件对应fiber上也存在Update并计算出新的state，可能也会产生对应DOM变化
    return /** 你的答案 */; 
  }
] as TChoice[];


/**
 * 应用题，请实现向fiberNode插入update的方法insertUpdate
 * 其中update是一条环状链表，满足：
      新插入的update是链表中最后一个update
      fiberNode.updateQueue指向最后一个update（即新插入这个）
      最后一个update下一个（即.next）指向第一个update
  插入update后函数返回fiberNode
  如：   插入第一个update：u1
  此时： fiberNode.updateQueue = u1
        u1.next = u1
        插入第二个update：u2
        fiberNode.updateQueue = u2
        u2.next = u1; u1.next = u2;
        插入第三个update：u3
        fiberNode.updateQueue = u3
        u3.next = u1; u1.next = u2; u2.next = u3;
 */
export interface TUpdate {
  action: any;
  next?: TUpdate;
}
export interface TFiberNode {
  updateQueue?: TUpdate;
}

export function insertUpdate(fiberNode: TFiberNode, action: any): TFiberNode {
  const update: TUpdate = {
    action,
    next: undefined
  };

  // 请开始你的表演

  return fiberNode;
}





// 参考答案
// export function insertUpdate(fiberNode: TFiberNode, action: any): TFiberNode {
//   const update: TUpdate = {
//     action,
//     next: undefined
//   };

//   const lastUpdate = fiberNode.updateQueue;

//   if (!lastUpdate) {
//     // fiberNode上还不存在update，插入的update与自己形成环状链表
//     update.next = update;
//   } else {
//     // fiberNode上存在update
//     // 新插入的作为最后一个，指向第一个
//     update.next = lastUpdate.next;
//     // 之前的最后一个指向新插入这个
//     lastUpdate.next = update;
//   }
//   // updateQueue指向新插入这个
//   fiberNode.updateQueue = update;

//   return fiberNode;
// }