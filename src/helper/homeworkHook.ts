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
  const cb = lessionMap?.[type];
  cb?.(...args);
}

bindHook(1, 'workLoopSync', () => {
  log('#727205', '开始render阶段，计算本次更新带来的副作用');
})
bindHook(1, 'commitRoot', () => {
  log('#04048a', '开始commit阶段，执行副作用');
})
bindHook(1, 'commitPlacement', (fiber) => {
  log('brown', `副作用：${getType2Use(fiber)}插入`, fiber);
})
bindHook(1, 'commitWork', (fiber) => {
  log('brown', `副作用：${getType2Use(fiber)}更新属性`, fiber);
})
bindHook(1, 'commitDeletion', (fiber) => {
  log('brown', `副作用：${getType2Use(fiber)}删除DOM`, fiber);
})

bindHook(2, 'workLoopSync', () => {
  log('#727205', '开始深度优先遍历（render阶段开始）');
})
bindHook(2, 'beginWork', (_, wip) => {
  log('green', '递的组件', getType2Use(wip));
})
bindHook(2, 'completeWork', (_, wip) => {
  log('red', '归的组件', getType2Use(wip));
})

bindHook(3, 'workLoopSync', () => {
  log('#727205', '开始深度优先遍历');
})
bindHook(3, 'dispatchAction', (wip) => {
  const who = getType2Use(wip);
  log('blue', `${who}触发了更新，创建Update：`, wip.memoizedState.queue.pending);
})

bindHook(3, 'mountState', (hook, wip) => {
  const who = getType2Use(wip);
  log('blue', `${who}的useState根据初始state计算出新state：`, hook.memoizedState);
})

bindHook(3, 'updateReducer', (hook, wip) => {
  const who = getType2Use(wip);
  log('blue', `${who}的useState根据Update计算出新state：`, hook.memoizedState);
})

bindHook(3, 'beginWork', (_, wip) => {
  log('green', '递的组件', getType2Use(wip));

  const update = wip.memoizedState?.queue?.pending;
  exist(update) && log('#04048a', `在${getType2Use(wip)}中发现Update：`, update);

  const pendingProps = wip.pendingProps;
  exist(pendingProps) && Object.keys(pendingProps).length && log('brown', 'props', pendingProps);
})

bindHook(3, 'completeWork', (_, wip) => {
  log('red', '归的组件', getType2Use(wip));

  // const state = wip.memoizedState?.queue?.pending;
  // exist(state) && log('#024202', 'state', state);

  // const memoizedProps = wip.memoizedProps;
  // exist(memoizedProps) && log('#850505', 'props', memoizedProps);
})

bindHook(4, 'renderWithHooks', (wip) => {
  const cpn = getType2Use(wip);
  log('red', `${cpn}开始render`, wip);
})
bindHook(4, 'mountState', (hook) => {
  log('green', `执行useState，数据为：`, hook);
})
bindHook(4, 'updateState', (hook) => {
  log('green', `执行useState，数据为：`, hook);
})
bindHook(4, 'updateReducer', (hook) => {
  log('green', `执行useReducer，数据为：`, hook);
})
bindHook(4, 'mountReducer', (hook) => {
  log('green', `执行useReducer，数据为：`, hook);
})
bindHook(4, 'mountEffect', (hook) => {
  log('green', `执行useEffect，数据为：`, hook);
})    
bindHook(4, 'updateEffect', (hook) => {
  log('green', `执行useEffect，数据为：`, hook);
})
bindHook(4, 'mountRef', (hook) => {
  log('green', `执行useRef，数据为：`, hook);
}) 
bindHook(4, 'updateRef', (hook) => {
  log('green', `执行useRef，数据为：`, hook);
})
bindHook(4, 'mountCallback', (hook) => {
  log('green', `执行useCallback，数据为：`, hook);
})
bindHook(4, 'updateCallback', (hook) => {
  log('green', `执行useCallback，数据为：`, hook);
})
bindHook(4, 'mountMemo', (hook) => {
  log('green', `执行useMemo，数据为：`, hook);
})
bindHook(4, 'updateMemo', (hook) => {
  log('green', `执行useMemo，数据为：`, hook);
})

export {};