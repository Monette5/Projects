/*---------------------------------------------------------*/
/* Encode all local settings to save to S3
/*---------------------------------------------------------*/
function encodeSettings() {

    var localSettings = {};

    localSettings.effectcat     = $('#effectcat').getCtrl().getValue();
    localSettings.transition    = settings.transition;
    localSettings.transitiontype = get_transition_type(settings.transition);

    localSettings.text0         = $('#text-off').getCtrl().getValue();
    localSettings.textAlign0    = $('#text-align-off').getCtrl().getValue() || 'mc';
    localSettings.textbtn0      = $('#textbtn-off').getCtrl().getValue();
    localSettings.heading0      = $('#heading-off').getCtrl().getValue();
    // localSettings.headingp      = $('#heading-phone').getCtrl().getValue();
    // localSettings.hidep         = $('#hide-phone').getCtrl().getValue();
    localSettings.subheading0   = $('#subheading-off').getCtrl().getValue();
    localSettings.text1         = $('#text-on').getCtrl().getValue();
    localSettings.textAlign1    = $('#text-align-on').getCtrl().getValue() || 'mc';


    localSettings.subtext0 = $("#subtext-off").getCtrl().getValue();
    localSettings.subtext1 = $("#subtext-on").getCtrl().getValue();

    localSettings.textbtn1 = $('#textbtn-on').getCtrl().getValue();
  //  localSettings.headingp0 = $('#heading-phone').getCtrl().getValue();

    if (!textbtnb && textbtnb != 0 && textbtnb != 'false') {
        textbtnb = $('#textbtn-allowlink').getCtrl().getValue();
    }

    localSettings.textbtnb = textbtnb;
    localSettings.endfontallow = $('#end-font-allow').getCtrl().getValue();//new-ui
    localSettings.endtextallow = $('#end-text-allow').getCtrl().getValue();//new-ui
    //localSettings.textonallow = $('#text-on-allow').getCtrl().getValue();//new-ui
    localSettings.showlayout = $('#show-layout').getCtrl().getValue();//new-ui
    localSettings.colourfilterstart = $('#colour-filter-start').getCtrl().getValue();//new-ui
    localSettings.colourfiltersend = $('#colour-filters-end').getCtrl().getValue();//new-ui
    localSettings.videochoice = $('#videochoice').getCtrl().getValue();//new-ui
    localSettings.borders = $('#borders').getCtrl().getValue();//new-ui
    localSettings.buttons = $('#buttons').getCtrl().getValue();//new-ui
    localSettings.endparagraphmob = $('#end-paragraph-mob').getCtrl().getValue();//new-ui
    localSettings.effectdropdown = $('#effectdropdown').getCtrl().getValue();//new-ui
    localSettings.mobilelayout = $('#mobilelayout').getCtrl().getValue();//new-ui

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
  //new-ui

    localSettings.endimage = $('#end-image').getCtrl().getValue();//new-ui


      //new-ui
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

    // if(settings.transitiontype=="particles" || settings.transitiontype=="ripples" || settings.transitiontype=="bubbles"){
    //     if(settings.height > 100 ){
    //         localSettings.height = parseInt(100);
    //         localSettings.width  = parseInt(100);
    //       }
    //     }

    localSettings.height = settings.height;
    localSettings.width = settings.width;

    if(textbtna==0 || textbtna==false || textbtna=='false' || localSettings.transitiontype=='ap1'){
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

    if(localSettings.transitiontype=="cooltips"){

        /*****Latest Settings***********************/
        localSettings.triggerheading 	         = $('#trigger-heading').getCtrl().getValue();
        localSettings.tooltipheading	         = $('#tooltip-heading').getCtrl().getValue();
        localSettings.cooltipscolor  	         = $('#cooltipscolor').getCtrl().getValue().color;
        localSettings.triggerFont                = $('#trigger-font').getCtrl().getValue().font;
        localSettings.triggerFontColor           = $('#trigger-font').getCtrl().getValue().color.color;
        localSettings.tooltipFont                = $('#tooltip-font').getCtrl().getValue().font;
        localSettings.tooltipFontColor           = $('#tooltip-font').getCtrl().getValue().color.color;
        localSettings.cooltipscoloropacity       = $('#cooltipscolor-opacity').getCtrl().getValue();
        localSettings.triggericoncolor  	     = $('#triggericoncolor').getCtrl().getValue().color;
        localSettings.cooltipfontAngle  	     = $('#cooltipfontAngle').getCtrl().getValue();
        localSettings.mobiletriggerfontsize  	 = $('#mobiletriggerfontsize').getCtrl().getValue();
        localSettings.mobilecooltipfontsize  	 = $('#mobilecooltipfontsize').getCtrl().getValue();
        localSettings.cooltipbordersize  	     = $('#cooltipbordersize').getCtrl().getValue();
        localSettings.triggerbgoption            = $('#triggerbgoption').getCtrl().getValue();
        localSettings.triggerbackgroundcolor  	 = $('#triggerbackgroundcolor').getCtrl().getValue().color;
        localSettings.iconsize  	             = $('#iconsize').getCtrl().getValue();

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
        localSettings.tooltiponmouse = $('#tooltip_btn_mouseout').getCtrl().getValue();
        var cooltipicon     = $('.icon-text input').val();
        if(cooltipicon) {
            localSettings.cooltipicon = cooltipicon;
        }

    }

      /**********Buttons (options)******************* */
  //   if(localSettings.transitiontype=="ripples" || localSettings.transitiontype=="bubbles"){
  //     localSettings.button_text               = $('#button_text').getCtrl().getValue();
  //     localSettings.buttoncolorfilter  	     = $('#buttoncolorfilter').getCtrl().getValue().color;
  //     localSettings.buttoncoloropacity        = $('#buttoncoloropacity').getCtrl().getValue();
  //     //localSettings.ripplebtngradient  	 = $('#ripplebtngradient').getCtrl().getValue().color;
  // }
    if(localSettings.transitiontype=='codyhouse' || localSettings.transitiontype=='trad'){
       localSettings.subtextoffposition      = $('#text-position-subtextoff').getCtrl().getValue();
       localSettings.subtextonposition  	 = $('#text-position-subtexton').getCtrl().getValue();
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
                    //  $("#subtext-off").getCtrl().setValidationFunction(function (value) {
                        // return value.length < 2000;
                            //return value.length;
                    // });
                }

                if (element_id == 'subtext-on') {
                   // $("#subtext-on").getCtrl().setValidationFunction(function (value) {
                      //  return value.length < 2000;
                  //  });
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
                //dropdown
                // if (element_id == 'effectdropdown') {
                //     hideshow_effect(value, 'selected');
                    //hideshow_effect(settings.effectdropdown);
              //  }

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

    // if ($('#heading-phone').getCtrl().getValue() != settings.headingp) {
    //     $('#heading-phone').getCtrl().setValue(settings.headingp);
    // }
    //new-ui
    if ($('#heading-off').getCtrl().getValue() != settings.heading0) {
        $('#heading-off').getCtrl().setValue(settings.heading0);
    }

    if ($('#text-on').getCtrl().getValue() == "") {
      $('#text-on').getCtrl().setValue(settings.text0);
    }else{
      $('#text-on').getCtrl().setValue(settings.text1);
    }

    if ($('#subtext-on').getCtrl().getValue() == "") {
     $('#subtext-on').getCtrl().setValue(settings.subtext0);
   }else{
     $('#subtext-on').getCtrl().setValue(settings.subtext1);
   }


   // if ($('#heading-on').getCtrl().getValue() == "") {
   //     $('#heading-off').getCtrl().setValue(settings.heading0);
   //   }else{
   //     $('#heading-on').getCtrl().setValue(settings.subtext1);
   //   }

   //new-ui
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

    /****Cooltips Tootip stays Option */
    if ($('#tooltip_btn_mouseout').getCtrl().getValue() != settings.tooltiponmouse) {
        $('#tooltip_btn_mouseout').getCtrl().setValue(settings.tooltiponmouse);
    }

      /****Cooltips Trigger Background stays Option */
    if ($('#triggerbgoption').getCtrl().getValue() != settings.triggerbgoption) {
        $('#triggerbgoption').getCtrl().setValue(settings.triggerbgoption);
    }

    /****Button text Background  Option */
  // if ($('#button_text').getCtrl().getValue() != settings.button_text) {
  //     $('#button_text').getCtrl().setValue(settings.button_text);
  // }


  /****Button text Background  Option */
  if ($('#text-position-subtexton').getCtrl().getValue() != settings.subtextonposition) {
      $('#text-position-subtexton').getCtrl().setValue(settings.button_text);
  }

    /****Allow Sub button text*****/
    if ($('#allowSubtextBtn').getCtrl().getValue() != settings.allowSubtextBtn) {
        $('#allowSubtextBtn').getCtrl().setValue(settings.allowSubtextBtn);
    }

   /****One Time Animation*****/
    if ($('#peranent-effect').getCtrl().getValue() != settings.sticky) {
        $('#peranent-effect').getCtrl().setValue(settings.sticky);
    }
      /****One Time Animation*****/

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
    // if ($('#overlayOffColour1Container').getCtrl().getValue().color != rgbToHex(settings.overlayOffColour1)) {
    //     $('#overlayOffColour1Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOffColour1), opacity: settings.overlayOffColour1Opacity / 100 });
    // }
    //
    // if ($('#overlayOffColour2Container').getCtrl().getValue().color != rgbToHex(settings.overlayOffColour2)) {
    //     $('#overlayOffColour2Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOffColour2), opacity: settings.overlayOffColour2Opacity / 100 });
    // }
    //
    // if ($('#overlayOnColour1Container').getCtrl().getValue().color != rgbToHex(settings.overlayOnColour1)) {
    //     $('#overlayOnColour1Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOnColour1), opacity: settings.overlayOnColour1Opacity / 100 });
    // }
    //
    // if ($('#overlayOnColour2Container').getCtrl().getValue().color != rgbToHex(settings.overlayOnColour2)) {
    //     $('#overlayOnColour2Container').getCtrl().setValue({ color: rgbToHex(settings.overlayOnColour2), opacity: settings.overlayOnColour2Opacity / 100 });
    // }

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

//new-ui
    if ($('#end-image').getCtrl().getValue() != settings.endimage) {
        $('#end-image').getCtrl().setValue(settings.endimage);
    }
    if ($('#end-font-allow').getCtrl().getValue() != settings.endfontallow) {
        $('#end-font-allow').getCtrl().setValue(settings.endfontallow);
     }
     if ($('#end-paragraph-mob').getCtrl().getValue() != settings.endparagraphmob) {
         $('#end-paragraph-mob').getCtrl().setValue(settings.endparagraphmob);
      }
      if ($('#mobilelayout').getCtrl().getValue() != settings.mobilelayout) {
          $('#mobilelayout').getCtrl().setValue(settings.mobilelayout);
      }

     if ($('#end-text-allow').getCtrl().getValue() != settings.endtextallow) {
         $('#end-text-allow').getCtrl().setValue(settings.endtextallow);
      }
    // if ($('#text-on-allow').getCtrl().getValue() != settings.textonallow) {
    //     $('#text-on-allow').getCtrl().setValue(settings.textonallow);
    // }//new-ui
    if ($('#show-layout').getCtrl().getValue() != settings.showlayout) {
        $('#show-layout').getCtrl().setValue(settings.showlayout);
    }
    if ($('#colour-filter-start').getCtrl().getValue() != settings.colourfilterstart) {
        $('#colour-filter-start').getCtrl().setValue(settings.colourfilterstart);
    }
    if ($('#colour-filters-end').getCtrl().getValue() != settings.colourfiltersend) {
        $('#colour-filters-end').getCtrl().setValue(settings.colourfiltersend);
    }//new-ui
    if ($('#videochoice').getCtrl().getValue() != settings.videochoice) {
        $('#videochoice').getCtrl().setValue(settings.videochoice);
    }
    if ($('#borders').getCtrl().getValue() != settings.borders) {
        $('#borders').getCtrl().setValue(settings.borders);
    }
    if ($('#buttons').getCtrl().getValue() != settings.buttons) {
        $('#buttons').getCtrl().setValue(settings.buttons);
    }//new-ui
//new-ui
    // if (!effectdropdown) {
    //     effectdropdown = $('#effectdropdown').getCtrl().getValue();
    // }
    if ($('#effectdropdown').getCtrl().getValue() != settings.effectdropdown) {
        $('#effectdropdown').getCtrl().setValue(settings.effectdropdown);
    }
//new-ui
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
        'start-tab', 'background-colour-off','text-off', 'text-font-off', 'text-colour-off', 'overlay-off', 'heading-off', 'heading-phone', 'hide-phone',
        'subheading-off', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
        'end-tab', 'background-colour-on', 'text-on', 'text-font-on', 'text-colour-on', 'overlay-on',
        'link-tab', 'link', 'link1', 'link2', 'link3', 'link4', 'textbtn-off', 'textbtn-on', 'textbtn-tab', 'textbtn-tablink', 'trancolorFilter', 'colorfilter-on', 'subtext-on',
        'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'nosetting', 'colorfilter-on', 'allowSubtextBtn', 'textbtn-allowlink-container',
        'cooltip_text_label','cooltipscolor-opacity','cooltips-imgfilter-label','triggerchoice','tootltipsettings','tooltip_btn_mouseout','cooltips_color',
        'trigger-heading','tooltip-heading','triggericoncolorcontainer','trigger_font_container','trigger_font_container-mob','cooltipbordersize',
        'zoom_arisian','image-zoom-off','image-zoom-on','tabs-menu div:nth-of-type(6)','zoom-duration-off','zoom-duration-on','button_text_container', 'button_color_link',
        'addLink'
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
       // $('#borderandline1').html('Border &amp; Line');
    } else {
        $('#line-colour-0-container').hide();
       // $('#borderandline1').html('Border');
    }

    // hide "Layout" tab unless overriden later
    $("#layoutsettings").show();
    $("#textbtn-allowlink").show();
    $("#text-animation-delay-on").show();
    $("#text-animation-delay-off").show();

    // if add link is switched off hide the link area
    if (!settings.endStateLink) {
        $('#addLink').hide();
    } else {
        $('#addLink').show();
    }
    //new-ui
    if (settings.endimage == 'true' || settings.endimage == true) {
        $('#end-image-show').show();
    }
    else {
      $('#end-image-show').hide();
    }
    // if (settings.fontonallow == 'true' || settings.fontonallow == true) {
    //     $('#show-hide-font').show();
    // }
    // else {
    //   $('#show-hide-font').hide();
    // }
    // if (settings.textonallow == 'true' || settings.textonallow == true) {
    //     $('#show-hide-text').show();
    //       $('#show-hide-font').show();
    // }
    //
    // else {
    //   $('#show-hide-text').hide();
    //   $('#show-hide-font').hide();
    // }
    if (settings.endfontallow == 'true' || settings.endfontallow == true) {
        $('#endfont').show();
      }
      else {
        $('#endfont').hide();
      }
      if (settings.endtextallow == 'true' || settings.endtextallow == true) {
          $('#end-text').show();
        }
        else {
          $('#end-text').hide();
        }

    if (settings.showlayout == 'true' || settings.showlayout == true) {
        $('#layout-options').show();
    }
    else {
      $('#layout-options').hide();
    }
    if (settings.colourfilterstart == 'true' || settings.colourfilterstart== true) {
        $('#colourfilters').show();
    }
    else {
      $('#colourfilters').hide();
    }
    if (settings.videochoice == 'true' || settings.videochoice== true) {
        $('#videocontainer').show();
    }
    else {
      $('#videocontainer').hide();
    }
    if (settings.borders == 'true' || settings.borders== true) {
        $('#border-opts').show();
    }
    else {
      $('#border-opts').hide();
    }
    if (settings.buttons == 'true' || settings.buttons == true) {
        $('#button-on').show();
    }
    else {
      $('#button-on').hide();
    }
    if (settings.endparagraphmob == 'true' || settings.endparagraphmob == true) {
        $('#end-mobile').show();
      }
      else {
        $('#end-mobile').hide();
      }
      if (settings.mobilelayout == 'true' || settings.mobilelayout == true) {
          $('#mobilelayout').show();
        }
        else {
          $('#mobilelayout').hide();
        }
    if (settings.colourfiltersend == 'true' || settings.colourfiltersend == true) {
        $('#filters-end').show();
    }
    else {
      $('#filters-end').hide();
    }
//new-ui
    transition_type = get_transition_type(settings.transition);

    if (transition_type == 'codyhouse' || transition_type == 'codyhouse2' || transition_type == 'codyhouse3' || transition_type == 'codyhouse4' || transition_type == 'codyhouse5' || transition_type == 'codyhouse6') {

        $('.drillaccordionlink5').html('Transition Color');
        show_button_link(textbtnb, false);
        $(".text-align").hide();
        //$("#videoAccordion").removeClass('display-none');
        $("#videocontainer").show();
        $("#layoutsettings").hide();
        //$(".tabs-menu div:nth-of-type(6)").show();//new-ui
        //$(".tabs-menu div:nth-of-type(5)").show();
      //  $(".tabs-menu div:nth-of-type(4)").show();//new-ui
        $('.trans-color-container').show();
        $('#trigger_icon_option').hide();
        $('#videochoice').show();//new-ui
        $('videolabel').show();//new-ui

         //new-ui
    } else if (transition_type == 'trad') {
        $('.design-animation-dropdown').show();
        //$(".tabs-menu div:nth-of-type(6)").show();
      //  $(".tabs-menu div:nth-of-type(5)").show();//new-ui
      //  $(".tabs-menu div:nth-of-type(4)").show();//new-ui
        if (settings.transition == 'zoom' || settings.transition == 'unzoom') {
            $('.drillaccordionlink5').html('Zoom Level');
        } else if (settings.transition == 'blur' || settings.transition == 'unblur') {
            $('.drillaccordionlink5').html('Blur Level');
        } else if (settings.transition == 'opaque' || settings.transition == 'unopaque') {
            $('.drillaccordionlink5').html('Opacity Level');
        } else if (settings.transition == 'slide') {
            $('.drillaccordionlink5').html('Direction');
        }
        hideshow_SubtextBtn(allowSubtextBtn);
        $("#trans_color_link").hide();
        $('.text-animation-on').show();
        $('#trigger_icon_option').hide();
        $('#videocontainer').hide();
        $("videolabel").hide();
        $("videochoice").hide();
    } else if (transition_type == 'ap1') {

        var hidectrlAp1 =
        [
            'textbtn-allowlink','choose_effect_container','text-animation-delay-off','text-animation-delay-on',
            'textbtn-off','textbtn-on','text-on','image-zoom-off','image1','zoom-duration-on','videocontainer',
            'text-animation-off','text-animation-on','trigger_icon_option'
        ];
        for (key in hidectrlAp1) {
            $('#' + hidectrlAp1[key]).hide();
        }
      //  $('.drillaccordionlink5').html('Line Color');
        $('.img-back-color-on').hide();
        $(".reset-btn-text").hide();
        $('.text-off').show();
        $('#image0').show();
        $('#overlay-off').show();
        $("#image-zoom-off").show();
        globaltabsCodArt();

    } else if (transition_type == 'codrops') {
        //$("#videoAccordion").addClass('display-none');new-ui
        $("#videocontainer").hide();
        $("videolabel").hide();
        $("videochoice").hide();
        $("#borderandline1").addClass('display-none');
        $(".allowbuttons").removeClass('display-none');
        $('.drillaccordionlink5').html('Line Color');
      //  $(".tabs-menu div:nth-of-type(6)").show();//new-ui
        //$(".tabs-menu div:nth-of-type(5)").show();
        //$(".tabs-menu div:nth-of-type(4)").show();//new-ui
        $("#image-zoom-on").show();
        $("#textbtn-radius-on").hide();
        $('#overlay-off').hide();
        $('#trigger_icon_option').hide();
        globaltabsCodArt();
    }
    else if(transition_type == 'cooltips'){
        $('#triggerbackgroundcolor').hide();
        var hideCooltipsId =
        [
            'trans-color-container','header-trancolor','trancolor','videocontainer','corner-controls','layoutsettings', 'resetbtn_end','text-align-off',
            'resetbtn_start','text-align-on','mobileparagraphsize', 'mobilebuttonsize','text-animation-delay-on',
            'text-animation-delay-off','text_start_end','start_text_label','mobile-text-level','end_text_label',
            'border-size','mobilefontsize','start-end-toggle','start_end_toggle_level','settings_trigger_level',
            'start-end-toggle2','design_start_end','textbtn-allowlink','images_filter_option','text-animation-off',
            'colourfilters', 'show-layout', 'layout-options', 'color-filter-label','colour-filter-start','colour-filters-end',//new-ui
            'videochoice','buttons','end-paragraph-mob','mobile-borders'//new-ui
        ];
        var showCooltipCntrl = [
            'cooltip_text_label','cooltipscolor-opacity','start_tab_text_section','cooltips-imgfilter-label','triggerchoice',
            'tootltipsettings','tooltip-heading','trigger-heading','tooltip_btn_mouseout','trigger_font_container',
            'trigger_font_container-mob','cooltipbordersize','cooltips_color',"cooltiplabel"
        ]
        for (key in hideCooltipsId) {
            $('#' + hideCooltipsId[key]).hide();
        }
        for (key in showCooltipCntrl) {
            $('#' + showCooltipCntrl[key]).show();
        }

        if(settings.triggerchoice==2){
            $('#triggericoncolorcontainer').show();
            $('#trigger-heading').hide();
        }
        if(settings.triggerchoice==1){
            $('#trigger-heading').show();
            $('#triggericoncolorcontainer').hide();
        }
        if(settings.triggerchoice==3){
            $('#trigger-heading').show();
            $('#triggericoncolorcontainer').show();
        }
        if(settings.triggerbgoption==true || settings.triggerbgoption=='true'){
            $('#triggerbackgroundcolor').show();
        }
        $(".textbtn-tab").hide();
        $(".img-filter-label").hide();
        $(".design_start_tab").hide();
        //$(".tabs-menu div:nth-of-type(6)").show();//new-ui
    }

    // else if(transition_type == 'weather'){
    //     var hideRipplesId =  ['videocontainer','trans_color_link','mobileparagraphsize','mobilefontsize','textbtn-allowlink',
    //     'text-animation-delay-off','start_end_toggle_level','start_textsection_label','resetbtn_start','layoutsettings','end-tab',
    //     'textbtn-allowlink-container','text-align-off','start_text_label','choose_effect_container','settings_trigger_level'];
    //     for (key in hideRipplesId) {
    //         $('#' + hideRipplesId[key]).hide();
    //     }
    //     $('.images_filter').hide();
    //     $("#button_color_link").show();
    //     $("#button_text_container").show();
    //     $("#textbtn-font-off label").text('Button Text');
    //     $('#trigger_icon_option').hide();
    //     $(".allowbuttons").addClass('display-none');
    //
    // }
    //


    else if(transition_type == 'distortion'){
        var hidedistortionId =  ['color-filterlevel-end','image-zoom-on','color-filter-label','text-animation-delay-on','mobile-text-level','mobilebuttonsize',
        'trans_color_link','image-zoom-off','image-zoom-on','text-animation-off','text-animation-on','borderandline1','videocontainer','trigger_icon_option',
        'mobileparagraphsize','mobilefontsize','textbtn-allowlink','trans-color-container', 'borders','videochoice','videolabel',"layout-options",
        'text-animation-delay-off','start_end_toggle_level','start_textsection_label','resetbtn_start','layoutsettings','colour-filter-start',
        'textbtn-allowlink-container','text-align-off','start_text_label','choose_effect_container','settings_trigger_level','choose_effect_container'];
        for (key in hidedistortionId) {
            $('#' + hidedistortionId[key]).hide();
        }
        $('.text-animation-off').hide();
        $(".tabs-menu div:nth-of-type(5)").hide();
        // $('showhidetext').show();
        // $('show-hide-text').show();
        // $('show-hide-font').show();
        // $('#end-text').show();
    }
    else if(transition_type == 'tilter'){
        var hidetilterId =  ['color-filterlevel-end','image-zoom-on','color-filter-label','text-animation-delay-on','mobile-text-level','mobilebuttonsize','trans_color_link','image-zoom-off','image-zoom-on','text-animation-off','text-animation-on','borderandline1','videocontainer','trigger_icon_option','mobileparagraphsize','mobilefontsize','textbtn-allowlink',
        'text-animation-delay-off','start_end_toggle_level','start_textsection_label','resetbtn_start','layoutsettings',
        'textbtn-allowlink-container','text-align-off','start_text_label','choose_effect_container','settings_trigger_level','choose_effect_container'];
        for (key in hidetilterId) {
            $('#' + hidetilterId[key]).hide();
        }
        $('.text-animation-off').hide();
        $(".tabs-menu div:nth-of-type(6)").show();//new-ui
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
    if (isPremium) {
        $('#linktarget input[value=new]').attr("disabled", false);
    } else {
        $('#linktarget input[value=new]').attr("disabled", true);
    }

    /****If image is not showing then background hide*******/
    var effectTypeArr  = ['ap1','cooltips','distortion','tilter'];
    if (settings.image0[0] != undefined && transition_type != 'codrops') {

	   if (settings.image0.length > 0) {
			var img0Ext = "";
			if(settings.image0[0].relativeUri!=undefined){
				 img0Ext = settings.image0[0].relativeUri.split('.').pop();
			}
            if(img0Ext!='png'){
                $("#background-colour-off").hide();
            }

            if($.inArray(settings.transitiontype, effectTypeArr )=== -1){
                $('#image-zoom-off').show();
            }
        }
    }
     /****If image is not showing then background hide*******/
    if (settings.image0[0] == undefined) {
        if(settings.transitiontype!='cooltips'){
            $("#background-colour-off").show();
        }
    }

    var effectTypeZoomArr  = ['ap1','distortion','tilter'];
    if (settings.image1[0] != undefined) {
		var img1Ext = "";
        if (settings.image1.length > 0) {
			if(settings.image1[0].relativeUri!=undefined){
				img1Ext = settings.image1[0].relativeUri.split('.').pop();
			}
            if(img1Ext!='png'){
                $("#background-colour-on").hide();
            }
            if($.inArray(settings.transitiontype, effectTypeZoomArr )=== -1){
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
        if (settings.transition_type != 'codrops') {
           $('.zoom-duration-off').show();
        }
   }  else {
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
        $(".auto-resizable-iframe").show();
    }else{
        $('.video_trigger_enable').addClass('hide');
        $(".auto-resizable-iframe").hide();
        if (transition_type!= 'ap1'){
            $('#choose_effect_container').show();
        }
    }

    /****Zoom Slider Show only for romeo effect */
    if(settings.transition=='romeo'){
        $('#zoom_arisian').show();
    }
    /****Zoom Slider Show only for romeo effect */
    /***if(settings.is_active==1){
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
        $('.selected_effect_type').removeClass('hide');
        $('.selected_effect_type label span:nth-child(3)').text(effectPack);
    }***/

    if(settings.transitiontype!="cooltips"){
        $("#cooltips_color_link").hide();
          $("#cooltips_color").hide();
    }

    if(settings.textbtnb == 'false' || settings.textbtnb == false || settings.textbtnb == 0){
        $("#settings_triggerlink_container").hide();
    }
    triggerBtnShowHide();

    first_load = 1;
}
