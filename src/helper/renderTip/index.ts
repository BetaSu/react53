
import './style.css';

interface TTipData {
  lession: number;
  title: string;
  mainUrl: string;
}

export default ({title, lession, mainUrl}: TTipData): void => {
  document.title = title;
  window.lession = lession;
  const ele = document.createElement('section');
  ele.className = 'tip-zone';
  ele.innerHTML = `
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown">
      <label id="nav-open" for="nav-input"><span></span></label>
      <label for="nav-input" id="nav-title">点我查看课程${lession}的信息</label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <div id="nav-content">
        <ol>
          <li><p>课程学习：请打开调试面板配合<a href="${mainUrl}" target="_blank">本节课程教材</a>调试示例</p></li>
          <li><p>课后作业：课程学习完记得打开课程_${lession}目录下的homework目录做课后作业哦~</p></li>
          <li>
            <p>与同学讨论：我是卡颂，关注公众号，后台回复“53”，我会拉你进React53学习群</p>
            <div class="qrcode-magician"></div>
          </li>
        </ol>
      </div>
    </div>
  `;
  const target = document.querySelector('#root');
  target?.parentNode?.insertBefore(ele, target);
}