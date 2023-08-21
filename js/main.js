// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


$('.cover-container-slide').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効にする
  fade: true,
  dots: true,
});



// タブ
$('#smarttab').smartTab({
  enableUrlHash: false, // タブidにもとづいたURLハッシュの付与を無効
  autoAdjustHeight: false
});



$('.animate__animated').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

$('.right').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});


// アコーディオンのタイトルがクリックされたら
$('.question-content-question').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // 矢印のアイコンを選択
  var icon = $(this).find('.accordion-icon i');


  // .accordion-contentを表示・非表示
  content.slideToggle();

  // 矢印のアイコンを回転させる
  icon.toggleClass('rotate');
  
});