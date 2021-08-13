interface TWIP {
  type: any;
  tag: number;
  memoizedProps: any;
}

export const getType2Use = (wip: TWIP): string => {
  const {type, tag, memoizedProps} = wip;
  switch (tag) {
    case 3:
      return '根组件';
    case 2:
      return `${type.name}（函数组件或类组件）`;
    case 1:
      return `${type.name}（类组件）`;
    case 0:
      return `${type.name}（函数组件）`;
    case 6:
      return `${memoizedProps}（文本组件）`
    default:
      return type;
  }
}

export const log = (color: string, label: string, message?: any) => {
	console.log(
    `%c ${label} %c`,
    `background-color: ${color}; color: #FFFFFF`,
    `background-color: inherit; color: inherit`
  , exist(message) ? message : '');
}

export const exist = (data: any) => data !== undefined && data !== null;

export const getReadableAnswer = (count: number, answer: number) => {
  return `第${count + 1}题，答案：${answer}`;
}

export const createCounter = (initialCount = 0) => {
  let count = initialCount;
  return {
    add() {
      count++;
    },
    reset() {
      count = initialCount;
    },
    get() {
      return count;
    }
  }
}