function getParameterByName(name) {
    if (!RegExp)
        return null;
    var regex = new RegExp('[?&]' + name + '=([^&]*)');
    var match = regex.exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

var default_on_transition = function (data) {
    if ((data.textbtna == false || data.textbtna == 'false' || !data.textbtna) || (!data.allowSubtextBtn || data.allowSubtextBtn == 'false' || data.allowSubtextBtn == false || data.allowSubtextBtn == 0)) {
        if (data.transition == 'greyscale' || data.transition == 'unopaque') {
            $('#face0').removeClass('z-index');
        }
            $('#btntext00').addClass('no-z-index');
            $('#btntext11').removeClass('no-z-index');
            $('#text00').addClass('no-z-index');
            $('#subtext0').addClass('no-z-index');
            $('#text11').removeClass('no-z-index');
            $('#subtext1').removeClass('no-z-index');
            $("#face1 .text-card-context-inner").addClass('z-index');
            $('#text0').hide();
            $('#text1').show();
            $('body').addClass('transit');
            $('body').addClass('hover');
        setTimeout(function () {
            $('body').removeClass('transit');
        }, 500);
    }
}

var default_on_transition_click = function (data) {
    
    if (data.transition == 'greyscale' || data.transition == 'unopaque') {
        $('#face0').removeClass('z-index');
    }
    $('#btntext00').addClass('no-z-index');
    $('#btntext11').removeClass('no-z-index');
    $('#text00').addClass('no-z-index');
    $('#subtext0').addClass('no-z-index');
    $('#text11').removeClass('no-z-index');
    $('#subtext1').removeClass('no-z-index');
    $("#face1 .text-card-context-inner").addClass('z-index');
    $('.text-card-content0').addClass('display-none');
    $('.text-card-content1').removeClass('display-none');
    $('body').addClass('transit');
    $('body').addClass('hover');
    setTimeout(function () {
        $('body').removeClass('transit');
    }, 500);
    getTextAnimEndClassic(data,settings,anime);
}

var default_off_transition = function (data) {
    if ((data.textbtna == false || data.textbtna == 'false' || !data.textbtna) || (!data.allowSubtextBtn || data.allowSubtextBtn == 'false' || data.allowSubtextBtn == false || data.allowSubtextBtn == 0)) {
        if (data.transition == 'greyscale' || data.transition == 'unopaque') {
            $('#face0').addClass('z-index');
        }
        $('#btntext11').addClass('no-z-index');
        $("#face1 .text-card-context-inner").removeClass('z-index');
        $('#btntext00').removeClass('no-z-index');
        $('#text00').removeClass('no-z-index');
        $('#subtext0').removeClass('no-z-index');
        $('#text11').addClass('no-z-index');
        $('#subtext1').addClass('no-z-index');
        $('#text1').hide();
        $('#text0').show();
        $('body').addClass('transit');
        $('body').removeClass('hover');

        setTimeout(function () {
            $('body').removeClass('transit');
        }, 1000);
    }
    getTextAnimClassic(data,settings,anime);
}

var default_off_transition_click = function (data) {
    if (data.transition == 'greyscale' || data.transition == 'unopaque') {
        $('#face0').addClass('z-index');
    }
    $('#btntext11').addClass('no-z-index');
    $("#face1 .text-card-context-inner").removeClass('z-index');
    $('#btntext00').removeClass('no-z-index');
    $('#text00').removeClass('no-z-index');
    $('#subtext0').removeClass('no-z-index');
    $('#text11').addClass('no-z-index');
    $('#subtext1').addClass('no-z-index');
    $('.text-card-content1').addClass('display-none');
    $('.text-card-content0').removeClass('display-none');
    $('body').addClass('transit');
    $('body').removeClass('hover');

    setTimeout(function () {
        $('body').removeClass('transit');
    }, 1000);
    getTextAnimation(data,settings,anime);
}

var resize_figure_padding = function (width, height) {
    var content_container = $('#figcaption');
    var full_padding = content_container.css('padding-top').replace("px", "") * 2;

    // Scale down the padding until we are at a decent size
    if (width > 0 && height > 0) {
        while (full_padding * 2 > width || full_padding * 2 > height) {
            full_padding = full_padding - 2;
        }
    }
    if (full_padding < 0) {
        full_padding = 0;
    }
    content_container.css('padding', full_padding / 2 + 'px');
}

var default_card_on_load = function (data) {
    var text0 = data.text0,
        text1 = data.text1,
        subtext0 = data.subtext0,
        subtext1 = data.subtext1,
        textbtn0 = data.textbtn0,
        textbtn1 = data.textbtn1;

    if (!data.text0 && !data.text1) {
        text0 = '';
    }

    $("#face1 .text-card-context-inner").removeClass('z-index');
    $('#text0').html(parseText(text0));
    $('#text1').html(parseText(text1));

    $('#text00').html(parseText(text0));
    $('#text11').html(parseText(text1));

    $('#subtext0').html(parseText(subtext0));
    $('#subtext1').html(parseText(subtext1));

    $('#btntext00').html(parseText(textbtn0));
    $('#btntext11').html(parseText(textbtn1));

    if (parseText(text0)) {
        $('#text00').removeClass('display-none');
    } else {
        $('#text00').addClass('display-none');
    }

    if (parseText(text1)) {
        $('#text11').removeClass('display-none');
    } else {
        $('#text11').addClass('display-none');
    }

    if (parseText(subtext1)) {
        $('#subtext1').removeClass('display-none');
        $('#btntext11').removeClass('btntext1style');
    } else {
        $('#subtext1').addClass('display-none');
        $('#btntext11').addClass('btntext1style');
    }

    if (parseText(subtext0)) {
        $('#subtext0').removeClass('display-none');
        $('#btntext00').removeClass('btntext0style');
    } else {
        $('#subtext0').addClass('display-none');
        $('#btntext00').addClass('btntext0style');
    }

    if (data.textbtna == false || data.textbtna == 'false' || !data.textbtna) {
        $('#btntext00').css({ 'opacity': 0, 'position': 'absolute' });
        $('.modal-close').css({ 'opacity': 0, 'position': 'absolute' });
    } else {
        $('#btntext00').css({ 'opacity': 1, 'position': 'static' });
        if (data.sticky == true || data.sticky == 'true') {
            $('.modal-close').css({ 'opacity': 0, 'position': 'absolute' });
        } else {
            $('.modal-close').css('opacity', 1);
        }
    }

    if (!data.textbtnb || data.textbtnb === false || data.textbtnb === "false") {
        $('#btntext11').css({ 'opacity': 0, 'position': 'absolute' });
    } else {
        $('#btntext11').css({ 'opacity': 1, 'position': 'static' });
    }

    if (data.noimage0 == 'true' || data.noimage0 == 1) {
        $('#image0').addClass('display-none');
    } else {
        $('#image0').removeClass('display-none');
    }

    if (data.noimage1 == 'true' || data.noimage1 == 1) {
        $('#image1').addClass('display-none');
    } else {
        $('#image1').removeClass('display-none');
    }

    if (data.transition == 'greyscale' || data.transition == 'unopaque') {
        $('#face0').addClass('z-index');
    }
    apply_gradients2(data);
    getTextAnimClassic(data,settings,anime);
}

var default_codyhouse_on_load = function (data) {
    var text0 = data.text0,
        text1 = data.text1,
        textbtn0 = data.textbtn0,
        subtext1 = data.subtext1,
        subtext0 = data.subtext0,
        textbtn1 = data.textbtn1;
    if (!data.text0 && !data.text1) {
        text0 = '';
    }

    $('#text4').html(parseText(text0));
    $('#text5').html(parseText(text1));
    $('#subtext5').html(parseText(subtext1));
    $('#subtext4').html(parseText(subtext0));

    if (parseText(text0)) {
        $('#text4').removeClass('display-none');
    } else {
        $('#text4').addClass('display-none');
    }

    if (parseText(text1)) {
        $('#text5').removeClass('display-none');
    } else {
        $('#text5').addClass('display-none');
    }

    if (parseText(subtext1)) {
        $('#subtext5').removeClass('display-none');
        $('#btntext1').removeClass('btntext1style');
    } else {
        $('#subtext5').addClass('display-none');
        $('#btntext1').addClass('btntext1style');
    }

    if (parseText(subtext0)) {
        $('#subtext4').removeClass('display-none');
        $('#btntext0').removeClass('btntext0style');
    } else {
        $('#subtext4').addClass('display-none');
        $('#btntext0').addClass('btntext0style');
    }

    $('#btntext0').html(parseText(textbtn0));
    $('#btntext1').html(parseText(textbtn1));

    getTextAnimation(data,settings,anime);

    if (data.textbtna == false || data.textbtna == 'false' || !data.textbtna) {
        //$('.cd-modal').removeClass('visible');
        $('#btntext0').hide();
        $('.modal-close').hide();
        $('#codyhouse').addClass('hover-trigger');
    } else {
        $('#btntext0').show();

        if (data.sticky == true || data.sticky == 'true') {
            $('.modal-close').hide();
        } else {
            $('.modal-close').show();
        }
        $('#codyhouse').removeClass('hover-trigger');
    }

    if (data.textbtnb == false || data.textbtnb == 'false' || !data.textbtnb || !data.endStateLink) {
        $('#btntext1').hide();
    } else {
        $('#btntext1').show();
    }

    $('#face4 > div').attr('class', '');
    $('#face4 > div').addClass(data.textAlign0);
    $('#face5 > div > div').attr('class', '');
    $('#face5 > div > div').addClass(data.textAlign1);

    if (data.transition) {
     
        if ($('html').hasClass('ie')) {
            $('#forcestyle2').html(' .' + data.transition + ' .cd-transition-layer .bg-layer{ background-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.png") !important; }');
            $('#forcestyle2').html(' .' + data.transition + ' .cd-transition-layer .svg-layer{ background-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") !important; }');
        } else {
            $('#forcestyle2').html(' .' + data.transition + ' .cd-transition-layer .svg-layer{ -webkit-mask-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") !important;  mask-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") !important; }');
            $('#forcestyle2').html(' .' + data.transition + ' .cd-transition-layer .bg-layer{ -webkit-mask-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.png") !important;  mask-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.png") !important; }');
        }
    }

    var oldWidth = 0;
    var oldHeight = 0;

    function resize(first) {
        var width = $(window).width(),
            height = $(window).height();

        if (width != oldWidth || height != oldHeight) {

            oldWidth = width;
            oldHeight = height;

            var imageWidth = width;
            var imageHeight = height;

            if (settings.image0 && settings.image0 != null && settings.image0 != "") {
                var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0[0].relativeUri, imageWidth, imageHeight);

                function set0() {
                    $('#codyhouse-image0').css('background-image', 'url(' + src0 + ')');
                }

                if (first) {
                    set0();
                } else {
                    var preload0 = new Image();
                    preload0.onload = set0;
                    preload0.src = src0;
                }
            }

            if (data.noimage0 == 'true' || data.noimage0 == 1) {
                $('#codyhouse-image0').css('background', 'none');
            }

            if (settings.image1 && settings.image1 != null && settings.image1 != "") {
                var src1 = Wix.Utils.Media.getResizedImageUrl(data.image1[0].relativeUri, imageWidth, imageHeight);

                function set1() {
                    $('#codyhouse-image1').css('background-image', 'url(' + src1 + ')');
                }

                if (first) {
                    set1();
                } else {
                    var preload1 = new Image();
                    preload1.onload = set1;
                    preload1.src = src1;
                }
            }

            // Set filters
            $('#codyhouse-overlay0').css('background', 'linear-gradient(' + data.overlayOffAngle + 'deg,' + data.colorFilterOff1 + ', ' + data.colorFilterOff2 + ')');
            $('#codyhouse-overlay1').css('background', 'linear-gradient(' + data.overlayOnAngle + 'deg,' + data.colorFilterOn1 + ', ' + data.colorFilterOn2 + ')');

            if (data.noimage1 == 'true' || data.noimage1 == 1) {
                $('#image1').css('background', 'none');
                $('#codyhouse-overlay1').css('background', 'linear-gradient(' + data.overlayOffAngle + 'deg,' + data.colorFilterOn1 + ', ' + data.colorFilterOn2 + ')');
            }
        }

    }

    var wixViewMode = Wix.Utils.getViewMode();

    resize(true);

    if (wixViewMode === 'editor')
        setInterval(resize, 1000);

}

var default_codyhouse_on = function (data) {
    
    if (data.textbtna == false || data.textbtna == 'false' || !data.textbtna) {

        //$('.cd-modal').removeClass('visible');
        var transitionLayer = $('.cd-transition-layer'),
            modalWindow = $('.cd-modal');
        transitionLayer.removeClass('closing');
        transitionLayer.addClass('visible opening');

        var delay = ($('.no-cssanimations').length > 0) ? 0 : 800;
        setTimeout(function () {
            modalWindow.filter('#face5').addClass('visible');
            if (settings.imageZoomOn) {
                $('#codyhouse-image1').addClass('imagezoom');
            }
            if (settings.imageZoomOff) {
                $('#codyhouse-image0').removeClass('imagezoom');
            }
           // transitionLayer.removeClass('visible');
            transitionLayer.removeClass('opening');
          
            if (cur_hover == false) {
                default_codyhouse_off(data);
            }
        }, delay);
    }
    getTextAnimation(data,settings,anime);

}

var default_codyhouse_off = function (data) {

    if (data.textbtna == false || data.textbtna == 'false' || !data.textbtna) {
        var transitionLayer = $('.cd-transition-layer'),
            modalWindow = $('.cd-modal');
            transitionLayer.removeClass('opening');
            transitionLayer.addClass('visible closing');
        // Temporary fix - Give the default_codyhouse_on() function a second to complete the animation before reversing it
        setTimeout(function () {
            transitionLayer.removeClass('closing');
            transitionLayer.removeClass('visible');
            modalWindow.removeClass('visible');
        }, 800);

        transitionLayer.on('webkitAnimationEnd oanimationend mozAnimationEnd msAnimationEnd animationend', function () {
            if (settings.imageZoomOn) {
                $('#codyhouse-image1').removeClass('imagezoom');
            }
            if (settings.imageZoomOff) {
                $('#codyhouse-image0').addClass('imagezoom');
            }
           //  transitionLayer.removeClass('closing opening visible');
            // transitionLayer.children().off('webkitAnimationEnd oanimationend mozAnimationEnd msAnimationEnd animationend');
        });
    }

    // Text animations
    if (data.textAnimationOn && data.textAnimationOn != "none" && getParameterByName('viewMode') != "editor") {
        $('#text5').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        $('#text5').addClass(data.textAnimationOn);
        $('#text5 .letter, #subtext5, #btntext1').css('opacity', 0);

        setTimeout(function () {
            var animation = anime.timeline({ loop: false })

            switch (data.textAnimationOn) {
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

                    $('.letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });

                    animation.add({
                        targets: '#text5 .letter',
                        translateY: [data.myFont0.value.split('/')[1].split(' ')[0], 0],
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

                    $('.letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });

                    animation.add({
                        targets: '#text5 .letter',
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
                    $('#text5').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                    $('#text5 .letters').each(function () {
                        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                    });

                    $('.letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });

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
}

var default_codrops_on_load = function (data) {

    var text0 = data.text0, text1 = data.text1, textbtn0 = data.textbtn0, subtext1 = data.subtext1, subtext0 = data.subtext0, textbtn1 = data.textbtn1;
    if (!data.text0 && !data.text1) {
        text0 = '';
    }

    $('#codrops #text4').html(parseText(text0));
    $('#codrops #text5').html(parseText(text1));
    $('#codrops #subtext5').html(parseText(subtext1));
    $('#codrops #subtext4').html(parseText(subtext0));

    if (parseText(text0)) {
        $('#codrops #text4').removeClass('display-none');
    } else {
        $('#codrops #text4').addClass('display-none');
    }

    if (parseText(text1)) {
        $('#codrops #text5').removeClass('display-none');
    } else {
        $('#codrops #text5').addClass('display-none');
    }

    if (parseText(subtext1)) {
        $('#codrops #subtext5').removeClass('display-none');
        $('#codrops #btntext1').removeClass('btntext1style');
    } else {
        $('#codrops #subtext5').addClass('display-none');
        $('#codrops #btntext1').addClass('btntext1style');
    }

    if (parseText(subtext0)) {
        $('#codrops #subtext4').removeClass('display-none');
        $('#codrops #btntext0').removeClass('btntext0style');
    } else {
        $('#codrops #subtext4').addClass('display-none');
        $('#codrops #btntext0').addClass('btntext0style');
    }

    $('#codrops #btntext0').html(parseText(textbtn0));
    $('#codrops #btntext1').html(parseText(textbtn1));

    if (data.textbtna == false || data.textbtna == 'false' || !data.textbtna) {
        //$('.cd-modal').removeClass('visible');
        $('#codrops #btntext0').hide();
        $('#codrops .modal-close').hide();
        $('#codrops').addClass('hover-trigger');
    } else {
        $('#codrops #btntext0').show();

        if (data.sticky == true || data.sticky == 'true') {
            $('#codrops .modal-close').hide();
        } else {
            $('#codrops .modal-close').show();
        }
        $('#codrops').removeClass('hover-trigger');
    }

    if (data.textbtnb == false || data.textbtnb == 'false' || !data.textbtnb || !data.endStateLink) {
        $('#codrops #btntext1').hide();
    } else {
        $('#codrops #btntext1').show();
    }

    $('#codrops #face4 > div').attr('class', '');
    $('#codrops #face4 > div').addClass(data.textAlign0);
    $('#codrops #face5 > div > div').attr('class', '');
    $('#codrops #face5 > div > div').addClass(data.textAlign1);

    if (data.transition) {
        if ($('html').hasClass('ie')) {
            $(' #forcestyle2').html(' .' + data.transition + ' .cd-transition-layer .bg-layer{ background-image : url("../src/widget/images/codyhouse/' + data.transition + '.png") !important; }');
        } else {
            $('#forcestyle2').html(' .' + data.transition + ' .cd-transition-layer .bg-layer{ -webkit-mask-image : url("../src/widget/images/codyhouse/' + data.transition + '.png") !important;  mask-image : url("../src/widget/images/codyhouse/' + data.transition + '.png") !important; }');
        }
    }

    var oldWidth = 0;
    var oldHeight = 0;

    function resize(first) {
        var width = window.innerWidth;
        var height = window.innerHeight;

        if (width != oldWidth || height != oldHeight) {

            oldWidth = width;
            oldHeight = height;

            var imageWidth = width;
            var imageHeight = height;

            if (settings.image0 && settings.image0 != null && settings.image0 != "") {
                var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0[0].relativeUri, imageWidth, imageHeight);

                function set0() {
                    $('#codrops-image0').css('background-image', 'url(' + src0 + ')');
                }

                if (first) {
                    set0();
                } else {
                    var preload0 = new Image();
                    preload0.onload = set0;
                    preload0.src = src0;
                }
            }

            if (data.noimage0 == 'true' || data.noimage0 == 1) {
                $('#codrops-image0').css('background', 'none');
            }

            if (settings.image1 && settings.image1 != null && settings.image1 != "") {
                var src1 = Wix.Utils.Media.getResizedImageUrl(data.image1[0].relativeUri, imageWidth, imageHeight);

                function set1() {
                    $('#codrops-image1').css('background-image', 'url(' + src1 + ')');
                }

                if (first) {
                    set1();
                } else {
                    var preload1 = new Image();
                    preload1.onload = set1;
                    preload1.src = src1;
                }
            }

            // Set filters
            $('#codrops-overlay0').css('background', 'linear-gradient(' + data.overlayOffAngle + 'deg,' + data.colorFilterOff1 + ', ' + data.colorFilterOff2 + ')');
            $('#codrops-overlay1').css('background', 'linear-gradient(' + data.overlayOnAngle + 'deg,' + data.colorFilterOn1 + ', ' + data.colorFilterOn2 + ')');

            if (data.noimage1 == 'true' || data.noimage1 == 1) {
                $('#image1').css('background', 'none');
                $('#codrops-overlay1').css('background', 'linear-gradient(' + data.overlayOffAngle + 'deg,' + data.colorFilterOn1 + ', ' + data.colorFilterOn2 + ')');
            }
        }
        getTextAnimation(data,setttings,anime);
    }


    var wixViewMode = Wix.Utils.getViewMode();
    resize(true);
    if (wixViewMode === 'editor')
        setInterval(resize, 1000);
}

var default_codrops_on = function (data) {
    const DOM = {};
    DOM.intro = document.querySelector('.content--intro');
    DOM.shape = DOM.intro.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');
    DOM.shape.style.transformOrigin = '50% 0%';

    if (data.transition == 'waveup-transition') {
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
    } else if (data.transition == 'paintup-transition') {
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
    } else if (data.transition == 'gumup-transition') {
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
    } else if (data.transition == 'pixelup-transition') {
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
    getTextAnimation(data,settings,anime);
}

var default_codrops_off = function (data) {
    const DOM = {};
    DOM.intro = document.querySelector('.content--intro');
    DOM.shape = DOM.intro.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');
    DOM.shape.style.transformOrigin = '50% 0%';

    if (data.transition == 'waveup-transition') {
		
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
    } else if (data.transition == 'paintup-transition') {
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
    } else if (data.transition == 'gumup-transition') {
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
    } else if (data.transition == 'pixelup-transition') {
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
}

/********CoolTips******************/
var default_cooltips_on_load = function (data){

    var triggerheading = data.triggerheading, tooltiptext = data.tooltipheading;
    var heightContainer     = $("#cooltips .content").height();
    var widthContainer      = $("#cooltips .content").width();

    if(data.triggerheading){
        $("#cooltips .tooltip__trigger-text").html(parseText(triggerheading));
    }
    if(data.tooltipheading){
        $("#cooltips .tooltip__content").html(parseText(tooltiptext));
    }
    if(data.cooltipscolor){
        $('.tooltip__shape').css('fill',data.cooltipscolor);
    }
    
    if(data.cooltipscoloropacity && data.cooltipscoloropacity!="NaN"){
        console.log(data.cooltipscoloropacity);
        $('.tooltip__shape').css('opacity',(data.cooltipscoloropacity)/100);
    }
    //console.log(data.linkData);
    if(data.linkData!= undefined || data.linkData!= '') {
        console.log('dfdfdf');
        $('.grid').addClass('target-link');
    }
    
    $(window).on('resize', function () {
        
        $("#cooltips .grid").css('grid-auto-rows',$("#cooltips .content").height()+'px');
        $("#cooltips .svg-layer").css('height',($("#cooltips .content").height()/2) + 'px');
    });    

    $(".tooltip__base").css('min-height',($("#cooltips .content").height()/2) + 'px');

    if(heightContainer > '300' && widthContainer > '300'){
        $("#cooltips .grid").css('grid-auto-rows',$("#cooltips .content").height()+'px');
    }

    if(getParameterByName('viewMode') == "editor"){
        console.log(window.location.origin);
    
        $(".tooltip__base").html("");
        var baseUrl = window.location.origin;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": baseUrl+"/src/widget/images/" + data.transitiontype + "/" + data.transition + ".svg",
            "method": "GET",
            dataType: "xml",
            crossOrigin: true
        }
        $.ajax(settings).done(function (response) {
            var svgNode = $("svg", response);
            var testSvg = $.parseHTML(svgNode[0]);
            console.log(svgNode[0]);
            console.log(testSvg);
            
            $(svgNode[0]).css('opacity',1);
            $(".tooltip__base").html(svgNode[0]);
           // $(".tooltip_shape").css('opacity','1');
           // $(".tooltip_shape").css('fill','red');
        });
       /*** $.get("../src/widget/images/" + data.transitiontype + "/" + data.transition + ".svg", function(data, status){
            console.log(data);
            $(".tooltip__base .svg-layer").html(data);
        }); **/

        $(".tooltip__content").css('z-index','99');
        if(document.querySelector(".tooltip__base svg")!=null ){
            if(data.transition!='walda'){
               // $(".tooltip__base svg").replaceWith('<div class="svg-layer"></div>');
                //$(' #forcestyle2').html('.tooltip__base .svg-layer{-webkit-mask-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") no-repeat center !important;  mask-image : url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") no-repeat center !important; }');
               // svgLayerCooltip();
           // $(".tooltip__base img").attr('src','../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg');   
            }else{
                $(".tooltip__base div.svg-layer").replaceWith('<div class="tooltip__deco"></div>');
            }
        }else{
           // $(".svg-layer").remove();
           // $(".tooltip__base").append('<div class="svg-layer"></div>');
           // svgLayerCooltip();
        }
        $('.tooltip__base svg').css('opacity',(data.cooltipscoloropacity)/100);
        $('.tooltip__base .svg-layer').css('opacity',(data.cooltipscoloropacity)/100);
        $(".tooltip__base").css('opacity','1');
        $(".tooltip__base").css('transform','scale(1) rotate(0deg)');
        $(".tooltip__content").css('opacity','1');
    }

    if(data.triggerchoice){
        if(data.triggerchoice=='3' || data.triggerchoice=='2'){
            $(".tooltip__trigger-text").show(); 
           if(data.triggerchoice=="2"){
             $(".tooltip__trigger-text").hide();
           } 
           var image = $("#tooltip__trigger-img");
           if ($.isArray(data.image0)) {
            if (data.image0[0].relativeUri && data.image0[0].relativeUri != '') {
                var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0[0].relativeUri, 150, 150);
                image.attr("src", src0);
            }
            } else {
                if (data.image0.relativeUri && data.image0.relativeUri != '') {
                    var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0.relativeUri, 150, 150);
                    image.attr("src", src0);
                }
            }
        }else{
            $("#tooltip__trigger-image").hide();
        }
    }
    function svgLayerCooltip(){
        $(' #forcestyle2').html('.tooltip__base .svg-layer{ -webkit-mask: url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") no-repeat center;mask: url("../src/widget/images/' + data.transitiontype + '/' + data.transition + '.svg") no-repeat center;}');
        $('.tooltip__base .svg-layer').css('background-color', data.cooltipscolor);
       // $('.tooltip__base .svg-layer').css('border', data.cooltipscolor);
    }
}

var default_cooltips_on  = function (data){
    console.log(data.linkData);
}    

var apply_gradients2 = function (data) {

    // Apply default overlay if there is one
    apply_gradient2('face0',
        data.overlayOffAngle,
        data.overlayOffColour1,
        data.overlayOffColour2,
        data.overlayOffColour1On,
        data.overlayOffColour2On,
        data.overlayOffColour1Opacity,
        data.overlayOffColour2Opacity);

    apply_gradient2('face1',
        data.overlayOnAngle,
        data.overlayOnColour1,
        data.overlayOnColour2,
        data.overlayOnColour1On,
        data.overlayOnColour2On,
        data.overlayOnColour1Opacity,
        data.overlayOnColour2Opacity);
    //$('#forcestyle4-face0').html(' #face0:after{position: absolute; content:""; height:100%; width:100%; top:0; left:0;") !important;  }');
    //	$('#forcestyle4-face1').html(' #face1:after{position: absolute; content:""; height:100%; width:100%; top:0; left:0;") !important;  }');
}

var apply_gradient2 = function (element_id, angle, colour1, colour2, colour1On, colour2On, opacity1, opacity2) {

    if (colour1On == 'false')
        colour1 = false;
    if (colour2On == 'false')
        colour2 = false;
    if (!colour1) {
        colour1 = 'rgba(0,0,0,0)';
    } else {
        colour1 = colour1.replace("rgb", "rgba");
        //colour1 = colour1.replace("rgb", "rgba");
        colour1 = colour1.replace(")", "," + (opacity1 / 100) + ")");
    }
    if (!colour2) {
        colour2 = 'rgba(0,0,0,0)';
    } else {
        colour2 = colour2.replace("rgb", "rgba");
        //colour2 = colour2.replace("rgb", "rgba");
        colour2 = colour2.replace(")", "," + (opacity2 / 100) + ")");
    }
    $('#forcestyle4-' + element_id).html(' #' + element_id + ':after{position: absolute; content:""; height:100%; width:100%; top:0; left:0; background: -webkit-linear-gradient(' + angle + 'deg, ' + colour1 + ',  ' + colour2 + ');  background: -o-linear-gradient(' + angle + 'deg, ' + colour1 + ',  ' + colour2 + '); background: -moz-linear-gradient(' + angle + 'deg, ' + colour1 + ',  ' + colour2 + '); background: linear-gradient(' + angle + 'deg, ' + colour1 + ',  ' + colour2 + '); ');
}

var apply_gradients = function (data) {
    apply_gradient('figure-overlay-off',
        data.overlayOffAngle,
        data.overlayOffColour1,
        data.overlayOffColour2,
        data.overlayOffColour1On,
        data.overlayOffColour2On,
        data.overlayOffColour1Opacity,
        data.overlayOffColour2Opacity);

    apply_gradient('figure-overlay-on',
        data.overlayOnAngle,
        data.overlayOnColour1,
        data.overlayOnColour2,
        data.overlayOnColour1On,
        data.overlayOnColour2On,
        data.overlayOnColour1Opacity,
        data.overlayOnColour2Opacity);
}

var default_figure_on_load = function (data, opts) {
    opts = opts || {};

    var container = $('#figure'),
        content_container = $('#figcaption'),
        image = $('#figure-image'),
        overlay_on = $('#figure-overlay-on'),
        overlay_off = $('#figure-overlay-off');

    if (!opts.skipGrid) {
        $('#container').addClass('grid');
    }

    if (!opts.skipPadding) {
        $('#container').css('padding-top', '0px');
        $('#container').css('padding-bottom', '0px');
    }
    var width = $(window).width(),
        height = $(window).height();

    var imageWidth = width + (opts.imageWidthPlus || 0);
    var imageHeight = height + (opts.imageHeightPlus || 0);

    if ($.isArray(data.image0)) {
        if (data.image0[0].relativeUri && data.image0[0].relativeUri != '') {
            var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0[0].relativeUri, imageWidth, imageHeight);
            image.attr("src", src0);
        }
    } else {
        if (data.image0.relativeUri && data.image0.relativeUri != '') {
            var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0.relativeUri, imageWidth, imageHeight);
            image.attr("src", src0);
        }
    }

    // Set the container to match the image size
    //container.width(width);
    //container.height(height);
    image.width(imageWidth);
    image.height('auto');
    // Overwrites some of the .grid figure css so that we can scale
    container.css({ 'max-width': '9999px' });
    container.css({ 'max-height': '9999px' });
    //container.css({'max-width': width});
    overlay_on.width(width);
    overlay_on.height(height);
    overlay_off.width(width);
    overlay_off.height(height);

    // Sometimes the padding is causing issues, I need to resize things to match the padding.
    // But more importantly the passing is sometimes too big

    if (!opts.skipPadding) {
        resize_figure_padding(width, height);
        var padding = content_container.css('padding-top').replace("px", "");
        content_container.width(width - (padding * 2) - (data.borderSize * 2));
        //content_container.height(height - (padding*2) - (data.borderSize * 2));

    }

    // Load colour
    // this effects rollover effects
    //image.css('background-color', data.backColor0);
    $('#figure').css({ 'background-color': 'transparent' });
    apply_gradients(data);

    $('#figure-overlay-off').show();
    $('#figure-overlay-on').hide();

    $('.figure-text').addClass('text0');
    $('.figure-text').removeClass('text1');

    // if theres a URL, append it
    if (data.url && data.url !== '')
        container.on('click', function () { window.location = url });
}

var default_figure_span_content = function (data, title_style, content_delimiter) {
    title_style = typeof title_style !== 'undefined' ? title_style : { '-1': 'span' };
    content_delimiter = typeof content_delimiter !== 'undefined' ? content_delimiter : '\n';

    var container = $('#figure'),
        content_container = $('#figcaption'),
        image = $('#figure-image');

    var text_title = data.heading0;
    var text_content = data.subheading0;
    return { title: parseText(text_title), content: parseText(text_content) };
}

var calls = 0;

var fontSizes = {}

var deviceType = getParameterByName('deviceType');
var widthMaxRatio = 0.9;
if (deviceType == 'mobile') {
    widthMaxRatio = 0.8;
}

var autoZoomAttemptInterval = 100;

var editmode = '';

var zoomText = function (callback) {
    function autoZoomBoth() {

        var h2 = $('h2');
        var p = $('p');

        if (h2.css('font-family') == 'sans-serif' || p.css('font-family') == 'sans-serif') {
            
            setTimeout(autoZoomBoth, autoZoomAttemptInterval);

        } else {

            function autoZoom(elemId, elem) {

                var width = parseInt(elem.width() * widthMaxRatio);
                var scrollWidth = (elem[0].scrollWidth);
                var zoom = width / scrollWidth;

                var fontSize = parseFloat(elem.css('font-size'));
                var fontFace = elem.css('font-family');

                elem.attr('o-font-size', fontSize);
                elem.attr('o-font-family', fontFace);
                elem.attr('o-width', width);
                elem.attr('o-swidth', scrollWidth);

                if (zoom < 1 && zoom != 0) {
                    var newFontSize = parseInt(fontSize * zoom);
                    elem.css('font-size', newFontSize + 'px');
                    elem.css('line-height', newFontSize + 'px');

                    fontSizes[elemId] = newFontSize;
                } else {
                    fontSizes[elemId] = fontSize;
                    elem.css('line-height', fontSize + 'px');
                }

            }

            autoZoom('h2', h2);
            autoZoom('p', p);

            if (callback)
                callback();

        }

    }

    setTimeout(autoZoomBoth, autoZoomAttemptInterval);
}

var default_figure_off_text_style = function (data, callback) {
    $('.figure-text').addClass('text0');
    $('.figure-text').removeClass('text1');
    zoomText(callback);
}

var default_figure_on_text_style = function (data) {
    $('.figure-text').addClass('text1');
    $('.figure-text').removeClass('text0');
}

// styles array('0'=>'<b>', '-1'=>'<strong>'), that sort of thing
var style_line = function (line, styles) {
    line_array = line.split(' ');
    for (var key in styles) {
        var style = styles[key];
        key = parseInt(key);
        while (key < 0 && line_array.length > 0) {
            key = key + line_array.length;
        }
        if (key < line_array.length) {
            line_array[key] = '<' + style + '>' + line_array[key] + '</' + style + '>';
        }
    }
    return line_array.join(" ");
}

var apply_gradient = function (element_id, angle, colour1, colour2, colour1On, colour2On, opacity1, opacity2) {

    if (colour1On == 'false')
        colour1 = false;
    if (colour2On == 'false')
        colour2 = false;
    if (!colour1) {
        colour1 = 'rgba(0,0,0,0)';
    } else {
        colour1 = colour1.replace("rgb", "rgba");
        //colour1 = colour1.replace("rgb", "rgba");
        colour1 = colour1.replace(")", "," + (opacity1 / 100) + ")");
    }
    if (!colour2) {
        colour2 = 'rgba(0,0,0,0)';
    } else {
        colour2 = colour2.replace("rgb", "rgba");
        //colour2 = colour2.replace("rgb", "rgba");
        colour2 = colour2.replace(")", "," + (opacity2 / 100) + ")");
    }

    //console.log('(#'+element_id+').css(background-image, -webkit-linear-gradient('+angle+'deg, '+colour1+', '+colour2+')');
    $('#' + element_id).css('background-image', '-webkit-linear-gradient(' + angle + 'deg, ' + colour1 + ', ' + colour2 + ')'); // Safari
    $('#' + element_id).css('background-image', '-o-linear-gradient(' + angle + 'deg, ' + colour1 + ', ' + colour2 + ')'); // Opera
    $('#' + element_id).css('background-image', '-moz-linear-gradient(' + angle + 'deg, ' + colour1 + ', ' + colour2 + ')'); // Firefox
    $('#' + element_id).css('background-image', 'linear-gradient(' + angle + 'deg, ' + colour1 + ', ' + colour2 + ')'); // Standard
}
var addSocialButtons = function (data, padding) {
    var socials = '';
    if (data.link1)
        socials += "<a href='" + data.link1 + "' style='padding:" + padding + "px;'><i class='fa " + data.link1Icon.value + "'></i></a>";
    if (data.link2)
        socials += "<a href='" + data.link2 + "' style='padding:" + padding + "px;'><i class='fa " + data.link2Icon.value + "'></i></a>";
    if (data.link3)
        socials += "<a href='" + data.link3 + "' style='padding:" + padding + "px;'><i class='fa " + data.link3Icon.value + "'></i></a>";
    if (data.link4)
        socials += "<a href='" + data.link4 + "' style='padding:" + padding + "px;'><i class='fa " + data.link4Icon.value + "'></i></a>";

    return socials;
}

var parseText = function (text) {
    // Parses things like bellow into actual links
    // dasd [a="www.google.com"]link[a]asda dasd [a="www.google2.com"]link2[a]dd
    if (!text || text == "")
        return '';
    var patt = new RegExp(/(\r\n|\n|\r)/g);

    if (text.match(patt)) {
        //text = text.replace(patt, '<a href="$1">$2</a>');
        text = text.replace(patt, "<br />");
    }
    return text;
}

function getTextAnimation(data,settings,anime) {

    // Text animations
    if (data.textAnimationOff && data.textAnimationOff != "none" && getParameterByName('viewMode') != "editor") {

        $('#'+settings.transitiontype+' #text4').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        $('#'+settings.transitiontype+' #text4').addClass(data.textAnimationOff);
        $('#'+settings.transitiontype+' #text4 .letter, #subtext4, .cd-modal-trigger').css('opacity', 0);

        setTimeout(function () {
            var animation = anime.timeline({ loop: false })

            switch (data.textAnimationOff) {
                case "grow":
                    animation.add({
                        targets: '#'+settings.transitiontype+' #text4 .letter',
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
                        targets: '#'+settings.transitiontype+' #text4 .letter',
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
                        targets: '#'+settings.transitiontype+' #text4 .letter',
                        opacity: [0, 1],
                        easing: "easeInOutQuad",
                        duration: 600,
                        delay: function (el, i) {
                            return 70 * (i + 1)
                        }
                    });
                    break;
                case "mexican-wave":
                    $('#'+settings.transitiontype+' #text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                    $('#'+settings.transitiontype+' #text4 .letters').each(function () {
                        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                    });

                    $('#'+settings.transitiontype+' #text4 .letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });

                    animation.add({
                        targets: '#'+settings.transitiontype+' #text4 .letter',
                        translateY: [data.myFont0.value.split('/')[1].split(' ')[0], 0],
                        translateZ: 0,
                        duration: 750,
                        delay: function (el, i) {
                            return 50 * i;
                        }
                    });
                    break;
                case "rotate-up":
                    $('#'+settings.transitiontype+' #text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                    $('#'+settings.transitiontype+' #text4 .letters').each(function () {
                        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                    });

                    $('.letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });

                    animation.add({
                        targets: '#'+settings.transitiontype+' #text4 .letter',
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
                    $('#'+settings.transitiontype+' #text4').wrapInner('<span class="text-wrapper"><span class="letters"></span></span>');

                    $('#'+settings.transitiontype+' #text4 .letters').each(function () {
                        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                    });

                    $('#'+settings.transitiontype+' #text4 .letter').css({ 'line-height': data.myFont0.value.split('/')[1].split(' ')[0] });

                    animation.add({
                        targets: '#'+settings.transitiontype+' #text4 .letter',
                        rotateY: [-90, 0],
                        duration: 1300,
                        delay: function (el, i) {
                            return 45 * i;
                        }
                    });
                    break;
            }

            animation.add({
                targets: '#'+settings.transitiontype+' #subtext4, .cd-modal-trigger',
                opacity: [0, 1],
                duration: 400,
                easing: "linear",
                delay: 0
            });
        }, settings.textAnimationDelayOff);
    }
}

function getTextAnimClassic(data,settings,anime) {
    
    // Text animations
    if (data.textAnimationOff && data.textAnimationOff != "none" && getParameterByName('viewMode') != "editor") {

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
        }, settings.textAnimationDelayOff);
    }
}

function getTextAnimEndClassic(data,settings,anime) {
    
    // Text animations
    if (data.textAnimationOn && data.textAnimationOn != "none" && getParameterByName('viewMode') != "editor") {
        
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