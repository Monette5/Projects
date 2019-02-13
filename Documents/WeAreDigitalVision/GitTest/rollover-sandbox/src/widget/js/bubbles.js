$( document ).ready(function() {
$('.button--bubble').each(function() {
  var $circlesTopLeft = $(this).parent().find('.circle.top-left');
  // var $circlesTopRight = $(this).parent().find('.circle.top-right');
  var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
  // var $circlesBottomLeft = $(this).parent().find('.circle.bottom-left');

  var tl1 = new TimelineLite();
  var tl2 = new TimelineLite();

  var btTl = new TimelineLite({ paused: true });

  tl1.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
  tl1.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
  tl1.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
  tl1.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
  tl1.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
  tl1.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
  tl1.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

  // tl1.to($circlesTopRight, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
  // tl1.to($circlesTopRight.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
  // tl1.to($circlesTopRight.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
  // tl1.to($circlesTopRight.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
  // tl1.to($circlesTopRight.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
  // tl1.to($circlesTopRight.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
  // tl1.to($circlesTopRight.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

  var tlBt1 = new TimelineLite();
  var tlBt2 = new TimelineLite();

  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
  // tlBt1.set($circlesTopRight, { x: 0, y: 0, rotation: -45 });
  tlBt1.add(tl1);

  tl2.set($circlesBottomRight, { x: 0, y: 0 });
  tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
  tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
  tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
  tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
  tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
  tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
  tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

  // tl2.set($circlesBottomLeft, { x: 0, y: 0 });
  // tl2.to($circlesBottomLeft, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
  // tl2.to($circlesBottomLeft.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
  // tl2.to($circlesBottomLeft.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
  // tl2.to($circlesBottomLeft.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
  // tl2.to($circlesBottomLeft.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
  // tl2.to($circlesBottomLeft.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
  // tl2.to($circlesBottomLeft.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
  // tlBt2.set($circlesBottomLeft, { x: 0, y: 0, rotation: 45 });
  tlBt2.add(tl2);

  btTl.add(tlBt1);
  btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
  btTl.add(tlBt2, 0.2);
  btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

  btTl.timeScale(2.6);

  $(this).on('click mouseover', function () {
    btTl.restart();
  });
  $('button--bubble').on('touchstart', function () {
    btTl.restart();
    // var $bubbleItem = $(this),
    //     $bubbleWrapper = $('> .bubbles-grid', $bubbleItem);
    //     var bubbleItemPos = $bubbleItem.position();
    //     $bubbleWrapper.css({
    //  top: bubbleItemPos.top,
    //  left: bubbleItemPos + Math.round($bubbleItem.outerWidth() * 0.75),
    //  bottom: bubbleItemPos + Math.round($bubbleItem.outerWidth() * 0.75)
   });

  });

});
