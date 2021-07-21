import React from 'react';
import {reconciler, choiceList} from '.';
import {getReadableAnswer} from '../../helper/utils';

test('课程二批改作业', () => {
  const answer = [1, 1, 1, 1, 1, 2].map((rightAnswer, i) => getReadableAnswer(i, rightAnswer));
  choiceList.forEach((cur, i) => {
    const curAnswer = getReadableAnswer(i, cur());
    const rightAnswer = answer[i];
    expect(curAnswer).toBe(rightAnswer);
  })
});

test('简单的函数组件', () => {
  
  function App() {
    return (
      <div>
      </div>
    )
  }

  const traverseStr = reconciler(App).join(',');
  const answer = 'App,div,div,App';
  expect(traverseStr).toBe(answer);
});

test('包含兄弟节点的函数组件', () => {
  
  function App() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }

  const traverseStr = reconciler(App).join(',');
  const answer = 'App,ul,li,li,li,li,li,li,ul,App';
  expect(traverseStr).toBe(answer);
});

test('简单的原生组件', () => {
  const div = <div></div>;

  const traverseStr = reconciler(div).join(',');
  const answer = 'div,div';
  expect(traverseStr).toBe(answer);
});

test('父原生组件，子函数组件', () => {
  function App() {
    return (
      <p></p>
    )
  }
  const div = (
    <div>
      <App/>
    </div>
  );

  const traverseStr = reconciler(div).join(',');
  const answer = 'div,App,p,p,App,div';
  expect(traverseStr).toBe(answer);
});

test('父函数组件，子函数组件', () => {
  function Child() {
    return <p></p>;
  }
  function App() {
    return (
      <Child/>
    )
  }

  const traverseStr = reconciler(App).join(',');
  const answer = 'div,App,p,p,App,div';
  expect(traverseStr).toBe(answer);
});