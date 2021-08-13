import React from 'react'
import ReactDOM from 'react-dom'
import App from './demo/App'
import '../helper/homeworkHook';
import renderTip from '../helper/renderTip';

renderTip({
  lession: 3, 
  title: 'React53',
  mainUrl: 'https://react53.iamkasong.com/chart3.html'
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
