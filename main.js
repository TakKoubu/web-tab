/**
 * selectorに該当するタブを表示する関数
 */
const showTab = (selector) => {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);

  /* 1. タブの選択状態のリセット */

  // いったん、すべての.tabs-menu > divからactiveクラスを削除する
  $('.tabs-menu > div').removeClass('active');

  // いったん、すべての.tabs-content > divを非表示にする
  $('.tabs-content > div').hide();

  /* 2. 選択されたタブの表示 */

  // .tabs-menu divのうち、selectorに該当するものにだけactiveクラスを付ける
  $(`.tabs-menu-${selector}`)
    .parent('div')
    .addClass('active');

  // .tabs-content > divのうち、selectorに該当するものだけを表示する
  $(selector).show();
};

// タブがクリックされたらコンテンツを表示
$('.tabs-menu div').on('click', (e) => {

  // idの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu div）を表す
  let selector = $(e.target).attr('id');
  
  switch (selector) {
  case 'tab-menu-a':
    selector = '#tabs-a';
  case 'tab-menu-b':
    selector = '#tabs-b';
  case 'tab-menu-c':
    selector = '#tabs-c';
  } 
  
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('#tabs-a');