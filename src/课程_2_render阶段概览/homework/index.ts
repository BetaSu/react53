import React, { FC, ReactNode } from 'react';
import {TChoice} from '../../helper/types';


/** 
 * 今天的课后作业是选择题和应用题
 * 做完了执行 npm test 2 批改作业
*/

export const choiceList = [
  () => {
    // 问题：render阶段的遍历顺序是？ 
    // 1. 广度优先遍历
    // 2. 深度优先遍历
    return /** 你的答案 */; 
  },
  () => {
    // 问题：对于如下JSX结构：
    /** 
     *  <div>
     *    <p><span>hello</span></p>
     *    <ul>
     *      <li></li>
     *    </ul>
     *  </div>
    */
    // p生成对应fiberNode后，下一个要生成fiberNode的节点是？
    // 1. span
    // 2. ul
    return /** 你的答案 */; 
  },
  () => {
    // 问题：对于如下JSX结构：
    /** 
     *  <div>
     *    <p><span>hello</span></p>
     *    <ul>
     *      <li></li>
     *    </ul>
     *  </div>
    */
    // <span>hello</span>生成对应fiberNode后，下一个要生成fiberNode的节点是？
    // 1. div
    // 2. ul
    return /** 你的答案 */; 
  }
] as TChoice[];


/**
 * 应用题 使用深度优先遍历实现一个遍历器
 * 接收一段JSX结构作为参数，按与React同样的“递”与“归”流程，将遍历到的element.type push到数组中，并返回数组
 * 如： 传入：
    <div>
      <span></span>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
返回： ['div', 'span', 'ul', 'li', 'li']
 * @param {JSX} Cpn
 * 编写完成后执行 npm test 2 跑用例
 */
export const reconciler = (jsx: React.ReactElement): string[] => {
  // 请开始你的表演
  return [];
}




// 参考答案
// export const reconciler = (jsx: React.ReactElement) => {
//   const result: string[] = [];
  
//   if (!jsx) {
//     return result;
//   }

//   const stack = [jsx];

//   while (stack.length) {
//     const node = stack.pop();
//     if (typeof node?.type === 'string') {
//       result.push(node.type);
//     }
    
//     const children = node?.props.children;
//     if (children) {
//       if (Array.isArray(children)) {
//         for (let i = children.length - 1; i >= 0; i--) {
//           stack.push(children[i]);
//         }
//       } else {
//         stack.push(children);
//       }
//     }
//   }

//   return result;
// }
