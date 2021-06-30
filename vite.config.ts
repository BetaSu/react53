import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import constant from './config/constant';

const curLession = process.env[constant.LESSION_ENV];

if (!curLession) {
  console.error('错误的课程目录：', curLession);
}

// https://vitejs.dev/config/
export default defineConfig({
  root: `./src/${curLession}`,
  plugins: [reactRefresh()]
})
