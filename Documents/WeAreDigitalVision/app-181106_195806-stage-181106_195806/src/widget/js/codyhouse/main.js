jQuery(document).ready(function ($) {

    //cache some jQuery objects
    var modalTrigger = $('.cd-modal-trigger'),
        transitionLayer = $('.cd-transition-layer'),
        transitionBackground = transitionLayer.children(),
        modalWindow = $('.cd-modal');

    var frameProportion = 1.78, //png frame aspect ratio
        resize = false;

    $('#codyhouse').on('classChange', function () {

        if (settings.transition === "glitch-transition" || settings.transition === "extinguisher-transition" || settings.transition === "ink-transition" || settings.transitiontype === "codyhouse3" || settings.transitiontype === "codyhouse4" || settings.transitiontype === "codyhouse5" || settings.transitiontype === "codyhouse6") {
            var frames = 25;
            var transitionBackground = $('.bg-layer');
        } else {
            var frames = 38;

            $('.svg-layer').remove();
            $('.cd-transition-layer').append('<img class="svg-layer" src="src/widget/stylesheets/codyhouse/img/' + settings.transition + '.svg" alt="" />');

            var transitionBackground = $('.svg-layer');
            $('.svg-layer').remove();
            $('.cd-transition-layer').append('<img class="svg-layer" src="src/widget/stylesheets/codyhouse/img/' + settings.transition + '.svg" alt="" />');

            var transitionBackground = $('.svg-layer');

            setTimeout(function () {
                if (transitionBackground) {
                    inlineSVG.init({
                        svgSelector: 'img.svg-layer',
                        initClass: '',
                    });
                }
            }, 1000);
        }

        function setLayerDimensions(frameRate) {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                layerHeight, layerWidth;

            if (windowWidth / windowHeight > frameProportion) {
                layerWidth = windowWidth;
                layerHeight = layerWidth / frameProportion;
            } else {
                layerHeight = windowHeight * 1.2;
                layerWidth = layerHeight * frameProportion;
            }

            transitionBackground.css({
                'width': layerWidth * frameRate + 'px',
                //'height': layerHeight+'px',
            });

            resize = false;
        }

        setLayerDimensions(frames);
    });

    //set transitionBackground dimentions
    $(window).on('resize', function () {
        if (!resize) {
            resize = true;

            if (settings.transition === "glitch-transition" || settings.transition === "extinguisher-transition" || settings.transition === "ink-transition") {
                var frames = 25;
                var transitionBackground = $('.bg-layer');
            } else {
                var frames = 38;
                var transitionBackground = $('.svg-layer');
            }
            setLayerDimensions(frames);
        }

    });

    //open modal window
    modalTrigger.on('click', function (event) {
        event.preventDefault();
        var modalId = $(event.target).attr('href');
        transitionLayer.addClass('visible opening');
        var delay = ($('.no-cssanimations').length > 0) ? 0 : 800;
       
        setTimeout(function () {
            modalWindow.filter('#face5').addClass('visible');
            transitionLayer.removeClass('opening');
            zoomStartstate();

        }, delay);

        // Text animations
        if (settings.textAnimationOn && settings.textAnimationOn != "none") {
            $('#text5').each(function () {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });

            $('#text5').addClass(settings.textAnimationOn);
            $('#text5 .letter, #subtext5, #btntext1').css('opacity', 0);

            setTimeout(function () {
                var animation = anime.timeline({ loop: false })

                switch (settings.textAnimationOn) {
                    case "grow":
                        animation.add({
                            targets: '#text5 .letter',
                            scale: [0.3, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "zoom-in":
                        animation.add({
                            targets: '#text5 .letter',
                            scale: [4, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 950,
                            delay: function (el, i) {
                                return 70 * i;
                            }
                        });
                        break;
                    case "fade-in":
                        animation.add({
                            targets: '#text5 .letter',
                            opacity: [0, 1],
                            easing: "easeInOutQuad",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "mexican-wave":
                        $('#text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                        $('#text5 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        $('.letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                        animation.add({
                            targets: '#text5 .letter',
                            translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateZ: 0,
                            duration: 750,
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "rotate-up":
                        $('#text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                        $('#text5 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        $('.letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                        animation.add({
                            targets: '#text5 .letter',
                            translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateX: [(settings.myFont0.value.split('/')[1].split(' ')[0] / 2) / 100 * 55, 0],
                            translateZ: 0,
                            rotateZ: [180, 0],
                            duration: 750,
                            easing: "easeOutExpo",
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "fold-in":
                        $('#text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                        $('#text5 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        $('.letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                        animation.add({
                            targets: '#text5 .letter',
                            rotateY: [-90, 0],
                            duration: 1300,
                            delay: function (el, i) {
                                return 45 * i;
                            }
                        });
                        break;
                }

                animation.add({
                    targets: '#subtext5, #btntext1',
                    opacity: [0, 1],
                    duration: 200,
                    easing: "linear",
                    delay: 0
                });
            }, settings.textAnimationDelayOn);
        }
    });

    //close modal window
    modalWindow.on('click', '.modal-close', function (event) {
       
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow.removeClass('visible');

		zoomEndstate();
        transitionLayer.on('webkitAnimationEnd oanimationend mozAnimationEnd msAnimationEnd animationend', function () {
            zoomEndstate();
            transitionLayer.removeClass('closing opening visible');
            transitionLayer.children().off('webkitAnimationEnd oanimationend mozAnimationEnd msAnimationEnd animationend');
        });

        // Text animations
        if (settings.textAnimationOff && settings.textAnimationOff != "none") {
            $('#text4').each(function () {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });

            $('#text4').addClass(settings.textAnimationOff);
            $('#text4 .letter, #subtext4, .cd-modal-trigger').css('opacity', 0);

            setTimeout(function () {
                var animation = anime.timeline({ loop: false })

                switch (settings.textAnimationOff) {
                    case "grow":
                        animation.add({
                            targets: '#text4 .letter',
                            scale: [0.3, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "zoom-in":
                        animation.add({
                            targets: '#text4 .letter',
                            scale: [4, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 950,
                            delay: function (el, i) {
                                return 70 * i;
                            }
                        });
                        break;
                    case "fade-in":
                        animation.add({
                            targets: '#text4 .letter',
                            opacity: [0, 1],
                            easing: "easeInOutQuad",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "mexican-wave":
                        $('#text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                        $('#text4 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        $('.letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                        animation.add({
                            targets: '#text4 .letter',
                            translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateZ: 0,
                            duration: 750,
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "rotate-up":
                        $('#text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                        $('#text4 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        $('.letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                        animation.add({
                            targets: '#text4 .letter',
                            translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateX: [(settings.myFont0.value.split('/')[1].split(' ')[0] / 2) / 100 * 55, 0],
                            translateZ: 0,
                            rotateZ: [180, 0],
                            duration: 750,
                            easing: "easeOutExpo",
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "fold-in":
                        $('#text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                        $('#text4 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });

                        $('.letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                        animation.add({
                            targets: '#text4 .letter',
                            rotateY: [-90, 0],
                            duration: 1300,
                            delay: function (el, i) {
                                return 45 * i;
                            }
                        });
                        break;
                }

                animation.add({
                    targets: '#subtext4, .cd-modal-trigger',
                    opacity: [0, 1],
                    duration: 200,
                    easing: "linear",
                    delay: 0
                });
            }, settings.textAnimationDelayOff);
        }
    });
	
	
	  /******End State Zoom*******/
    function zoomEndstate(){
        $('#codyhouse-image1').removeClass('imagezoom');
        /*****Add Zoom if zoom presents in start state image *****/
        if(settings.imageZoomOff ==true || settings.imageZoomOff =="true") {
            console.log(settings.imageZoomOn);
            $('#codyhouse-image0').addClass('imagezoom');
        } else {
            $('#codyhouse-image0').removeClass('imagezoom');
        }
    }
     /******Start state Zoom*******/
    function zoomStartstate(){
         /*****Add Zoom if zoom presents in start state image *****/
         $('#codyhouse-image0').removeClass('imagezoom');
          /*****Add Zoom if zoom presents in end state image *****/
            if(settings.imageZoomOn==true || settings.imageZoomOn=="true") {
                $('#codyhouse-image1').addClass('imagezoom');
            } else {
                $('#codyhouse-image1').removeClass('imagezoom');
         }
    }


    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if (windowWidth / windowHeight > frameProportion) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion;
        } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth * frames + 'px',
            'height': layerHeight + 'px',
        });

        resize = false;
    }

    if (settings.transitiontype === "codrops") {
        const DOM = {};
        DOM.intro = document.querySelector('.content--intro');
        DOM.shape = DOM.intro.querySelector('svg.shape');
        DOM.path = DOM.shape.querySelector('path');
        // Set the SVG transform origin.
        DOM.shape.style.transformOrigin = '50% 0%';

        // codrops
        $('.codrops-modal-trigger').click(function () {

            if (settings.transition == 'waveup-transition') {
                anime({
                    targets: DOM.intro,
                    duration: 1100,
                    easing: 'easeInOutSine',
                    translateY: '-200vh'
                });

                anime({
                    targets: DOM.shape,
                    scaleY: [
                        { value: [0.8, 1.8], duration: 550, easing: 'easeInQuad' },
                        { value: 1, duration: 550, easing: 'easeOutQuad' }
                    ]
                });

                anime({
                    targets: DOM.path,
                    duration: 1100,
                    easing: 'easeOutQuad',
                    d: DOM.path.getAttribute('pathdata:id')
                });
            } else if (settings.transition == 'paintup-transition') {
                anime({
                    targets: DOM.intro,
                    duration: 1500,
                    easing: 'easeInOutSine',
                    translateY: '-200vh'
                });

                anime({
                    targets: DOM.path,
                    duration: 1500,
                    easing: 'easeInOutSine',
                    d: DOM.path.getAttribute('pathdata:id')
                });
            } else if (settings.transition == 'gumup-transition') {
                anime({
                    targets: DOM.intro,
                    duration: 1600,
                    easing: 'easeInOutCubic',
                    translateY: '-200vh'
                });

                anime({
                    targets: DOM.shape,
                    easing: 'easeInOutCubic',
                    scaleY: [
                        { value: [0, 1], duration: 800 },
                        { value: 0, duration: 1200, easing: 'easeOutElastic', elasticity: 700 }
                    ]
                });

                anime({
                    targets: DOM.path,
                    duration: 800,
                    easing: 'easeInOutQuad',
                    d: DOM.path.getAttribute('pathdata:id')
                });

                anime({
                    targets: [DOM.intro.querySelector('.content__inner'), DOM.shape],
                    duration: 1300,
                    easing: 'linear',
                });
            } else if (settings.transition == 'pixelup-transition') {
                anime({
                    targets: DOM.intro,
                    translateY: {
                        value: '-200vh',
                        delay: 100,
                        duration: 2000,
                        easing: 'easeInOutQuad'
                    }
                });

                anime({
                    targets: DOM.path,
                    duration: 1200,
                    easing: 'linear',
                    d: DOM.path.getAttribute('pathdata:id')
                });
            }

            // Text animations
            if (settings.textAnimationOn && settings.textAnimationOn != "none") {
                $('#' + settings.transitiontype + ' #text5').each(function () {
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });

                $('#' + settings.transitiontype + ' #text5').addClass(settings.textAnimationOn);
                $('#' + settings.transitiontype + ' #text5 .letter,#' + settings.transitiontype + ' #subtext5,#' + settings.transitiontype + ' #btntext1').css('opacity', 0);

                setTimeout(function () {
                    var animation = anime.timeline({ loop: false })

                    switch (settings.textAnimationOn) {
                        case "grow":
                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text5 .letter',
                                scale: [0.3, 1],
                                opacity: [0, 1],
                                translateZ: 0,
                                easing: "easeOutExpo",
                                duration: 600,
                                delay: function (el, i) {
                                    return 70 * (i + 1)
                                }
                            });
                            break;
                        case "zoom-in":
                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text5 .letter',
                                scale: [4, 1],
                                opacity: [0, 1],
                                translateZ: 0,
                                easing: "easeOutExpo",
                                duration: 950,
                                delay: function (el, i) {
                                    return 70 * i;
                                }
                            });
                            break;
                        case "fade-in":
                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text5 .letter',
                                opacity: [0, 1],
                                easing: "easeInOutQuad",
                                duration: 600,
                                delay: function (el, i) {
                                    return 70 * (i + 1)
                                }
                            });
                            break;
                        case "mexican-wave":
                            $('#' + settings.transitiontype + ' #text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                            $('#' + settings.transitiontype + ' #text5 .letters').each(function () {
                                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                            });

                            $('#' + settings.transitiontype + ' #text5 .letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text5 .letter',
                                translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                                translateZ: 0,
                                duration: 750,
                                delay: function (el, i) {
                                    return 50 * i;
                                }
                            });
                            break;
                        case "rotate-up":
                            $('#' + settings.transitiontype + ' #text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                            $('#' + settings.transitiontype + ' #text5 .letters').each(function () {
                                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                            });

                            $('#' + settings.transitiontype + ' .letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text5 .letter',
                                translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                                translateX: [(settings.myFont0.value.split('/')[1].split(' ')[0] / 2) / 100 * 55, 0],
                                translateZ: 0,
                                rotateZ: [180, 0],
                                duration: 750,
                                easing: "easeOutExpo",
                                delay: function (el, i) {
                                    return 50 * i;
                                }
                            });
                            break;
                        case "fold-in":
                            $('#' + settings.transitiontype + ' #text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                            $('#' + settings.transitiontype + ' #text5 .letters').each(function () {
                                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                            });

                            $('#' + settings.transitiontype + ' #text5 .letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                            animation.add({
                                targets: '#' + settings.transitiontype + ' .letter',
                                rotateY: [-90, 0],
                                duration: 1300,
                                delay: function (el, i) {
                                    return 45 * i;
                                }
                            });
                            break;
                    }

                    animation.add({
                        targets: '#' + settings.transitiontype + ' #subtext5,#' + settings.transitiontype + ' #btntext1',
                        opacity: [0, 1],
                        duration: 200,
                        easing: "linear",
                        delay: 0
                    });
                }, settings.textAnimationDelayOn);
            }
        });

        $('.codrops-close').click(function () {
            if (settings.transition == 'waveup-transition') {
                anime({
                    targets: DOM.intro,
                    duration: 1100,
                    easing: 'easeInOutSine',
                    translateY: '0vh'
                });

                anime({
                    targets: DOM.shape,
                    scaleY: [
                        { value: 1, duration: 550, easing: 'easeInQuad' },
                        { value: [0.8, 1.8], duration: 550, easing: 'easeOutQuad' }
                    ]
                });

                anime({
                    targets: DOM.path,
                    duration: 1100,
                    easing: 'easeInQuad',
                    d: DOM.path.getAttribute('pathdata:id')
                });
            } else if (settings.transition == 'paintup-transition') {
                anime({
                    targets: DOM.intro,
                    duration: 1500,
                    easing: 'easeInOutSine',
                    translateY: '0vh'
                });

                anime({
                    targets: DOM.path,
                    duration: 1500,
                    easing: 'easeInOutSine',
                    d: DOM.path.getAttribute('pathdata:id')
                });
            } else if (settings.transition == 'gumup-transition') {
                anime({
                    targets: DOM.intro,
                    duration: 1600,
                    easing: 'easeInOutCubic',
                    translateY: '0vh'
                });

                anime({
                    targets: DOM.shape,
                    easing: 'easeInOutCubic',
                    scaleY: [
                        { value: [1, 0], duration: 800 },
                        { value: 1, duration: 1200, easing: 'easeOutElastic', elasticity: 700 }
                    ]
                });

                anime({
                    targets: DOM.path,
                    duration: 800,
                    easing: 'easeInOutQuad',
                    d: DOM.path.getAttribute('pathdata:id')
                });

                anime({
                    targets: [DOM.intro.querySelector('.content__inner'), DOM.shape],
                    duration: 1300,
                    easing: 'linear',
                });
            } else if (settings.transition == 'pixelup-transition') {
                anime({
                    targets: DOM.intro,
                    translateY: {
                        value: '0vh',
                        delay: 100,
                        duration: 2000,
                        easing: 'easeInOutQuad'
                    }
                });

                anime({
                    targets: DOM.path,
                    duration: 1200,
                    easing: 'linear',
                    d: DOM.path.getAttribute('pathdata:id')
                });
            }
            // Text animations
            if (settings.textAnimationOff && settings.textAnimationOff != "none") {
                $('#' + settings.transitiontype + ' #text4').each(function () {
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });

                $('#' + settings.transitiontype + ' #text4').addClass(settings.textAnimationOff);
                $('#' + settings.transitiontype + ' #text4 .letter,#' + settings.transitiontype + ' #subtext4,#' + settings.transitiontype + ' .cd-modal-trigger').css('opacity', 0);

                setTimeout(function () {
                    var animation = anime.timeline({ loop: false })

                    switch (settings.textAnimationOff) {
                        case "grow":
                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text4 .letter',
                                scale: [0.3, 1],
                                opacity: [0, 1],
                                translateZ: 0,
                                easing: "easeOutExpo",
                                duration: 600,
                                delay: function (el, i) {
                                    return 70 * (i + 1)
                                }
                            });
                            break;
                        case "zoom-in":
                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text4 .letter',
                                scale: [4, 1],
                                opacity: [0, 1],
                                translateZ: 0,
                                easing: "easeOutExpo",
                                duration: 950,
                                delay: function (el, i) {
                                    return 70 * i;
                                }
                            });
                            break;
                        case "fade-in":
                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text4 .letter',
                                opacity: [0, 1],
                                easing: "easeInOutQuad",
                                duration: 600,
                                delay: function (el, i) {
                                    return 70 * (i + 1)
                                }
                            });
                            break;
                        case "mexican-wave":
                            $('#' + settings.transitiontype + ' #text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                            $('#' + settings.transitiontype + ' #text4 .letters').each(function () {
                                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                            });

                            $('#' + settings.transitiontype + ' .letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text4 .letter',
                                translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                                translateZ: 0,
                                duration: 750,
                                delay: function (el, i) {
                                    return 50 * i;
                                }
                            });
                            break;
                        case "rotate-up":
                            $('#' + settings.transitiontype + ' #text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                            $('#' + settings.transitiontype + ' #text4 .letters').each(function () {
                                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                            });

                            $('#' + settings.transitiontype + ' .letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text4 .letter',
                                translateY: [settings.myFont0.value.split('/')[1].split(' ')[0], 0],
                                translateX: [(settings.myFont0.value.split('/')[1].split(' ')[0] / 2) / 100 * 55, 0],
                                translateZ: 0,
                                rotateZ: [180, 0],
                                duration: 750,
                                easing: "easeOutExpo",
                                delay: function (el, i) {
                                    return 50 * i;
                                }
                            });
                            break;
                        case "fold-in":
                            $('#' + settings.transitiontype + ' #text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                            $('#' + settings.transitiontype + ' #text4 .letters').each(function () {
                                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                            });

                            $('#' + settings.transitiontype + ' #text4 .letter').css({ 'line-height': settings.myFont0.value.split('/')[1].split(' ')[0] });

                            animation.add({
                                targets: '#' + settings.transitiontype + ' #text4 .letter',
                                rotateY: [-90, 0],
                                duration: 1300,
                                delay: function (el, i) {
                                    return 45 * i;
                                }
                            });
                            break;
                    }

                    animation.add({
                        targets: '#' + settings.transitiontype + ' #subtext4, .cd-modal-trigger',
                        opacity: [0, 1],
                        duration: 200,
                        easing: "linear",
                        delay: 0
                    });
                }, settings.textAnimationDelayOff);
            }
        });
    }

    var stuck=false;
    var on=false;
    var cur_hover = false;

    $('body').mouseenter(function(){
        if(settings.transitiontype=="trad"){
			
            getTextAnimEndClassic(settings,anime); 
		/* 	if(settings.allowSubtextBtn!=true || settings.allowSubtextBtn!='true'){
				settings.textbtna = false;
			}	 */		
        }
        console.log(settings.textbtna);
        if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) {
            Hidebtn();
            $(this).mouseenter(enterPreview);
			if(getParameterByName('viewMode')== "editor" || getParameterByName('viewMode')== "preview"){
				enableLink(); 
			}
			
        }else{
			if(getParameterByName('viewMode')== "editor" || getParameterByName('viewMode')== "preview"){
				enableLink(); 
			}
            Showbtn();
        }
    });
	
	/****************Enable Link***********/ 
   function enableLink(){
        if(settings.endStateLink) {
            
            if(settings.transitiontype=="codrops"){
                if(settings.linkData!= undefined && settings.linkData!= '') {
                    $('#codrops #face5-wrap').addClass('target-link');
                    $('html').on('click','.target-link',function(){ 
                        triggerlink();
                    });
                }
            }
            if(settings.transitiontype=="trad"){
                if(settings.linkData!= undefined && settings.linkData!= '') {
                    $("#face1 .text-card-context-inner").addClass('target').addClass('target-link');

                    $('html').on('click','.target-link',function(){ 
                        triggerlink();
                    });
                }
            }
			
			if(settings.transitiontype=="codyhouse" || settings.transitiontype=="ap1"){
                if(settings.linkData!= undefined && settings.linkData!= '') {
                    $("#face5-wrap").addClass('target').addClass('target-link');
                    $('html').on('click','.target-link',function(){ 
                        triggerlink();
                    });
                }
            }
        } 
   }

   /****************Enable Link***********/
	
	function triggerlink(){ 
        if(settings.linkData) {
          Wix.navigateTo(settings.linkData);
        }
    }

    function enterPreview(){
        if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) { 
            cur_hover = true;
            var transition='gooey-transition', rollover = false;
            if (settings.transition && settings.transition!='') {
                    transition=settings.transition;
            } else {
                    transition='gooey-transition';
            }
            rollover = rollovers[transition];
            on=true;
            if (!stuck) {
                rollover.animation_script_on(settings);
            }

        }
    }

    function Hidebtn(){
        if(settings.transitiontype=="codrops"){
            $(".codrops-close").hide();
        }else{
            $(".modal-close").hide();
        }
    }
    function Showbtn(){
        if(settings.transitiontype=="codrops"){
            $(".codrops-close").show();
        }else{
            $(".modal-close").show();
        }
    }

    $('body').mouseleave(function(){
        if(settings.transitiontype=="trad"){
            getTextAnimClassic(settings,anime);  
        }
        if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) {
            Hidebtn();
            $(this).mouseleave(leavePreview);
        }else{
            Showbtn();
        }
    });

    function leavePreview(){

     if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) { 
       	cur_hover = false;
		var transition= 'gooey-transition', rollover = false;
		if (settings.transition && settings.transition!='') {
					transition=settings.transition;
		} else {
					transition='gooey-transition';
		}
		rollover = rollovers[transition];
        if (!stuck) {
			on = false;
            if (settings.sticky === true || settings.sticky === "true") {
						stuck = true;
			} else {
				rollover.animation_script_off(settings);
			}
        }
      }  
    }
    
    function getTextAnimClassic(data,anime) {
        // Text animations
        if (data.textAnimationOff && data.textAnimationOff != "none") {

            $('#card  #text00').each(function () {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });
    
            $('#card  #text00').addClass(data.textAnimationOff);
            $('#card  #text00 .letter, #subtext0, .cd-modal-trigger').css('opacity', 0);
    
            setTimeout(function () {
                var animation = anime.timeline({ loop: false })
    
                switch (data.textAnimationOff) {
                    case "grow":
                        animation.add({
                            targets: '#card  #text00 .letter',
                            scale: [0.3, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "zoom-in":
                        animation.add({
                            targets: '#card  #text00 .letter',
                            scale: [4, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 950,
                            delay: function (el, i) {
                                return 70 * i;
                            }
                        });
                        break;
                    case "fade-in":
                        animation.add({
                            targets: '#card  #text00 .letter',
                            opacity: [0, 1],
                            easing: "easeInOutQuad",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "mexican-wave":
                        $('#card  #text00').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');
    
                        $('#card  #text00 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });
    
                        $('#card  #text00 .letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });
    
                        animation.add({
                            targets: '#card  #text00 .letter',
                            translateY: [data.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateZ: 0,
                            duration: 750,
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "rotate-up":
                        $('#card  #text00').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');
    
                        $('#card  #text00 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });
    
                        $('.letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });
    
                        animation.add({
                            targets: '#card  #text00 .letter',
                            translateY: [data.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateX: [(data.myFont0.value.split('/')[1].split(' ')[0] / 2) / 100 * 55, 0],
                            translateZ: 0,
                            rotateZ: [180, 0],
                            duration: 750,
                            easing: "easeOutExpo",
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "fold-in":
                        $('#card  #text00').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');
    
                        $('#card #text00 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });
    
                        $('#card  #text00 .letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });
    
                        animation.add({
                            targets: '#card #text00 .letter',
                            rotateY: [-90, 0],
                            duration: 1300,
                            delay: function (el, i) {
                                return 45 * i;
                            }
                        });
                        break;
                }
    
                animation.add({
                    targets: '#card  #subtext0, .cd-modal-trigger',
                    opacity: [0, 1],
                    duration: 400,
                    easing: "linear",
                    delay: 0
                });
            }, data.textAnimationDelayOff);
        }
    }
    
    function getTextAnimEndClassic(data,anime) {

        // Text animations
        if (data.textAnimationOn && data.textAnimationOn != "none") {
     
            $('#card  #text11').each(function () {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });
    
            $('#card  #text11').addClass(data.textAnimationOn);
            $('#card  #text11 .letter, #subtext1, .cd-modal-trigger').css('opacity', 0);
    
            setTimeout(function () {
                var animation = anime.timeline({ loop: false })
    
                switch (data.textAnimationOn) {
                    case "grow":
                        animation.add({
                            targets: '#card  #text11 .letter',
                            scale: [0.3, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "zoom-in":
                        animation.add({
                            targets: '#card  #text11 .letter',
                            scale: [4, 1],
                            opacity: [0, 1],
                            translateZ: 0,
                            easing: "easeOutExpo",
                            duration: 950,
                            delay: function (el, i) {
                                return 70 * i;
                            }
                        });
                        break;
                    case "fade-in":
                        animation.add({
                            targets: '#card  #text11 .letter',
                            opacity: [0, 1],
                            easing: "easeInOutQuad",
                            duration: 600,
                            delay: function (el, i) {
                                return 70 * (i + 1)
                            }
                        });
                        break;
                    case "mexican-wave":
                        $('#card  #text11').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');
    
                        $('#card  #text11 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });
    
                        $('#card  #text11 .letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });
    
                        animation.add({
                            targets: '#card  #text11 .letter',
                            translateY: [data.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateZ: 0,
                            duration: 750,
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "rotate-up":
                        $('#card  #text11').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');
    
                        $('#card  #text11 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });
    
                        $('.letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });
    
                        animation.add({
                            targets: '#card  #text11 .letter',
                            translateY: [data.myFont0.value.split('/')[1].split(' ')[0], 0],
                            translateX: [(data.myFont0.value.split('/')[1].split(' ')[0] / 2) / 100 * 55, 0],
                            translateZ: 0,
                            rotateZ: [180, 0],
                            duration: 750,
                            easing: "easeOutExpo",
                            delay: function (el, i) {
                                return 50 * i;
                            }
                        });
                        break;
                    case "fold-in":
                        $('#card  #text11').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');
    
                        $('#card  #text11 .letters').each(function () {
                            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                        });
    
                        $('#card  #text11 .letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });
    
                        animation.add({
                            targets: '#card  #text11  .letter',
                            rotateY: [-90, 0],
                            duration: 1300,
                            delay: function (el, i) {
                                return 45 * i;
                            }
                        });
                        break;
                }
    
                animation.add({
                    targets: '#card  #subtext1, .cd-modal-trigger',
                    opacity: [0, 1],
                    duration: 400,
                    easing: "linear",
                    delay: 0
                });
            }, settings.textAnimationDelayOn);
        }
    }

});