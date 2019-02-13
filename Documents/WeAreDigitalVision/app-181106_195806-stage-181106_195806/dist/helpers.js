/*---------------------------------------------------------*/
/* Check blank strings
/*---------------------------------------------------------*/
function isBlank( str ) {
  return str===null || str===undefined || str.toString().trim()==='';
}

/*---------------------------------------------------------*/
/* Trigger update - DONT KNOW IF WE NEED THIS ANYMORE
/*---------------------------------------------------------*/
function onUpdate(key, value) {
  var origCompId = Wix.Utils.getOrigCompId();
  //Wix.Settings.triggerSettingsUpdatedEvent({key: key, value: value}, origCompId);
}

/*---------------------------------------------------------*/
/* On initial load
/*---------------------------------------------------------*/
function initial_load(value){

  if(!value){
    $( ".tabs-menu div:nth-of-type(3)" ).hide();
    $( ".tabs-menu div:nth-of-type(4)" ).hide();
    $( ".tabs-menu div:nth-of-type(5)" ).hide();
    $( ".tabs-menu div:nth-of-type(6)" ).hide();
  }else{
    $( ".tabs-menu div:nth-of-type(3)" ).show();
    $( ".tabs-menu div:nth-of-type(4)" ).show();
    $( ".tabs-menu div:nth-of-type(5)" ).show();
    $( ".tabs-menu div:nth-of-type(6)" ).show();
  }
}

function hideshow_effect(val, wasClicked){
  settings.effectcat = val;

  $('.mydrilldown.select-effect').hide();
  $('.mydrilldown.select-effect[data-cat=' + val + ']').show();

    $('.select-effect-type, #transitions').show();
    $('#corner-controls').show();

  // Scroll to the effect section after selecting an effect type
  setTimeout(function() {
    $('.inner-container').animate({
      scrollTop: $("#select-effect").offset().top
    }, 400);
  }, 200);
}

function hideshow_SubtextBtn(showSubtextBtn){

  if(showSubtextBtn == true || showSubtextBtn == 'true'  || showSubtextBtn == 1){
    $('.textbtn-tab').show();
    $('.textbtn-tablink').show();
   // $('.textbtn-allowlink').show();
    $('.textbtn-off').show();
    $('.textbtn-on').show();
    $('.subtext-on').show();
    $('.subtext-font-on').show();
    $('.subtext-colour-on').show();
    $('.subtext-off').show();
    $('.subtext-font-off').show();
    $('.subtext-colour-off').show();
    $('#subtext-on').show();
    $('#subtext-font-on').show();
    $('#subtext-colour-on').show();
    $('#subtext-off').show();
    $('#subtext-font-off').show();
    $('#subtext-colour-off').show();
  }else{
    $('.textbtn-tab').hide();
    $('.textbtn-tablink').hide();
   // $('.textbtn-allowlink').hide();
    $('.textbtn-off').hide();
    $('.textbtn-on').hide();
    $('.subtext-on').hide();
    $('.subtext-font-on').hide();
    $('.subtext-colour-on').hide();
    $('.subtext-off').hide();
    $('.subtext-font-off').hide();
    $('.subtext-colour-off').hide();
    $('#subtext-on').hide();
    $('#subtext-font-on').hide();
    $('#subtext-colour-on').hide();
    $('#subtext-off').hide();
    $('#subtext-font-off').hide();
    $('#subtext-colour-off').hide();
  }
}

function show_button_style(value){
  //textbtna = value
  if(value == 'true' || value == true){
    $('.textbtn-tab').show();
  }else{
    $('.textbtn-tab').not('.textbtn-allow').hide();
    $('.textbtn-tab.textbtn-notallow').hide();
  }
}

function show_button_link(value){
  textbtnb = value
  if(value == 'true' || value == true){
    $('.textbtn-tablink').show();
  }else{
    $('.textbtn-tablink').not('.textbtn-allow').hide();
    $('.textbtn-tablink.textbtn-notallow').hide();
  }
}

function show_lock_style(value){
  sticky = value
  saveAndRefresh();
}

/*---------------------------------------------------------*/
/* Select transition pack
/*---------------------------------------------------------*/
function selectTransition(pick_tran){
  var oldTransition=rollovers[settings.transition];
  settings.transition = pick_tran;
  var newTransition=rollovers[settings.transition];
  if (oldTransition && newTransition) {
    var oldHeadings=oldTransition.usesHeadings;
    var newHeadings=newTransition.usesHeadings;
    if (oldHeadings!==newHeadings) {
      if (oldHeadings) {
        if (isBlank(settings.text0)) {
          settings.text0=settings.heading0;
        }
        if (isBlank(settings.text1)) {
          settings.text1=settings.subheading0;
        }
        if (isBlank(settings.headingp0)) {
          settings.headingp0=settings.headingp;
        }
      } else {
        if (isBlank(settings.heading0)) {
          settings.heading0=settings.text0;
        }
        if (isBlank(settings.subheading0)) {
          settings.subheading0=settings.text1;
        }
        if (isBlank(settings.headingp0)) {
          settings.headingp0=settings.headingp;
        }
      }
    }

    // Reload widget if user selects a codrops transition
    if(pick_tran == "waveup-transition" || pick_tran == "paintup-transition" || pick_tran == "gumup-transition" || pick_tran == "pixelup-transition") {
      $('#header-trancolor, #image0').hide();

      Wix.Settings.refreshAppByCompIds([Wix.Utils.getOrigCompId()]);
    }
    
    reflectSettings();
  }

  if (pick_tran=='special') {
    $('#border-size').getCtrl().setValue('2') ;
  }

  reflectTransition();
  saveAndRefresh();
}

function special_designtab(transitiontype){
  if(transitiontype == 'special'){
    $('#design_drill ul').addClass('display-none');
    $('#design_drill .drillaccordioncontent').addClass('display-block');
    $('.specialhide').addClass('display-none');
  }else{
    $("#header-trancolor").show();
    $("#trancolor").show();
    $('#design_drill ul').removeClass('display-none');
    $('#design_drill .drillaccordioncontent').removeClass('display-block');
    $('.specialhide').removeClass('display-none');
  }
}

// Add and remove active classes to transition thumbnails in settings
function reflectTransition() {
  $('.transition').removeClass('myselected');
  $('#transition-'+settings.transition).addClass('myselected');
  var rollover = rollovers[settings.transition];
  if (rollover) {
    var subheadingLabel=rollover.subheadingOffLabel || 'Subheading font:';
  }
}

function transition_type_temp(transition_value){
  if(transition_value){
    $( ".tabs-menu div:nth-of-type(4)").show();
    $( ".tabs-menu div:nth-of-type(5)" ).show();
    transition_type = get_transition_type(transition_value);
    if (transition_type == 'trad') {
        reset_start_end_toggle();
        $( ".tabs-menu div:nth-of-type(4)" ).show();
    }
    else if(transition_type == 'codyhouse'){
        reset_start_end_toggle();
    }else if(transition_type == 'ap1'){
        reset_start_end_toggle();
        $( ".tabs-menu div:nth-of-type(4)" ).show();
        $(".tabs-menu div:nth-of-type(5)").show();
        $(".tabs-menu div:nth-of-type(6)").show();
    }else if(transition_type == 'trad'){
      reset_start_end_toggle();
    }
  }else{
    reset_start_end_toggle()
  }
}

function get_transition_type(transition_value){
  var transition_type = '';
  if(transition_value){
    transition_type = $(".mythumb.transition[value='" + transition_value + "']").data('category');
  }

  if(transition_value == 'waveup-transition' || transition_value == 'paintup-transition' || transition_value == 'gumup-transition' || transition_value == 'pixelup-transition') {
    $('.ctlTransColor, #image0').hide();
  } else {
      
    if(transition_type=="codyhouse"){
        $('#image0').show();
        $("#image-zoom-off").show();
        $('#overlay-off').show();	
    }

    $('.ctlTransColor, #image0').show();
  }

  return transition_type;
}

/*---------------------------------------------------------*/
/* Color functions
/*---------------------------------------------------------*/
function getColorWithOpacity( elemId ) {
  var color=$(elemId+' .color-picker-color').css( "background-color" );
  var opacity=$(elemId+' .color-picker-color').css( "opacity" );
  var result=color.replace('rgb','rgba').replace(')',','+opacity+')');
  return result;
}

function rgbToHex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 'rgb(' +  parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')'  : null;
}

function hexToRgba(hex,op) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 'rgba(' +  parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ',' + op + ')'  : null;
}

/*---------------------------------------------------------*/
/* Refresh images
/*---------------------------------------------------------*/
function image_trigger(element_id, imgdata){

  if(element_id == 'image0'){
    noimage0 = false;
  }else if(element_id == 'image1'){
    noimage1 = false;
  }
  $($('#' + element_id + ' button')[1]).show();
  if($('#' + element_id).getCtrl().getValue()){
    this['reimg_' + element_id] = false;
    saveAndRefresh();
  }
}

function reimage_trigger(element_id){
  if(element_id == 'image0'){
    noimage0 = true;
  } else if(element_id == 'image1'){
    noimage1 = true;
  }
  this['reimg_' + element_id] = true;
  $('#' + element_id).getCtrl().setValue([]);
  $($('#' + element_id + ' button')[1]).hide();

  saveAndRefresh();
}

/*---------------------------------------------------------*/
/* Toggle start and end states
/*---------------------------------------------------------*/
function design_start_end_toggle(value){
  if(value == 1){
    $('.end-tab-container').hide();
    $('.start-tab-container').show();
    $('#design-button-start').show();
    $('#design-button-end').hide();
  }else{
    $('.start-tab-container').hide();
    $('.end-tab-container').show();
    $('#design-button-start').hide();
    $('#design-button-end').show();
  }
}

function reset_start_end_toggle() {
  $('.end-tab-container').hide();
  $('.start-tab-container').show();
  $('#design-button-start').show();
  $('#design-button-end').hide();
  var $toggleButtons = $("#start-end-toggle").getCtrl();
  $toggleButtons.setValue('1');
}

/*---------------------------------------------------------*/
/* Email functions
/*---------------------------------------------------------*/
function enableSend() {
  var email = $('#inputemail input').val();
  var message = $('#inputmessage textarea').val();

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var emailGood = re.test(email);
  var messageGood = message.match(/.+/);

  if (emailGood && messageGood) {
    $('#buttonsend button').attr('disabled',null);
  } else {
    $('#buttonsend button').attr('disabled','disabled');
  }
  var instanceId = Wix.Utils.getInstanceId();
  
  return {
    email : email,
    message: message,
    instance:instanceId
  }
}

function send() {
  var msg = enableSend();

  $.ajax({
    type: "POST",
    url: 'send',
    data: msg,
    success: function(result) {
      $('#formsend').hide();
      $('#msgsent').show();
    }
  });
  
}
