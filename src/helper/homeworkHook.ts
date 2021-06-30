import {log, getType2Use, exist} from './utils';
let hackErrorEmit = false;

type THomeworkCB = (...args: any) => void;

function checkHack() {
  if (!window.hackReactDOM && !hackErrorEmit) {
    hackErrorEmit = true;
    console.warn('[错误]请重新执行 yarn start（或 npm start）');
  }
}

function bindHook(lession: number, hookType: string, callback: THomeworkCB) {
  type2Hook[lession] = type2Hook[lession] || {};
  type2Hook[lession][hookType] = callback;
}

const type2Hook: {[lession: string]: {[lessionType: string]: THomeworkCB}} = {};

window.homeworkHook = function(type, ...args) {
  checkHack();
  const lessionMap = type2Hook[window.lession];
  const cb = lessionMap ? lessionMap[type] : undefined;
  cb && cb(...args);
}


bindHook(1, 'workLoopSync', () => {
  log('#727205', '开始深度优先遍历');
})
bindHook(1, 'beginWork', (_, wip) => {
  log('green', '递的组件', getType2Use(wip));
})
bindHook(1, 'completeWork', (_, wip) => {
  log('red', '归的组件', getType2Use(wip));
})

bindHook(2, 'workLoopSync', () => {
  log('#727205', '开始深度优先遍历');
})
bindHook(2, 'dispatchAction', (wip) => {
  const who = getType2Use(wip);
  log('blue', `${who}触发了更新，创建Update：`, wip.memoizedState.queue.pending);
})

bindHook(2, 'mountState', (hook, wip) => {
  const who = getType2Use(wip);
  log('blue', `${who}的useState根据初始state计算出新state：`, hook.memoizedState);
})

bindHook(2, 'updateReducer', (hook, wip) => {
  const who = getType2Use(wip);
  log('blue', `${who}的useState根据Update计算出新state：`, hook.memoizedState);
})

bindHook(2, 'beginWork', (_, wip) => {
  log('green', '递的组件', getType2Use(wip));

  const update = wip.memoizedState?.queue?.pending;
  exist(update) && log('#04048a', '发现Update：', update);

  const pendingProps = wip.pendingProps;
  exist(pendingProps) && Object.keys(pendingProps).length && log('brown', 'props', pendingProps);
})

bindHook(2, 'completeWork', (_, wip) => {
  log('red', '归的组件', getType2Use(wip));

  // const state = wip.memoizedState?.queue?.pending;
  // exist(state) && log('#024202', 'state', state);

  // const memoizedProps = wip.memoizedProps;
  // exist(memoizedProps) && log('#850505', 'props', memoizedProps);
})

export {};