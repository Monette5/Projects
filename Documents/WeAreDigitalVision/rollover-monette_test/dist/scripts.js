/*---------------------------------------------------------*/
/* Encode all local settings to save to S3
/*---------------------------------------------------------*/
function encodeSettings() {
    var localSettings = {};
    var textarea_start_text = $('#textarea-start-editor').text();
    var textarea_end_text   = $('#textarea-end-editor').text();

    localSettings.effectcat = $('#effectcat').getCtrl().getValue();

   /** if(localSettings.effectcat=="cooltips"){
        localSettings.transition     = $('#cooltipanimation').getCtrl().getValue();
        localSettings.transitiontype = localSettings.effectcat;
    }else{
        localSettings.transition = settings.transition;
        localSettings.transitiontype = get_transition_type(settings.transition);
    }**/

    localSettings.transition = settings.transition;
    localSettings.transitiontype = get_transition_type(settings.transition);

    localSettings.text0 = $('#text-off').getCtrl().getValue();
    localSettings.textAlign0 = $('#text-align-off').getCtrl().getValue() || 'mc';
    localSettings.textbtn0 = $('#textbtn-off').getCtrl().getValue();
    localSettings.heading0 = $('#heading-off').getCtrl().getValue();
    localSettings.headingp = $('#heading-phone').getCtrl().getValue();
    localSettings.hidep = $('#hide-phone').getCtrl().getValue();
    localSettings.subheading0 = $('#subheading-off').getCtrl().getValue();
    localSettings.text1 = $('#text-on').getCtrl().getValue();
    localSettings.textAlign1 = $('#text-align-on').getCtrl().getValue() || 'mc';

         /***** Start Paragraph Editor Value *******/
         if (textarea_start_text!= undefined) {
            localSettings.subtext0 = textarea_start_text;
     } else {
             localSettings.subtext0 = '';
     }

     /***** End Paragraph Editor Value ******/
     if (textarea_end_text!=undefined) {
         localSettings.subtext1 = textarea_end_text;
     } else {
         localSettings.subtext1 = '';
     }

    localSettings.textbtn1 = $('#textbtn-on').getCtrl().getValue();
    localSettings.headingp0 = $('#heading-phone').getCtrl().getValue();

    if (!textbtnb && textbtnb != 0 && textbtnb != 'false') {
        textbtnb = $('#textbtn-allowlink').getCtrl().getValue();
    }

    localSettings.textbtnb = textbtnb;
    localSettings.myFontH = $('#text-font-heading').getCtrl().getValue().font;
    localSettings.textColorH = hexToRgb($('#text-font-heading').getCtrl().getValue().color.color);
    localSettings.myFontS = $('#text-font-subheading').getCtrl().getValue().font;
    localSettings.textColorS = hexToRgb($('#text-font-subheading').getCtrl().getValue().color.color);
    localSettings.textAnimationOff = $('#text-animation-off').getCtrl().getValue();
    localSettings.textAnimationDelayOff = $('#text-animation-delay-off').getCtrl().getValue();
    localSettings.textAnimationDelayOn = $('#text-animation-delay-on').getCtrl().getValue();
    localSettings.myFont0 = $('#text-font-off').getCtrl().getValue().font;
    localSettings.textColor0 = hexToRgb($('#text-font-off').getCtrl().getValue().color.color);
    localSettings.submyFont0 = $('#subtext-font-off').getCtrl().getValue().font;
    localSettings.subtextColor0 = hexToRgb($('#subtext-font-off').getCtrl().getValue().color.color);
    localSettings.textAnimationOn = $('#text-animation-on').getCtrl().getValue();
    localSettings.myFont1 = $('#text-font-on').getCtrl().getValue().font;
    localSettings.textColor1 = hexToRgb($('#text-font-on').getCtrl().getValue().color.color);
    localSettings.submyFont1 = $('#subtext-font-on').getCtrl().getValue().font;
    localSettings.subtextColor1 = hexToRgb($('#subtext-font-on').getCtrl().getValue().color.color);
    localSettings.myFontB0 = $('#textbtn-font-off').getCtrl().getValue().font;
    localSettings.textColorB0 = hexToRgb($('#textbtn-font-off').getCtrl().getValue().color.color);
    localSettings.myFontB1 = $('#textbtn-font-on').getCtrl().getValue().font;
    localSettings.textColorB1 = hexToRgb($('#textbtn-font-on').getCtrl().getValue().color.color);
    localSettings.radius0 = ($('#radius-off').getCtrl().getValue() / 100) * 50;
    localSettings.radiusMobile0 = ($('#radius-mobile-off').getCtrl().getValue() / 100) * 50;
    localSettings.radiusB0 = ($('#textbtn-radius-off').getCtrl().getValue() / 100) * 50;
    localSettings.backColorB0 = getColorWithOpacity('#textbtn-backcolour-off');
    localSettings.backSizeBborder0 = $('#textbtn-size-border-off').getCtrl().getValue();
    localSettings.backColorBborder0 = getColorWithOpacity('#textbtn-colour-border-off');
    localSettings.radiusB1 = ($('#textbtn-radius-on').getCtrl().getValue() / 100) * 50;
    localSettings.backColorB1 = getColorWithOpacity('#textbtn-colour-on');
    localSettings.crossColorB1close = getColorWithOpacity('#cross-colour-on-close');
    localSettings.backColorB1close = getColorWithOpacity('#textbtn-colour-on-close');
    localSettings.backSizeBborder1 = $('#textbtn-radius-on').getCtrl().getValue();
    localSettings.backColorBborder1 = getColorWithOpacity('#textbtn-colour-border-on');
    localSettings.mobilefontsize = $('#mobilefontsize').getCtrl().getValue();
    localSettings.mobileparagraphsize = $('#mobileparagraphsize').getCtrl().getValue();
    localSettings.mobilebuttonsize = $('#mobilebuttonsize').getCtrl().getValue();
    localSettings.linkData = $('#linkData').getCtrl().getValue();
    localSettings.endStateLink = $('#end-state-link').getCtrl().getValue();


    localSettings.lineColor0 = hexToRgb($('#line-colour-0').getCtrl().getValue().color);
    localSettings.backColor0 = getColorWithOpacity('#background-colour-off');
    localSettings.backColor1 = getColorWithOpacity('#background-colour-on');
    var rollover = rollovers[settings.transition];
    if (rollover) {
        if (rollover.copyTextColor) {
            localSettings.textColor1 = localSettings.textColor0;
        }
    }
    localSettings.textOpacity0 = $('#text-font-off').getCtrl().getValue().color.opacity;
    localSettings.textOpacity1 = $('#text-font-on').getCtrl().getValue().color.opacity;
    localSettings.subtextWidth1 = $('#text-width-subtexton').getCtrl().getValue();
    localSettings.subtextPadding1 = $('#text-padding-subtexton').getCtrl().getValue();
    localSettings.subtextPaddingTB1 = $('#text-paddingTB-subtexton').getCtrl().getValue();
    localSettings.subtextWidth0 = $('#text-width-subtextoff').getCtrl().getValue();
    localSettings.subtextPadding0 = $('#text-padding-subtextoff').getCtrl().getValue();
    localSettings.subtextPaddingTB0 = $('#text-paddingTB-subtextoff').getCtrl().getValue();
    if (!subtextAlign1) {
        subtextAlign1 = $('#text-align-subtexton').getCtrl().getValue();
    }
    localSettings.subtextAlign1 = subtextAlign1;
    if (!subtextAlign0) {
        subtextAlign0 = $('#text-align-subtextoff').getCtrl().getValue();
    }
    localSettings.subtextAlign0 = subtextAlign0;

    // Mobile text align
    if (!subtextMobileAlign1) {
        subtextMobileAlign1 = $('#text-align-mobileon').getCtrl().getValue();
    }
    localSettings.subtextMobileAlign1 = subtextMobileAlign1;
    if (!subtextMobileAlign0) {
        subtextMobileAlign0 = $('#text-align-mobileoff').getCtrl().getValue();
    }
    localSettings.subtextMobileAlign0 = subtextMobileAlign0;

    if (!subtextAllowmob1 && subtextAllowmob1 != 0 && subtextAllowmob1 != 'false') {
        subtextAllowmob1 = $('#text-width-subtexton-allowmob').getCtrl().getValue();
    }
    localSettings.subtextAllowmob1 = subtextAllowmob1;
    if (!subtextAllowmob0 && subtextAllowmob0 != 0 && subtextAllowmob0 != 'false') {
        subtextAllowmob0 = $('#text-width-subtextoff-allowmob').getCtrl().getValue();
    }
    localSettings.subtextAllowmob0 = subtextAllowmob0;
    if (!sticky && sticky != 0 && sticky != 'false') {
        sticky = $('#peranent-effect').getCtrl().getValue();
    }
    localSettings.sticky = sticky;
    if (!allowSubtextBtn && allowSubtextBtn != 0 && allowSubtextBtn != 'false') {
        allowSubtextBtn = $('#allowSubtextBtn').getCtrl().getValue();
    }

    localSettings.allowSubtextBtn = allowSubtextBtn;

    if (!youtube0mute && youtube0mute != 0 && youtube0mute != 'false') {
        youtube0mute = $('#youtube0mute').getCtrl().getValue();
    }
    localSettings.youtube0mute = youtube0mute;
    if (!youtube1mute && youtube1mute != 0 && youtube1mute != 'false') {
        youtube1mute = $('#youtube1mute').getCtrl().getValue();
    }
    localSettings.youtube1mute = youtube1mute;
    localSettings.trancolorFilter = $('#trancolor').getCtrl().getValue().color;
    localSettings.blurLevel = $('#blur').getCtrl().getValue();
    localSettings.opacityLevel = $('#opacity').getCtrl().getValue();
    localSettings.zoomLevel = $('#zoom').getCtrl().getValue();
    localSettings.twistLevel = $('#twist').getCtrl().getValue();
    if (!direction) {
        direction = $('#direction').getCtrl().getValue();
    }
    localSettings.direction = direction;
    localSettings.blurLevel = Math.round((localSettings.blurLevel || 0) / 6);
    localSettings.opacityLevel = (localSettings.opacityLevel || 0) / 100;
    localSettings.twistLevel = (localSettings.twistLevel || 20);
    localSettings.zoomLevel = 1 - ((localSettings.zoomLevel || 0) / 100);
    localSettings.zoomLevelPlus = 1 + ((localSettings.zoomLevel || 0) / 50);
    localSettings.overlayOffAngle = $('#overlayOffAngleContainer').getCtrl().getValue() ? $('#overlayOffAngleContainer').getCtrl().getValue() : 0;
    localSettings.overlayOffColour1Opacity = $('#overlayOffColour1Container').getCtrl().getValue().opacity * 100;
    localSettings.overlayOffColour2Opacity = $('#overlayOffColour2Container').getCtrl().getValue().opacity * 100;
    localSettings.overlayOffColour1 = hexToRgb($('#overlayOffColour1Container').getCtrl().getValue().color);
    localSettings.overlayOffColour2 = hexToRgb($('#overlayOffColour2Container').getCtrl().getValue().color);
    localSettings.colorFilterOff1 = getColorWithOpacity('#overlayOffColour1Container');
    localSettings.colorFilterOff2 = getColorWithOpacity('#overlayOffColour2Container');
    localSettings.overlayOnAngle = $('#overlayOnAngleContainer').getCtrl().getValue() ? $('#overlayOnAngleContainer').getCtrl().getValue() : 0;
    localSettings.overlayOnColour1Opacity = $('#overlayOnColour1Container').getCtrl().getValue().opacity * 100;
    localSettings.overlayOnColour2Opacity = $('#overlayOnColour2Container').getCtrl().getValue().opacity * 100;
    localSettings.overlayOnColour1 = hexToRgb($('#overlayOnColour1Container').getCtrl().getValue().color);
    localSettings.overlayOnColour2 = hexToRgb($('#overlayOnColour2Container').getCtrl().getValue().color);
    localSettings.colorFilterOn1 = getColorWithOpacity('#overlayOnColour1Container');
    localSettings.colorFilterOn2 = getColorWithOpacity('#overlayOnColour2Container');

    if ($('#image0').getCtrl().getValue() == settings.image0) {
        localSettings.image0 = settings.image0;
    } else {
        localSettings.image0 = $('#image0').getCtrl().getValue();
    }

    localSettings.imageZoomOff = $('#image-zoom-off').getCtrl().getValue();
    localSettings.zoomDurantionOff = $('#zoom-duration-off').getCtrl().getValue();

    if ($('#image1').getCtrl().getValue() == settings.image1) {
        localSettings.image1 = settings.image1;
    } else {
        localSettings.image1 = $('#image1').getCtrl().getValue();
    }


    localSettings.imageZoomOn = $('#image-zoom-on').getCtrl().getValue();
    localSettings.zoomDurantionOn = $('#zoom-duration-on').getCtrl().getValue();

    localSettings.noimage0 = noimage0;
    localSettings.noimage1 = noimage1;
    localSettings.startEndToggle = startEndToggle;
    localSettings.borderColor = $('#border-color').getCtrl().getValue().color;
    localSettings.borderSize = $('#border-size').getCtrl().getValue();

    localSettings.youtube0          = $('#youtube0').getCtrl().getValue();
    localSettings.youtube0start     = $('#youtube0start').getCtrl().getValue();
    localSettings.youtube0end       = $('#youtube0end').getCtrl().getValue();
    localSettings.youtube0loop      = $('#youtube0loop').getCtrl().getValue();
    localSettings.youtube0autoplay  = $('#youtube0autoplay').getCtrl().getValue();

    localSettings.youtube1 = $('#youtube1').getCtrl().getValue();
    localSettings.youtube1start = $('#youtube1start').getCtrl().getValue();
    localSettings.youtube1end = $('#youtube1end').getCtrl().getValue();
    localSettings.youtube1loop = $('#youtube1loop').getCtrl().getValue();
    localSettings.youtube1autoplay = $('#youtube1autoplay').getCtrl().getValue();

    localSettings.height = settings.height;
    localSettings.width = settings.width;

    if(textbtna==0 || textbtna==false || textbtna=='false' || localSettings.transition=='ap1'){
        textbtna = false;
    }else{
        textbtna = true;
    }
    localSettings.textbtna = textbtna;

    if (allowSubtextBtn == 'true') {
        localSettings.textAlign0 = localSettings.textAlign1 = 'mc';
    }

    if(settings.is_active!=undefined && settings.is_active==1){
        localSettings.is_active = 1;
    }


    localSettings.zoomArtLevel = $('#zoom_arisian').getCtrl().getValue();

    /*****Latest Settings***********************/
    localSettings.triggerheading 	= $('#trigger-heading').getCtrl().getValue();
    localSettings.tooltipheading	= $('#tooltip-heading').getCtrl().getValue();
    localSettings.cooltipscolor  	= $('#cooltipscolor').getCtrl().getValue().color;
    localSettings.triggerFont       = $('#trigger-font').getCtrl().getValue().font;
    localSettings.triggerFontColor  = $('#trigger-font').getCtrl().getValue().color.color;
    localSettings.tooltipFont       = $('#tooltip-font').getCtrl().getValue().font;
    localSettings.tooltipFontColor  = $('#tooltip-font').getCtrl().getValue().color.color;

    if(localSettings.transitiontype=="cooltips"){
        if($('#triggerchoice').getCtrl().getValue()!="" && $('#triggerchoice').getCtrl().getValue()!=undefined){
            localSettings.triggerchoice  = $('#triggerchoice').getCtrl().getValue();
        }else{
            localSettings.triggerchoice  = '1';
        }
        if(localSettings.triggerheading=="" || localSettings.triggerheading==undefined){
            localSettings.triggerheading =  localSettings.transition;
        }
        if(localSettings.tooltipheading=="" || localSettings.tooltipheading==undefined){
            localSettings.tooltipheading =  localSettings.transition+' animation';
        }
            /*****Particle Buttons: color only just now but may need other parameters such as padding, duration, etc.********/
        localSettings.particlescolor  = $('#particlescolor').getCtrl().getValue().color;

    }
    return localSettings;
}

/*---------------------------------------------------------*/
/* Listen for changes on each wix element in settings
/*---------------------------------------------------------*/
function attachListeners() {
    $('[wix-ctrl]').each(function (index, element) {
        var $element = $(element);
        var ctrl = $element.getCtrl();
        var element_id = $(element).attr('id');
        if ($.isFunction(ctrl.onChange)) {
            ctrl.onChange(function (value) {
                onUpdate($element.attr('wix-param'), value, Wix.Utils.getOrigCompId());
                //youtube
                if (element_id == 'youtube0' || element_id == 'youtube0start' || element_id == 'youtube0end' || element_id == 'youtube1' || element_id == 'youtube1start' || element_id == 'youtube1end') {
                    allow_widgetload = 1;
                }
                //Show Button
                if (element_id == 'allowSubtextBtn') {
                    //allow_widgetload = 1;
                    allowSubtextBtn = value;
                }
                //Show Button
                if (element_id == 'youtube0mute') {
                    allow_widgetload = 1;
                    youtube0mute = value;
                }
                //Show Button
                if (element_id == 'youtube1mute') {
                    allow_widgetload = 1;
                    youtube1mute = value;
                }
                //Show Button
                if (element_id == 'youtube1loop') {
                    allow_widgetload = 1;
                    youtube1loop = value;
                }
                //Show Button
                if (element_id == 'youtube1autoplay') {
                    allow_widgetload = 1;
                    youtube1autoplay = value;
                }
                //Show Button
                if (element_id == 'peranent-effect') {
                    sticky = value;
                }
                //Show Button
                if (element_id == 'text-width-subtexton-allowmob') {
                    subtextAllowmob1 = value;
                }
                //Show Button
                if (element_id == 'text-width-subtextoff-allowmob') {
                    subtextAllowmob0 = value;
                }
                //Show Button
                if (element_id == 'textbtn-allow') {
                    textbtna = value;
                   // show_button_style(value, true);
                }
                //paragraph align
                if (element_id == 'text-align-subtextoff') {
                    subtextAlign0 = value;
                }
                //paragraph align
                if (element_id == 'text-align-subtexton') {
                    subtextAlign1 = value;
                }
                //paragraph align
                if (element_id == 'text-align-mobileoff') {
                    subtextMobileAlign0 = value;
                }
                //paragraph align
                if (element_id == 'text-align-mobileon') {
                    subtextMobileAlign1 = value;
                }
                //direction
                if (element_id == 'direction') {
                    direction = value;
                }
                //Show Button
                if (element_id == 'textbtn-allowlink') {
                    show_button_link(value, true);
                }
                // Input validations
                if (element_id == 'heading-off') {
                    $("#heading-off").getCtrl().setValidationFunction(function (value) {
                        return value.length < 200;
                    });
                }

                if (element_id == 'text-off') {
                    $("#text-off").getCtrl().setValidationFunction(function (value) {
                        return value.length < 200;
                    });
                }

                if (element_id == 'text-on') {
                    $("#text-on").getCtrl().setValidationFunction(function (value) {
                        return value.length < 200;
                    });
                }

                if (element_id == 'textbtn-off') {
                    $("#textbtn-off").getCtrl().setValidationFunction(function (value) {
                        return value.length < 100;
                    });
                }

                if (element_id == 'textbtn-on') {
                    $("#textbtn-on").getCtrl().setValidationFunction(function (value) {
                        return value.length < 100;
                    });
                }

                if (element_id == 'subheading-off') {
                    $("#subheading-off").getCtrl().setValidationFunction(function (value) {
                        return value.length < 500;
                    });
                }

                if (element_id == 'subtext-off') {
                    $("#subtext-off").getCtrl().setValidationFunction(function (value) {
                        return value.length < 2000;
                        //return value.length;
                    });
                }

                if (element_id == 'subtext-on') {
                    $("#subtext-on").getCtrl().setValidationFunction(function (value) {
                        return value.length < 2000;
                    });
                }

                //Start and End Toggle
                if (element_id == 'start-end-toggle' || element_id == 'start-end-toggle2' || element_id == 'start-end-toggle3') {
                    if (startEndToggle != value) {
                        design_start_end_toggle(value);
                        startEndToggle = value;

                        if (element_id != 'start-end-toggle')
                            $("#start-end-toggle").getCtrl().setValue(value);
                        if (element_id != 'start-end-toggle2')
                            $("#start-end-toggle2").getCtrl().setValue(value);
                        if (element_id != 'start-end-toggle3')
                            $("#start-end-toggle3").getCtrl().setValue(value);
                    }
                }

                // input
                if (element_id == 'heading0') {
                    heading0 = value;
                }

                //radio
                if (element_id == 'effectcat') {
                    hideshow_effect(value, true)
                }

                if (element_id == 'inputemail') {
                    $("#inputemail").getCtrl().setValidationFunction(function (value) {
                        enableSend();
                        return validateEmail(value);
                    });
                }

                if (element_id == 'inputmessage') {
                    enableSend();
                }

                /*****************Latest Settings**************/
                if (element_id == 'trigger-heading') {
                    $("#trigger-heading").getCtrl().setValidationFunction(function (value) {
                        return value.length < 2000;
                    });
                }
                if (element_id == 'tooltip-heading') {
                    $("#tooltip-heading").getCtrl().setValidationFunction(function (value) {
                        return value.length < 2000;
                    });
                }

                if ($.inArray(element_id, donotload) < 0) {
                    setTimeout(saveAndRefresh, 100);
                }
            });
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('#buttonsend button').click(function () {
        send();
    });

    $("#upgradeto").click(function () {
        Wix.Settings.openBillingPage()
    });

    $("#upgradenow").getCtrl().onClick(function () {
        Wix.Settings.openBillingPage()
    });

    $("#upgradenow2").getCtrl().onClick(function () {
        Wix.Settings.openBillingPage()
    });
}

/*---------------------------------------------------------*/
/* Reflect setting changes in the widget
/*---------------------------------------------------------*/
function reflectSettings() {
   /*** var rollover;
    if(settings.transitiontype=="cooltips"){
        rollover = rollovers[settings.transition];
    }else{
        rollover = rollovers[settings.transition || 'gooey-transition'];
        reflectTransition();
    }**/
    rollover = rollovers[settings.transition || 'gooey-transition'];
    Wix.getSiteInfo(function (siteInfo) {
        settings.siteInfo = siteInfo;
    });

    reflectTransition();


    /**************Latest Chanegs Sept 2018 */
    if ($('#triggerchoice').getCtrl().getValue() != settings.triggerchoice) {
        $('#triggerchoice').getCtrl().setValue(settings.triggerchoice);
    }
    if ($('#trigger-heading').getCtrl().getValue() != settings.triggerheading) {
        $('#trigger-heading').getCtrl().setValue(settings.triggerheading);
    }
    if ($('#tooltip-heading').getCtrl().getValue() != settings.tooltipheading) {
        console.log("entertooltip");
        $('#tooltip-heading').getCtrl().setValue(settings.tooltipheading);
    }
    /**************Latest Chanegs Sept 2018 */


    if ($('#text-on').getCtrl().getValue() != settings.text1) {
        $('#text-on').getCtrl().setValue(settings.text1);
    }

    if ($('#text-off').getCtrl().getValue() != settings.text0) {
        $('#text-off').getCtrl().setValue(settings.text0);
    }

    if ($('#subtext-on').getCtrl().getValue() != settings.subtext1) {
        $('#subtext-on').getCtrl().setValue(settings.subtext1);
    }

    if ($('#subtext-off').getCtrl().getValue() != settings.subtext0) {
        $('#subtext-off').getCtrl().setValue(settings.subtext0);
    }

    if ($('#heading-phone').getCtrl().getValue() != settings.headingp) {
        $('#heading-phone').getCtrl().setValue(settings.headingp);
    }

    if ($('#heading-off').getCtrl().getValue() != settings.heading0) {
        $('#heading-off').getCtrl().setValue(settings.heading0);
    }

    if ($('#subheading-off').getCtrl().getValue() != settings.subheading0) {
        $('#subheading-off').getCtrl().setValue(settings.subheading0);
    }

    if ($('#textbtn-off').getCtrl().getValue() != settings.textbtn0) {
        $('#textbtn-off').getCtrl().setValue(settings.textbtn0);
    }

    if ($('#textbtn-on').getCtrl().getValue() != settings.textbtn1) {
        $('#textbtn-on').getCtrl().setValue(settings.textbtn1);
    }

    if ($('#effectcat').getCtrl().getValue() != settings.effectcat) {
        $('#effectcat').getCtrl().setValue(settings.effectcat);
    }

    if ($('#end-state-link').getCtrl().getValue() != settings.endStateLink) {
        $('#end-state-link').getCtrl().setValue(settings.endStateLink);
    }

    // R1 link patch
    function is_url(str) {
        regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

        if (regexp.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    if (settings.urlmode) {
        if (settings.urlmode == "") {
            if (is_url(settings.url)) {
                $('#linkData').getCtrl().setValue({
                    target: "_blank",
                    type: "ExternalLink",
                    url: settings.url
                });
            } else {
                $('#linkData').getCtrl().setValue({
                    pageId: '#' + settings.url.split('/')[1],
                    type: "PageLink"
                });
            }
        } else if (settings.urlmode == "anchor") {
            $('#linkData').getCtrl().setValue({
                anchorDataId: "#" + settings.url.split('/')[1].replace('comp', 'dataItem'),
                anchorName: settings.url.split('/')[0].replace('#!', ''),
                pageId: "#c1dmp",
                type: "AnchorLink"
            });
        } else if (settings.urlmode == "email") {
            $('#linkData').getCtrl().setValue({
                recipient: settings.url,
                type: "EmailLink"
            });
        } else if (settings.urlmode == "tel") {
            $('#linkData').getCtrl().setValue({
                phoneNumber: settings.url,
                type: "PhoneLink"
            });
        }
    }

    if ($('#linkData').getCtrl().getValue() != settings.linkData) {
        $('#linkData').getCtrl().setValue(settings.linkData);
    }

    // R1 opacity patch
    if ($('#overlayOffColour1Container').getCtrl().getValue().color != rgbToHex(settings.overlayOffColour1)) {
        $('#overlayOffColour1Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOffColour1), opacity: settings.overlayOffColour1Opacity / 100 });
    }

    if ($('#overlayOffColour2Container').getCtrl().getValue().color != rgbToHex(settings.overlayOffColour2)) {
        $('#overlayOffColour2Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOffColour2), opacity: settings.overlayOffColour2Opacity / 100 });
    }

    if ($('#overlayOnColour1Container').getCtrl().getValue().color != rgbToHex(settings.overlayOnColour1)) {
        $('#overlayOnColour1Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOnColour1), opacity: settings.overlayOnColour1Opacity / 100 });
    }

    if ($('#overlayOnColour2Container').getCtrl().getValue().color != rgbToHex(settings.overlayOnColour2)) {
        $('#overlayOnColour2Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOnColour2), opacity: settings.overlayOnColour2Opacity / 100 });
    }

    // R1 image patch
    if (!$.isArray(settings.image0)) {
        settings.image0 = [settings.image0];
    }

    if ($('#image0').getCtrl().getValue() != settings.image0) {
        $('#image0').getCtrl().setValue(settings.image0);
    }

    if ($('#image-zoom-off').getCtrl().getValue() != settings.imageZoomOff) {
        $('#image-zoom-off').getCtrl().setValue(settings.imageZoomOff);
    }

    if ($('#zoom-duration-off').getCtrl().getValue() != settings.zoomDurantionOff) {
        $('#zoom-duration-off').getCtrl().setValue(settings.zoomDurantionOff);
    }

    if(settings.zoomArtLevel && settings.zoomArtLevel!='NaN' && settings.zoomArtLevel!=null){
        if ($('#zoom_arisian').getCtrl().getValue() != settings.zoomArtLevel) {
            $('#zoom_arisian').getCtrl().setValue(settings.zoomArtLevel);
        }
    }



    // R1 image patch
    if (!$.isArray(settings.image1)) {
        settings.image1 = [settings.image1];
    }

    if ($('#image1').getCtrl().getValue() != settings.image1) {
        $('#image1').getCtrl().setValue(settings.image1);
    }

    if ($('#image-zoom-on').getCtrl().getValue() != settings.imageZoomOn) {
        $('#image-zoom-on').getCtrl().setValue(settings.imageZoomOn);
    }

    if ($('#zoom-duration-on').getCtrl().getValue() != settings.zoomDurantionOn) {
        $('#zoom-duration-on').getCtrl().setValue(settings.zoomDurantionOn);
    }

    if ($('#border-size').getCtrl().getValue() != settings.borderSize) {
        $('#border-size').getCtrl().setValue(settings.borderSize);
    }

    if ($('#youtube0').getCtrl().getValue() != settings.youtube0) {
        $('#youtube0').getCtrl().setValue(settings.youtube0);
    }

    if ($('#youtube0start').getCtrl().getValue() != settings.youtube0start) {
        $('#youtube0start').getCtrl().setValue(settings.youtube0start);
    }

    if ($('#youtube0end').getCtrl().getValue() != settings.youtube0end) {
        $('#youtube0end').getCtrl().setValue(settings.youtube0end);
    }

    if ($('#youtube1').getCtrl().getValue() != settings.youtube1) {
        $('#youtube1').getCtrl().setValue(settings.youtube1);
    }

    if ($('#youtube1start').getCtrl().getValue() != settings.youtube1start) {
        $('#youtube1start').getCtrl().setValue(settings.youtube1start);
    }

    if ($('#youtube1end').getCtrl().getValue() != settings.youtube1end) {
        $('#youtube1end').getCtrl().setValue(settings.youtube1end);
    }

    if ($('#youtube1loop').getCtrl().getValue() != settings.youtube1loop) {
        $('#youtube1loop').getCtrl().setValue(settings.youtube1loop);
    }

    if ($('#youtube1autoplay').getCtrl().getValue() != settings.youtube1autoplay) {
        $('#youtube1autoplay').getCtrl().setValue(settings.youtube1autoplay);
    }

    if ($('#youtube0loop').getCtrl().getValue() != settings.youtube0loop) {
        $('#youtube0loop').getCtrl().setValue(settings.youtube0loop);
    }

    if ($('#youtube0autoplay').getCtrl().getValue() != settings.youtube0autoplay) {
        $('#youtube0autoplay').getCtrl().setValue(settings.youtube0autoplay);
    }

    if (settings.textAlign1) {
        if ($('#text-align-on').getCtrl().getValue() != settings.textAlign1) {
            $('#text-align-on').getCtrl().setValue(settings.textAlign1);
        }
    }

    if (settings.textAlign0) {
        if ($('#text-align-off').getCtrl().getValue() != settings.textAlign0) {
            $('#text-align-off').getCtrl().setValue(settings.textAlign0);
        }
    }

    if (settings.textAnimationOff) {
        if ($('#text-animation-off').getCtrl().getValue() != settings.textAnimationOff) {
            $('#text-animation-off').getCtrl().setValue(settings.textAnimationOff);
        }
    }

    if (settings.textAnimationOn) {
        if ($('#text-animation-on').getCtrl().getValue() != settings.textAnimationOn) {
            $('#text-animation-on').getCtrl().setValue(settings.textAnimationOn);
        }
    }

    if (settings.textAnimationDelayOff) {
        if ($('#text-animation-delay-off').getCtrl().getValue() != settings.textAnimationDelayOff) {
            $('#text-animation-delay-off').getCtrl().setValue(settings.textAnimationDelayOff);
        }
    }

    if (settings.textAnimationDelayOn) {
        if ($('#text-animation-delay-on').getCtrl().getValue() != settings.textAnimationDelayOn) {
            $('#text-animation-delay-on').getCtrl().setValue(settings.textAnimationDelayOn);
        }
    }

    // Hide all menus
    var menus = ['peranent-effect', 'opacity', 'blur', 'zoom', 'twist', 'direction',
        'start-tab', 'background-colour-off',
        'text-off', 'text-font-off', 'text-colour-off', 'overlay-off', 'heading-off', 'heading-phone', 'hide-phone',
        'subheading-off', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
        'end-tab', 'background-colour-on', 'text-on', 'text-font-on', 'text-colour-on', 'overlay-on',
        'link-tab', 'link', 'link1', 'link2', 'link3', 'link4', 'textbtn-off', 'textbtn-on', 'textbtn-tab', 'textbtn-tablink', 'trancolor', 'colorfilter-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'nosetting', 'colorfilter-on', 'allowSubtextBtn', 'textbtn-allowlink-container',
        'cooltip_text_label'

    ];

    for (key in menus) {
        var menuId = menus[key];
        $('#' + menuId).hide();
        $('#header-' + menuId).hide();
        $('.' + menuId).hide();
    }

    if (!rollover || !rollover.premium) {
        $('#up').addClass('hidden');
    } else {
        $('#up').removeClass('hidden');
    }

    var hasEndTab = false;
    var hasLineColour = false;

    for (menu in rollover.menus) {
        var menuId = rollover.menus[menu];
        if (menuId === 'end-tab') {
            hasEndTab = true;
        }
        if (menuId == 'line-colour-0') {
            hasLineColour = true;
        }
        $('#' + menuId).show();
        $('#header-' + menuId).show();
        $('.' + menuId).show();
    }

    if (hasLineColour) {
        $('#line-colour-0-container').show();
        $('#borderandline1').html('Border &amp; Line');
    } else {
        $('#line-colour-0-container').hide();
        $('#borderandline1').html('Border');
    }

    // hide "Layout" tab unless overriden later

    $('#zoom_arisian').hide();
    $(".tabs-menu div:nth-of-type(6)").hide();
    $('#image-zoom-off, #image-zoom-on').hide();
    $('.zoom-duration-off, .zoom-duration-on').hide();
    $('#addLink').hide();
    $("#layoutsettings").show();
    $("#textbtn-allowlink").show();
    $("#text-animation-delay-on").show();
    $("#text-animation-delay-off").show();
    $('.text-animation-off, .text-animation-on, .text-animation-delay-off, .text-animation-delay-on').hide();

    // if add link is switched off hide the link area
    if (!settings.endStateLink) {
        $('#addLink').hide();
    } else {
        $('#addLink').show();
    }

   /***console.log(settings.transitiontype);
    if(settings.transitiontype=="cooltips"){
        transition_type = settings.transitiontype;
    }else{
        transition_type = get_transition_type(settings.transition);
    }**/
    transition_type = get_transition_type(settings.transition);

    if (transition_type == 'codyhouse' || transition_type == 'codyhouse2' || transition_type == 'codyhouse3' || transition_type == 'codyhouse4' || transition_type == 'codyhouse5' || transition_type == 'codyhouse6') {
        $('.drillaccordionlink5').html('Transition Color');
        //show_button_style(textbtna, false);
        show_button_link(textbtnb, false);
        $('.text-animation-off, .text-animation-on, .text-animation-delay-off, .text-animation-delay-on').show();
        $('#image-zoom-off, #image-zoom-on').show();
        $(".tabs-menu div:nth-of-type(4)").show();
        $(".text-align").hide();
        $(".tabs-menu div:nth-of-type(6)").show();
        $("#videoAccordion").removeClass('display-none');
        $("#layoutsettings").hide();
        $('.trans-color-container').show();
    } else if (transition_type == 'trad') {
        $('.design-animation-dropdown').show();
        $(".tabs-menu div:nth-of-type(6)").show();

        if (settings.transition == 'zoom' || settings.transition == 'unzoom') {
            $('.drillaccordionlink5').html('Zoom Level');
        } else if (settings.transition == 'blur' || settings.transition == 'unblur') {
            $('.drillaccordionlink5').html('Blur Level');
        } else if (settings.transition == 'opaque' || settings.transition == 'unopaque') {
            $('.drillaccordionlink5').html('Opacity Level');
        } else if (settings.transition == 'slide') {
            $('.drillaccordionlink5').html('Direction');
        }

        if (allowSubtextBtn == 'false') {
            $(".text-align").hide();
        } else {
            $(".text-align").show();
        }
        hideshow_SubtextBtn(allowSubtextBtn);
        if (allowSubtextBtn == 'true' || allowSubtextBtn == true || allowSubtextBtn == 1) {
            show_button_link(textbtnb, false);
            $(".tabs-menu div:nth-of-type(6)").show();
            $(".text-align").hide();
        } else {
            $(".tabs-menu div:nth-of-type(6)").hide();
            $(".text-align").show();
        }
        $("#trans_color_link").hide();
		$('.text-animation-on').show();
    } else if (transition_type == 'ap1') {
        $('.drillaccordionlink5').html('Line Color');
        $(".tabs-menu div:nth-of-type(5)").show();
        $(".tabs-menu div:nth-of-type(6)").hide();
        $('.text-off').show();
        $("#textbtn-allowlink").hide();
        $('#choose_effect_container').hide();
        $("#text-animation-delay-off").hide();
        $("#text-animation-delay-on").hide();
        $('#textbtn-off').hide();
        $('#textbtn-on').hide();
        $('#text-on').hide();
        $('#image-zoom-off').hide();
        $('#image1').hide();
        $('#zoom-duration-on').hide();
        $('#image0').show();
        $('#overlay-off').show();
        $('.img-back-color-on').hide();
        $("#videoAccordion").hide();
        $(".reset-btn-text").hide();
        globaltabsCodArt();

    } else if (transition_type == 'codrops') {
        $("#videoAccordion").addClass('display-none');
        $('.drillaccordionlink5').html('Line Color');
        $(".tabs-menu div:nth-of-type(6)").show();
        $("#text-animation-off").show();
        $("#text-animation-on").show();
        $("#image-zoom-on").show();
        $("#borderandline1").addClass('display-none');
        $(".allowbuttons").show();
        $(".allowbuttons").removeClass('display-none');
        $("#textbtn-radius-on").hide();
        $('#overlay-off').hide();
        globaltabsCodArt();
    }
    else if(transition_type == 'cooltips'){

        var hideCooltipsId =
        [
            'peranent-effect','trans_color_link','videoAccordion','corner-controls','text-off', 'subtext-off',
            'text-on','subtext-on','layoutsettings','resetbtn_end','textbtn-on','resetbtn_start',
            'text-align-on','mobileparagraphsize','mobilebuttonsize','textbtn-font-on','subtext-font-on',
            'text-animation-delay-on','text-animation-delay-off','subtext-font-off','text-font-off',
            'text-font-on','background-colour-off','overlay-off','image-zoom-off','color-filter-label','text_start_end',
            'start_text_label'
        ];
        for (key in hideCooltipsId) {
            $('#' + hideCooltipsId[key]).hide();
        }
        $(".textbtn-tab").hide();
        $("#cooltip_text_label").show();
    }
    special_designtab(transition_type);

    if (settings.transition == 'sadie' || settings.transition == 'alt' || settings.transition == 'greyscale' || settings.transition == 'flipy' || settings.transition == 'flipx') {
        $('.drillaccordionlink5').addClass('display-none');
    } else {
        $('.drillaccordionlink5').removeClass('display-none');
    }

    var image0 = settings.image0;
    if (image0 != undefined) {
        var imageWidth = image0.width;
        var imageHeight = image0.height;
        actualWidth = 200;
        idealHeight = parseInt(imageHeight * actualWidth / imageWidth);
        var resizedSrc = Wix.Utils.Media.getResizedImageUrl(image0.relativeUri, actualWidth, idealHeight);
    }

    var image1 = settings.image1;

    if (image1 != undefined) {
        var imageWidth = image1.width;
        var imageHeight = image1.height;
        actualWidth = 200;
        idealHeight = parseInt(imageHeight * actualWidth / imageWidth);
        var resizedSrc = Wix.Utils.Media.getResizedImageUrl(image1.relativeUri, actualWidth, idealHeight);
    }

    if (first_load == 0) {
        transition_type_temp(settings.transition);
    }

    /* Show buttons */
    if (
        ((settings.textbtna == 'true' || settings.textbtna == true || settings.textbtna == 1) || (settings.textbtnb == 'true' || settings.textbtnb == true || settings.textbtnb == 1)) &&
        (transition_type == 'codyhouse' || transition_type == 'codyhouse2' || transition_type == 'codyhouse3' || transition_type == 'codyhouse4' || transition_type == 'codyhouse5' || transition_type == 'codyhouse6' || transition_type == 'trad')
    ) {
            $('.allowbuttons').show();
            $("#borderandline1").removeClass('display-none');
            $('#image1').show();
            $('#overlay-on').removeClass('display-none');
            $('#overlay-off').removeClass('display-none');
            $('#overlayOffAngleContainer').show();
    } else {
        if (transition_type != 'codrops') {
            $('.allowbuttons').hide();
            $("#borderandline1").removeClass('display-none');
        }
        if (transition_type == 'ap1') {
            $('#overlay-on').show();
            $('#overlayOffAngleContainer').show();
        }
    }

    if (isPremium) {
        $('#linktarget input[value=new]').attr("disabled", false);
    } else {
        $('#linktarget input[value=new]').attr("disabled", true);
    }

    /****If image is not showing then background hide*******/
    if (settings.image0[0] != undefined && transition_type != 'codrops') {

	   if (settings.image0.length > 0) {
			var img0Ext = "";
			if(settings.image0[0].relativeUri!=undefined){
				 img0Ext = settings.image0[0].relativeUri.split('.').pop();
			}
            if(img0Ext!='png'){
                $("#background-colour-off").hide();
            }
			if (settings.transitiontype != 'ap1' && settings.transitiontype != 'cooltips' ) {
				$('#image-zoom-off').show();
			}
        }
    }
    if (settings.image0[0] == undefined) {
        $("#background-colour-off").show();
    }

    if (settings.image1[0] != undefined) {
		var img1Ext = "";
        if (settings.image1.length > 0) {

			if(settings.image1[0].relativeUri!=undefined){
				img1Ext = settings.image1[0].relativeUri.split('.').pop();
			}
            if(img1Ext!='png'){
                $("#background-colour-on").hide();
            }
            if (settings.transitiontype != 'ap1') {
                $('#image-zoom-on').show();
            }
        }
    }
    if (settings.image1[0] == undefined) {
        $("#background-colour-on").show();
    }
    /****If image is not showing then background hide*******/

    /****Zoom slider show when you are using zoom*******/
    if ($('#image-zoom-off').getCtrl().getValue()) {
        $('.zoom-duration-off').show();
    } else {
        $('.zoom-duration-off').hide();
    }

    if ($('#image-zoom-on').getCtrl().getValue()) {
        if (settings.transition_type != 'ap1') {
            $('.zoom-duration-on').show();
        }
    } else {
        $('.zoom-duration-on').hide();
    }
    /****Zoom slider show when you are using zoom*******/

    /*****Trigger Link button show */
    $("#textbtn-allowlink-container").show();
    /*****Trigger Link button show */

    if (settings.textbtnb == false || settings.textbtnb == 'false') {
        $("#textbtn-colour-on").hide();
        $("#textbtn-colour-border-on").hide();
        $("#textbtn-size-border-on").hide();
        $("#textbtn-radius-on").hide();
        $('.trigger_end_divider').hide();
    }
    if (settings.textbtnb == 'true' || settings.textbtnb == true) {
        $("#textbtn-colour-on").show();
        $("#textbtn-colour-border-on").show();
        $("#textbtn-size-border-on").show();
        $("#textbtn-radius-on").show();
        $('.trigger_end_divider').show();
        settings.textbtnb = true;
        $('#textbtn-allowlink').getCtrl().setValue(settings.textbtnb);
    }

    if (settings.startEndToggle == 2) {
        $("#settings_triggerlink_container").show();
    }

    if(settings.youtube0!=undefined && settings.youtube0!=""){
        $('.video_trigger_enable').removeClass('hide');
        $('#choose_effect_container').hide();
    }else{
        $('.video_trigger_enable').addClass('hide');

        if (transition_type!= 'ap1'){
            $('#choose_effect_container').show();
        }
    }

    /****Zoom Slider Show only for romeo effect */
    if(settings.transition=='romeo'){
        $('#zoom_arisian').show();
    }
    /****Zoom Slider Show only for romeo effect */

    if(settings.is_active==1){
        var effectPack = "Transition";
        $("#effectcat").hide();
        $(".effectcat_level").hide();
        $('.addwidget_container').removeClass('hide');
        if(settings.transitiontype=="trad"){
             effectPack = "Classic pack";
        }
        if(settings.transitiontype=="ap1"){
             effectPack = "Artisian pack";
        }
        if(settings.transitiontype=="codrops"){
             effectPack = "Atomic pack";
        }
        if(settings.transitiontype=="cooltips"){
            effectPack = "CoolTips pack";
        }
        if(settings.transitiontype=="particles"){
            effectPack = "Particle Buttons";
        }
        $('.selected_effect_type').removeClass('hide');
        $('.selected_effect_type label span:nth-child(3)').text(effectPack);
    }

    if(settings.transitiontype!="cooltips"){
        $("#cooltips_color_link").hide();
    }

    first_load = 1;
}
