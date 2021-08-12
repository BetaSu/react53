import * as React from "react";
import {reconciler, choiceList} from '.';
import {getReadableAnswer} from '../../helper/utils';

test('课程二选择题批改作业', () => {
  const answer = [2, 1, 2].map((rightAnswer, i) => getReadableAnswer(i, rightAnswer));
  choiceList.forEach((cur, i) => {
    const curAnswer = getReadableAnswer(i, cur());
    const rightAnswer = answer[i];
    expect(curAnswer).toBe(rightAnswer);
  })
});

test('深度优先遍历', () => {
  
  const jsx = (
    <div>
      <p></p>
      <span></span>
      <ul>
        <li><p></p></li>
        <li><p></p></li>
      </ul>
    </div>
  )

  const result = reconciler(jsx);
  const answer = ['div', 'p', 'span', 'ul', 'li', 'p', 'li', 'p'];
  expect(result).toEqual(answer);
});

