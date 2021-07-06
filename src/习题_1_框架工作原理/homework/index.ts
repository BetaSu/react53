import {TChoice} from '../../helper/types';

/** 
 * 今天的课后作业是选择题
 * 做完了执行 npm test 1 批改作业
*/

export default [
  // 这是个习题例子
  () => {
    // 问题：卡颂帅么？
    // 1. 帅
    // 2. 不帅
    return 1; /** return你的答案 */
  },
  () => {
    // 问题：React的更新流程分为render阶段和commit阶段
    // 1. 对
    // 2. 错
    return /** 你的答案 */; 
  },
  () => {
    // 问题：更新流程是如何触发的？
    // 1. ReactDOM.render、this.setState、useState的setter...
    // 2. 通过定时器定时触发
    return /** 你的答案 */; 
  },
  () => {
    // 问题：什么是副作用？
    // 1. DOM的增/删/改（属性更新）
    // 2. 吃了感冒药下午瞌睡
    return /** 你的答案 */; 
  },
  () => {
    // 问题：render阶段的作用？
    // 1. 找出本次更新产生的副作用
    // 2. 执行本次更新的副作用
    return /** 你的答案 */; 
  },
  () => {
    // 问题：commit阶段的作用？
    // 1. 找出本次更新产生的副作用
    // 2. 执行本次更新的副作用
    return /** 你的答案 */; 
  }
] as TChoice[];
