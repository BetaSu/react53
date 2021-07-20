import {TChoice} from '../../helper/types';

/** 
 * 今天的课后作业是选择题和应用题
 * 做完了执行 npm test 2 批改作业
*/

export const choiceList = [
  // 这是个习题使用例子
  () => {
    // 问题：卡颂的公众号是？
    // 1. 魔术师卡颂
    // 2. 魔法师卡颂
    return 1; /** return你的答案 */
  },
  () => {
    // 问题：render阶段的遍历顺序是？ 
    // 1. 广度优先遍历
    // 2. 深度优先遍历
    return /** 你的答案 */; 
  },
  () => {
    // 问题：render阶段mount时
    // 1.  通过
    // 2. 通过定时器定时触发
    return /** 你的答案 */; 
  },
  
] as TChoice[]   ;


/**
 * 应用题 使用深度优先遍历实现一个遍历器，参数1为入口组件，遍历到的每个组件执行参数2（回调函数）
 * @param {React.ReactElement} Cpn
 * @param {(jsx: React.ReactElement) => void} callback
 * 编写完成后执行 npm test 2 跑用例
 */
export const reconciler = (Cpn: React.ReactElement): void => {

}