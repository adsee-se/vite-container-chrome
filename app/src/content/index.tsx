import { createRoot } from 'react-dom/client';
import { TitleCopy } from './TitleCopy';

const element = document.createElement('div');

const targetTitle = document.querySelector('span.Label.Label--secondary.v-align-middle.mr-1.d-none.d-md-block');
// 下記取得アイデア
// const targetTitle = document.getElementById('summary-val');
// Title完成後Lambdaの取得を考慮
// const targetLambda = document.querySelector('span.Label.Label--secondary.v-align-middle.mr-1.d-none.d-md-block');
// Bodyは全体取得後、1行ごとの<p>タグからテキストのみ取得すること
// const targetBody = document.querySelector('div.Box-body.d-flex.flex-column');

if (targetTitle && targetTitle.parentNode) {
  targetTitle.parentNode.insertBefore(element, targetTitle.nextSibling);
  // Jira動作確認用
  // document.body.appendChild(element);
}

const root = createRoot(element);
root.render(
  <TitleCopy />
  // <LambdaCopy />
  // <BodyCopy />
);
