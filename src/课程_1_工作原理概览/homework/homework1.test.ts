import homework from '.';
import {getReadableAnswer} from '../../helper/utils';


test('课程一选择题批改作业', () => {
  const answer = [1, 1, 1, 1, 1, 2].map((rightAnswer, i) => getReadableAnswer(i, rightAnswer));
  homework.forEach((cur, i) => {
    const curAnswer = getReadableAnswer(i, cur());
    const rightAnswer = answer[i];
    expect(curAnswer).toBe(rightAnswer);
  })
});