import chalk from 'chalk';

import constant from './constant';

const name = 'vite-plugin-showLessionTitle';
const parseLessionNum = name => +name.split('_')[1];
const lession2Url = [
  null,
  'https://www.baidu.com'
]

export default function plugin() {
  let init = false;
  return {
    name,
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!init) {
          init = true;
          const curLession = process.env[constant.LESSION_ENV];
          const num = parseLessionNum(curLession);
          const url = lession2Url[num];
          if (!url) {
            console.log(chalk.red(`未找到${curLession}的课件地址`));
            return;
          }
          console.log(chalk.green(`${curLession}的课件地址：`), url);
        }
        next();
      })
    }
  }
}