"use strict";

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要
$('#g-navi li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 0;
  $('body,html').animate({
    scrollTop: pos
  }, 1000);
  return false;
}); //ハンバーガーメニュー

$(function () {
  $('.js-hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.js-spnav').addClass('active');
    } else {
      $('.js-spnav').removeClass('active');
    }
  });
}); //アニメーション
//①slideIn

jQuery(function ($) {
  function animationSetting() {
    $('.animation').each(function () {
      var obj = $(this),
          objH = $(this).outerHeight(),
          scrolled = $(window).scrollTop(),
          viewed = scrolled + $(window).height(),
          objTop = $(this).offset().top,
          objBottom = objTop + objH,
          excnum = 0.4; //もしオブジェクトが画面内にあれば

      if (objTop + objH * excnum <= viewed && objBottom - objH * excnum >= scrolled) {
        //オブジェクトにclassを付与(アニメーションの種類と起動)
        obj.addClass(obj.data('animation')).addClass('animated');
      }
    });
  } //読み込んだした時点で一度起動


  animationSetting(); //スクロールする度に起動

  $(window).on('scroll', function () {
    animationSetting();
  });
}); //②一文字ずつのfadeIn

$('.visual .line').children().addBack().contents().each(function () {
  if (this.nodeType == 3) {
    var $this = $(this);
    $this.replaceWith($this.text().replace(/(\S)/g, '<span class="letter">$&</span>'));
  }
});
$('.visual .letter').each(function () {
  var letters = $(this).closest('.txt').find('.letter');
  var index = $(letters).index(this);
  var time = index * 0.05; // ずらす間隔

  $(this).css('animation-delay', time + 's');
});
$(function () {
  /* separate text */
  $('.visual .line').children().addBack().contents().each(function () {
    if (this.nodeType == 3) {
      var $this = $(this);
      $this.replaceWith($this.text().replace(/(\S)/g, '<span class="letter">$&</span>'));
    }
  });
  /* animation delay */

  $('.visual .letter').each(function () {
    var letters = $(this).closest('.txt').find('.letter');
    var index = $(letters).index(this);
    var time = index * 0.05;
    $(this).css('animation-delay', time + 's');
  });
});
$(window).on('load', function () {
  $('.visual').addClass('is-visible');
}); //③左から順にfadeIn

var delaySpeed = 300;
$(window).on("load scroll", function () {
  $(".fade_trigger1 .fade_image_effect").each(function (i) {
    var element = $(".fade_trigger1").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll > element - windowHeight + windowHeight / 5) {
      $(this).delay(i * delaySpeed).queue(function () {
        $(this).addClass("active");
      });
    }
  });
}); //③左から順にfadeIn

$(function () {
  $(window).on('load scroll', function () {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight * 0.8;
    $(".show").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({
          opacity: 1,
          transform: 'translate(0, 0)'
        });
      }
    });
  });
}); //④矢印が拡大縮小

$(window).scroll(function () {
  $('.arrow').each(function () {
    var scroll = $(window).scrollTop();
    var position = $(this).offset().top;
    var windowH = $(window).height();

    if (scroll > position - windowH) {
      $(this).addClass('active');
    }
  });
});
$(window).scroll(function () {
  $('.arrow-btn').each(function () {
    var scroll = $(window).scrollTop();
    var position = $(this).offset().top;
    var windowH = $(window).height();

    if (scroll > position - windowH) {
      $(this).addClass('active');
    }
  });
});