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
            }, 1500);
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
          //  transitionLayer.removeClass('visible');
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
        $('#image1').removeClass('imagezoom');
        /*****Add Zoom if zoom presents in start state image *****/
        if(settings.imageZoomOff ==true || settings.imageZoomOff =="true") {
            $('#codyhouse-image0').addClass('imagezoom');
            $('#image0').addClass('imagezoom');
        } else {
            $('#codyhouse-image0').removeClass('imagezoom');
            $('#image0').removeClass('imagezoom');
        }
    }
     /******Start state Zoom*******/
    function zoomStartstate(){

         /*****Add Zoom if zoom presents in start state image *****/
         $('#codyhouse-image0').removeClass('imagezoom');
         $('#image0').removeClass('imagezoom');
          /*****Add Zoom if zoom presents in end state image *****/
            if(settings.imageZoomOn==true || settings.imageZoomOn=="true") {
                $('#codyhouse-image1').addClass('imagezoom');
                $('#image1').addClass('imagezoom');
            } else {
                $('#codyhouse-image1').removeClass('imagezoom');
                $('#image1').removeClass('imagezoom');
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

    $('body').mouseenter(function(){
        console.log("Hello");

        if(Wix.Utils.getViewMode()=='preview') {
            if(settings.transitiontype=="trad"){
                $('.card').addClass('previewlivemode');
                $(".card").removeClass('notransition');
            }
            if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) {
                Hidebtn();
                $(this).mouseenter(enterPreview);
                enableLink(); 
                zoomStartstate();
				if(settings.transitiontype=="trad"){
					$('.text-card-content0').addClass('display-none');
                }
                if(settings.transitiontype=="distortion"){
                    getDistortionEffect();
                }
            }else{
                if(settings.transitiontype=="distortion"){
                   getDistortionEffect();
                }

                if(settings.allowSubtextBtn==="false"){
                        $(this).mouseenter(enterPreview);
                }
                Showbtn();
            }    
        }else{
            console.log("fssfff");
            if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) {
                zoomStartstate();
            }
        }
    });

			
			

    var transition = "";
    var playAnim = true;
    function getDistortionEffect()
    {
            if(settings.image0!=undefined)
            {
                    if(settings.image0[0]!=undefined)
                    {
                        var image0Src = Wix.Utils.Media.getResizedImageUrl(settings.image0[0].relativeUri, $(window).width(), $(window).height());
                    }
            }
            
            if(settings.image1!=undefined)
            {
                    if(settings.image1[0]!=undefined){
                        var image1Src = Wix.Utils.Media.getResizedImageUrl(settings.image1[0].relativeUri, $(window).width(), $(window).height());
                    }
            }

            console.log(playAnim);
     
            if(playAnim==true){
                console.log('andar');
                console.log(settings.sticky);
                $('.grid__item-img  .dist_editor_img').addClass('hide');
                $('.grid__item-subtitle').removeClass('showEnd');
               

                if($('.grid__item-img canvas').size() < 1) {
                    setTimeout(function(){
                     transition	= settings.transition;
                        $.makeArray(document.querySelectorAll('.grid__item-img')).forEach((el) => {
                        const imgs = $.makeArray(el.querySelectorAll('img'));
                        new hoverEffect({
                            parent: el,
                            intensity: el.dataset.intensity || undefined,
                            speedIn: el.dataset.speedin || undefined,
                            speedOut: el.dataset.speedout || undefined,
                            easing: el.dataset.easing || undefined,
                            hover: el.dataset.hover || undefined,
                            image1:image0Src,
                            image2:image1Src,
                            displacementImage: el.dataset.displacement
                        });
                    });

                   if(settings.sticky==true){
                        $('.grid__item-img  .dist_editor_img').removeClass('hide');	
                        $('.grid__item-subtitle').addClass('showEnd');  
                        console.log('else');
                        playAnim = false;
                
                  }
                   
                },100);
              }

              
            }

           

    }

   /****************Enable Link***********/ 
   function enableLink(){

     if(settings.endStateLink) {
         if(settings.endStateLink==true || settings.endStateLink=='true') {
                if(settings.transitiontype=="codrops"){

                        $('#codrops #face5-wrap').addClass('target-link');

                }
                if(settings.transitiontype=="trad"){
  
                        $("#face1 .text-card-context-inner").addClass('target').addClass('target-link');

                }
                if(settings.transitiontype=="codyhouse" || settings.transitiontype=="ap1"){

                      $("#face5-wrap").addClass('target').addClass('target-link');
                }
                if(settings.transitiontype=="particles" ){
                    $("#particles ").removeClass('target-link');
                    $('.particles-button').off().on('click',function(){
                        setTimeout(function(){
                            $("#particles").addClass('target-link');
                            $(".target-link").trigger('click');
                        },500);
                    });
                    $('#particles .action').off().on('click',function(){
                        $("#particles ").removeClass('target-link');
                    });
                }
                triggerlink();
           }
       }       
   }

   /****************Enable Link***********/
   function triggerlink(){ 
        if(settings.endStateLink==true || settings.endStateLink=='true') {
            if (settings.linkData!= undefined) {
                 $('html').on('click','.target-link',function(){ 
                     Wix.navigateTo(settings.linkData);
                 });
            } 
        }
    }

    var stuck=false;
    var on=false;
    var cur_hover = false;

    function enterPreview(){
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

    $('body').mouseleave(function(){
        if(Wix.Utils.getViewMode()=='preview') {

           /**  if(settings.transitiontype=="distortion"){
                if(settings.sticky==true){
                    $('.grid__item-img  .dist_editor_img').removeClass('hide');	
                    $('.grid__item-subtitle').addClass('showEnd');  
                    console.log('else');
                    playAnim = false;
                
                }
            }*/

            if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) {
                Hidebtn();
                $(this).mouseleave(leavePreview);
                zoomEndstate();
				if(settings.transitiontype=="trad"){
					 $('.text-card-content0').removeClass('display-none');
				}
            }else{
                Showbtn();
            }
        }else{
            if(settings.transitiontype=='ap1'|| settings.textbtna == false || settings.textbtna == "false" || !settings.textbtna) {
                zoomEndstate();
            }
        }
    });

    function leavePreview(){
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

    function Hidebtn(){
        if(settings.transitiontype=="codrops"){
            $(".codrops-close").hide();
        }else{
            $(".modal-close").hide();
        }
    }

    function Showbtn(){
        if(settings.transitiontype=="codrops"){
            if (settings.sticky == true || settings.sticky == 'true') {
                $(".codrops-close").hide();
            } else {
                $(".codrops-close").show();
            }
        }else{
            if (settings.sticky == true || settings.sticky == 'true') {
                $('.modal-close').hide();
            }else{
                $(".modal-close").show();
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