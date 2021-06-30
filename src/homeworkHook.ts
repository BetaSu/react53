/**
 * 同学，你不需要知道这个模块是干嘛的
 * 如果你一定想知道的话，他是用来在ReactDOM源码内打log的
 */
let hackErrorEmit = false;

type THomeworkCB = (...args: any) => void;

function log(color: string, label: string, message: any) {
	console.log(
    `%c ${label} %c`,
    `background-color: ${color}; color: #FFFFFF`,
    `background-color: inherit; color: inherit`
  , message);
}

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


bindHook(1, 'beginWork', (_, wip) => {
  log('green', '递的节点', wip.type);
})

bindHook(1, 'completeWork', (_, wip) => {
  log('red', '归的节点', wip.type);
})

export {};