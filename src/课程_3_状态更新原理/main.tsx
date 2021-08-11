import React from 'react'
import ReactDOM from 'react-dom'
import App from './demo/App'
import '../helper/homeworkHook';
import renderTip from '../helper/renderTip';

renderTip({
  lession: 3, 
  title: 'React53',
  mainUrl: 'https://www.baidu.com'
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
