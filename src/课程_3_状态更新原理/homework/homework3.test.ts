import {homework, insertUpdate, TUpdate, TFiberNode} from '.';
import {getReadableAnswer} from '../../helper/utils';

test('课程3选择题批改作业', () => {
  const answer = [2, 2, 2, 1, 2].map((rightAnswer, i) => getReadableAnswer(i, rightAnswer));
  homework.forEach((cur, i) => {
    const curAnswer = getReadableAnswer(i, cur());
    const rightAnswer = answer[i];
    expect(curAnswer).toBe(rightAnswer);
  })
});

test('插入update成功且数据结构正确且形成环状链表', () => {
  const fiberNode: TFiberNode = {
    updateQueue: undefined
  }
  const firstAction = 0;
  insertUpdate(fiberNode, firstAction);
  const {updateQueue} = fiberNode;
  let curUpdate = updateQueue as TUpdate;
  expect(curUpdate).toBeDefined();
  expect(curUpdate.action).toBe(firstAction);
  expect(curUpdate.next).toBe(curUpdate);
})

test('插入2个update形成正确的环状链表', () => {
  const fiberNode: TFiberNode = {
    updateQueue: undefined
  }
  for (let i = 0; i < 2; i++) {
    insertUpdate(fiberNode, i);
  }
  const {updateQueue} = fiberNode;
  let curUpdate = (updateQueue as TUpdate).next as TUpdate;
  let curRightAction = 0;
  const firstAction = 0;
  do {
    expect(curUpdate.action).toBe(curRightAction++);
    curUpdate = curUpdate.next as TUpdate;
  } while (curUpdate.action !== firstAction)
})

test('插入多个update形成正确的环状链表', () => {
  const fiberNode: TFiberNode = {
    updateQueue: undefined
  }
  for (let i = 0; i < 10; i++) {
    insertUpdate(fiberNode, i);
  }
  const {updateQueue} = fiberNode;
  let curUpdate = (updateQueue as TUpdate).next as TUpdate;
  let curRightAction = 0;
  const firstAction = 0;
  do {
    expect(curUpdate.action).toBe(curRightAction++);
    curUpdate = curUpdate.next as TUpdate;
  } while (curUpdate.action !== firstAction)
})