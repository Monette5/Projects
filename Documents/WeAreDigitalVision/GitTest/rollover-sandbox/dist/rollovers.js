/*
 *  This file defines all effects and their behaviour.  Each effect has its own attribnutes defined in these objects
 *
 *  key - name of effect in code (must be unique).
 *   name - Displayed name of effect
 *   menus - defines what menus to show for each effect, note that entire tabs can be shown/hidden. effect-tab is never hidden.
 *           Usage example - menu: ['start-tab', 'imageOff', 'opcaity'] will show the effect-tab and the filter options, along with the start-tab
 *           with the image selection and opacity menus only. All other tabs and options will not be displayed.
 *           Menu options are as follows:
 *             'effect-tab' - 'peranent-effect', 'opacity', 'blur', 'zoom', 'twist', 'direction',
 *             'start-tab'  - 'imageOff', 'background-colour-off', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off',
 *             'end-tab'    - 'imageOn', 'background-colour-on', 'text-align-on', 'text-off', 'text-font-off', 'text-colour-off'
 *             'link-tab'   - 'link', 'link1', 'link2', 'link3', 'link4'
 *   on_load - Provides an oppertunity to do any DOM manipulation/preperation for the effect
 *   animation_script_on - Any custom code/hacks needed for the rollover (in/hover) transition. i.e. anything the CSS animations arnt handaling on their own
 *   animation_script_off - same as animation_script_on but for out/unhover
 *   premium - flag for premium or not
 *   display_method - manages legacy/selects what format to display the effect in
 */

var rollovers = {

    'codrops': {
         html: 'Codrops',
         visible: true
     },
     'waveup-transition': {
         id: 'waveup-transition',
         name: 'Wave',
         menus: ['text-animation-on','text-animation-off','peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
             'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
         ],
         on_load: function(data) {
             default_codrops_on_load(data);
         },
         animation_script_on: function(data) {
             default_codrops_on(data);
         },
         animation_script_off: function(data) {
             default_codrops_off(data);

         },
         premium: true,
         visible: true,
         display_method: 'codrops'

     },
     'paintup-transition': {
         id: 'paintup-transition',
         name: 'Paint',
         menus: ['text-animation-on','text-animation-off','peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
             'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
         ],
         on_load: function(data) {
             default_codrops_on_load(data);
         },
         animation_script_on: function(data) {
             default_codrops_on(data);
         },
         animation_script_off: function(data) {
             default_codrops_off(data);

         },
         premium: true,
         visible: true,
         display_method: 'codrops'

     },

     'gumup-transition': {
             id: 'gumup-transition',
             name: 'Gum',
             menus: ['text-animation-on','text-animation-off','peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codrops_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codrops_on(data);
             },
             animation_script_off: function(data) {
                 default_codrops_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'codrops'

     },

     'pixelup-transition': {
             id: 'pixelup-transition',
             name: 'Pixel',
             menus: ['text-animation-on','text-animation-off','peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codrops_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codrops_on(data);
             },
             animation_script_off: function(data) {
                 default_codrops_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'codrops'

     },

     'codyhouse': {

             html: 'Transition Pack',
             visible: true

         },
         'gooey-transition': {
             id: 'gooey-transition',
             name: 'Gooey',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'scrub-transition': {
             id: 'scrub-transition',
             name: 'Scrub',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'scribble-transition': {
             id: 'scribble-transition',
             name: 'Scribble',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'mirror-transition': {
             id: 'mirror-transition',
             name: 'Mirror',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'kaleidoscope-transition': {
             id: 'kaleidoscope-transition',
             name: 'Kaleidoscope',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'gummy-transition': {
             id: 'gummy-transition',
             name: 'Gummy',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },

         'glitch-transition': {
             id: 'glitch-transition',
             name: 'Glitch',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'extinguisher-transition': {
             id: 'extinguisher-transition',
             name: 'Smoke',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'diamond-transition': {
             id: 'diamond-transition',
             name: 'Diamond',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'clones-transition': {
             id: 'clones-transition',
             name: 'Clones',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'cartoon-transition': {
             id: 'cartoon-transition',
             name: 'Cartoon',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },

         'ink-transition': {
             id: 'ink-transition',
             name: 'Ink',
             menus: ['peranent-effect', 'start-tab', 'imageOff', '_text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', '_text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'trancolor', 'colorfilter-on', 'subtext-font-on', 'subtext-colour-on', 'overlay-on', 'overlay-off', 'subtext-off', 'subtext-font-off', 'subtext-colour-off'
             ],
             on_load: function(data) {
                 default_codyhouse_on_load(data);
             },
             animation_script_on: function(data) {
                 default_codyhouse_on(data);
             },
             animation_script_off: function(data) {
                 default_codyhouse_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'codyhouse'
         },
         'codyhouse2': {
             html: 'Transition Pack 2',
             visible: true
         },
         'ap1': {
             html: 'Artisan Pack',
             visible: true
         },
         'apollo': {
             id: 'apollo',
             name: 'Jasmine',
             usesHeadings: true,
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect','textbtn-off', 'textbtn-on','textbtn-tab'
             ],
             on_load: function(data) {
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-apollo');
                 default_figure_on_load(data);
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text jasmine-effect'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 $('figure.effect-apollo').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-apollo').removeClass('hover');
                 $('#figure-overlay-on').hide();
                 $('#figure-overlay-off').show();
             },
             premium: true,
             copyTextColor: true,
             display_method: 'figure',
             visible: true,

         },
         'marley': {
             id: 'marley',
             name: 'Kayla',
             usesHeadings: true,
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect','textbtn-off', 'textbtn-on','textbtn-tab'
             ],
             on_load: function(data) {

                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');

                 // Add the effect too it
                 container.removeClass().addClass('effect-marley');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text Razi'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 $('figure.effect-marley').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-marley').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             visible: true,
             premium: true,
             copyTextColor: true,
             display_method: 'figure'
         },
         'romeo': {
             id: 'romeo',
             name: 'Emily',
             usesHeadings: true,
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-romeo');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p id='p-text' class='figure-text'>" + text_content.content + "</p></div>");

                 function autoPad() {
                     var h2height = fontSizes.h2;
                     var pheight = fontSizes.p;
                     var wheight = $(window).height();
                     var h2top = (wheight / 2);

                     $('h2').css('top', h2top + 'px');

                     var ptop = (wheight / 2);

                     $('p').css('top', ptop + 'px');
                 }

                 default_figure_off_text_style(data, autoPad);
                 autoPad();
             },
             animation_script_on: function(data) {
                 $('figure.effect-romeo').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-romeo').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             copyTextColor: true,
             display_method: 'figure'
         },
         'jazz': {
             id: 'jazz',
             name: 'Lucie',
             usesHeadings: true,
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-jazz');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");



                 function autoPad() {
                     var wheight = $(window).height();
                     var winner = wheight - ($('#figcaption > div').height() + 10);
                     var padtop = parseInt(winner / 2);

                     $('figure.effect-jazz figcaption > div').css('padding-top', padtop + 'px');
                 }

                 default_figure_off_text_style(data, autoPad);
                 setTimeout(autoPad, 2000);
             },
             animation_script_on: function(data) {
                 $('figure.effect-jazz').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-jazz').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             copyTextColor: true,
             display_method: 'figure',
             pack: 'Single Image Accent Pack 2'
         },
         'moses': {
             id: 'moses',
             name: 'Misty',
             usesHeadings: true,
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {

                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-moses');
                 default_figure_on_load(data);
                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2 id='moses_h2' class='figure-text'>" + text_content.title + "</h2><p id='moses_p' class='figure-text'>" + text_content.content + "</p>");
                 default_figure_off_text_style(data);
                 // resize the boxes
                 var padding = content_container.css('padding'),
                     width = content_container.width(),
                     height = content_container.height(),
                     box_border = 4;
                 padding = padding.replace('px', '');
                 var box_width = (width - ((parseInt(padding) + box_border) * 2)) / 2,
                     box_height = (height - ((parseInt(padding) + box_border) * 2)) / 2
                     //$('#moses_h2').css({'height':box_height, 'width':box_width});
                     //$('#moses_p').css({'height':box_height, 'width':box_width});
             },
             animation_script_on: function(data) {
                 $('figure.effect-moses').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-moses').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             display_method: 'figure'
         },
         'julia': {
             id: 'julia',
             name: 'Julia',
             usesHeadings: true,
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-julia');
                 var text_content = default_figure_span_content(data, null, '</p><p>');
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 $('figure.effect-julia').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-julia').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             display_method: 'figure'
         },
         'roxy': {
             id: 'roxy',
             name: 'Lauren',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 //default_figure_on_load(data);

                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image'),
                     overlay_on = $('#figure-overlay-on'),
                     overlay_off = $('#figure-overlay-off');
                 var width = $(window).width(),
                     height = $(window).height();

                 container.removeClass().addClass('effect-roxy');

                 var superWidth = width + 60;

                 container.width(superWidth);
                 container.height(height);

                 if (data.image0 && data.image0 != null && data.image0 != "") {
                     setTimeout(function() {
                         var src0 = Wix.Utils.Media.getResizedImageUrl(data.image0[0].relativeUri, superWidth, height);
                         image.attr("src", src0);
                         image.css('width', superWidth + 'px');
                     }, 0);

                 }

                 overlay_on.width(width);
                 overlay_on.height(height);
                 overlay_off.width(width);
                 overlay_off.height(height);

                 apply_gradients(data);


                 // Sometimes the padding is causing issues, I need to resize things to match the padding.
                 // But more importantly the passing is sometimes too big

                 // Add the effect too it

                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p>");

                 //resize_figure_padding(width,height);
                 var padding = content_container.css('padding').replace("px", "");
                 content_container.width(width - (padding * 2));
                 content_container.height(height - (padding * 2));

                 default_figure_off_text_style(data, function() {
                     $('#figure h2').css('padding-top', ((height - 120 - $('h2.figure-text').height()) / 2) + 'px');
                 });
             },
             animation_script_on: function(data) {
                 $('figure.effect-roxy').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-roxy').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             display_method: 'figure'
         },

         'lexi': {
             id: 'lexi',
             name: 'Klara',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             subheadingOffLabel: 'Subheading font (size is fixed):',
             on_load: function(data) {

                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');

                 container.removeClass().addClass('effect-lexi');
                 default_figure_on_load(data, { skipPadding: true, skipGrid: true, imageHeightPlus: 10, imageWidthPlus: 10 });
                 var width = $(window).width(),
                     height = $(window).height();

                 var superWidth = width + 10;

                 container.width(superWidth);
                 container.height(height);

                 /*
                 content_container.width(width);
                 content_container.height(height);
                 */

                 if (data.image0.relativeUri && data.image0.relativeUri != '') {

                     setTimeout(function() {
                         image.attr("src", Wix.Utils.Media.getResizedImageUrl(data.image0.relativeUri, superWidth, height));
                         image.css('width', superWidth + 'px');
                     }, 0);

                 }



                 // Add the effect too it

                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 $('figure.effect-lexi').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-lexi').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             display_method: 'figure'
         },
         'sadie': {
             id: 'sadie',
             name: 'Angela',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             copyTextColor: true,
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure');
                 var content_container = $('#figcaption');
                 var image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-sadie');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><center><h2 class='figure-text'>" + text_content.title + "</h2><p id='p-text' class='figure-text'>" + text_content.content + "</p></center></div>");

                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 $('figure.effect-sadie').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-sadie').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             visible: true,
             display_method: 'figure'
         },
         'winston': {
             id: 'winston',
             name: 'Grace',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-winston');
                 //var text_content = default_figure_span_content(data);
                 content_container.html("<h2 class='figure-text'>" + parseText(data.text0) + "</h2><p class='figure-text'>" + addSocialButtons(data, 5) + "</p>"); //+text_content.content+"</p>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 var borderRight = $(window).width() + 'px solid transparent',
                     borderBottom = $(window).height() / 3 + 'px solid white';
                 $('#figure-overlay-on').css({
                     position: 'absolute',
                     width: '0',
                     height: ($(window).height() / 3) * 2,
                     'border-bottom': borderBottom,
                     'border-left': borderRight,
                     transition: '1s'
                 });

                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();

             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure',
             pack: 'Single Image Accent Pack 2'
         },
         'lili': {
             id: 'lili',
             name: 'Lili',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure');
                 var content_container = $('#figcaption');
                 var image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-lily');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p>");
                 $(content_container).width($(content_container).width() - ($(content_container).css('padding-left').replace('px', '') * 2));
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure',
         },
         'honey': {
             id: 'honey',
             name: 'Honey',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-honey');
                 var text_array = data.text0.split('\n'),
                     text_title = '',
                     text_content = '';
                 if (text_array.length > 0) {
                     // style the title
                     text_title = style_line(text_array[0], { '1': 'span', '-1': 'i' });
                 }
                 content_container.html("<center><h2 id='honey-d' class='figure-text'>" + text_title + "</h2></center>");

                 $('#honey-d').width($('#honey-d').width() - ($('#honey-d').css('padding-left').replace('px', '') * 2));
                 //$(content_container).width($(content_container).width()-($(content_container).css('padding-left').replace('px', '')*2));
                 //$(content_container).css('padding', '0px')

                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 $('figure.effect-honey').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 $('figure.effect-honey').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'layla': {
             id: 'layla',
             name: 'Britney',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-layla');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><center><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></center></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure').addClass('hover');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure').removeClass('hover');
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'zoe': {
             id: 'zoe',
             name: 'Zoe',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link', 'peranent-effect'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 $('#container').removeClass('grid');
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-zoe-custom');
                 var text_content = default_figure_span_content(data);

                 content_container.html("<div id='lower-topover'><h2 class='figure-text'>" + text_content.title + "</h2></div>" +
                     "<p id='figure-text' style='text-align:center;padding-left:40px;padding-right:40px' class='figure-text description'>" + text_content.content + "</p>");

                 var figCapHeight = $('#figure').height() * 0.6;
                 $('#lower-topover').css({
                     position: 'absolute',
                     width: '100%',
                     //height: '',
                     background: 'white',
                     bottom: figCapHeight * -1,
                     transition: '1s'
                 });

                 $('#figure').hover(function() {
                     $('#lower-topover').css({ bottom: '0', transition: '1s' });
                 }, function() {
                     $('#lower-topover').css({
                         bottom: figCapHeight * -1,
                         transition: '1s'
                     });
                 });

                 $('#figure-text').css({
                     position: 'absolute',
                     width: '100%',
                     bottom: figCapHeight * -1,
                     transition: '1s'
                 });

                 var space = ((figCapHeight - $('#lower-topover').height()) * 0.6) + $('#lower-topover').height();
                 $('#figure').hover(function() {
                     $('#figure-text').css({ bottom: space, transition: '1s' });
                 }, function() {
                     $('#figure-text').css({ bottom: figCapHeight * -1, transition: '1s' });
                 });

                 $('#figcaption').css('padding', 0);

                 $('#figure-text').width($(window).width() - 80);

                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figcaption').height('20%');
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'oscar': {
             id: 'oscar',
             name: 'Catherine',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 //TODO oscar is missing its rainbow overlay and its sitting off centre like all the others
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-oscar');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><center><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></center></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'ruby': {
             id: 'ruby',
             name: 'Ruby',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-ruby');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<center><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></center>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'bubba': {
             id: 'bubba',
             name: 'Budda',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-bubba');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<center><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></center>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'dexter': {
             id: 'dexter',
             name: 'Dexter',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-dexter');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'sarah': {
             id: 'sarah',
             name: 'Daisy',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-sarah');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'chico': {
             id: 'chico',
             name: 'Chico',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-chico');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'milo': {
             id: 'milo',
             name: 'Milo',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-milo');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'goliath': {
             id: 'goliath',
             name: 'Goliath',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-goliath');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2 class='figure-text'>" + text_content.title + "</h2><p id='goliath-text' class='figure-text'>" + text_content.content + "</p>");
                 default_figure_off_text_style(data);
                 $('#goliath-text').css({ 'background-color': '#f66', 'width': $(window).width() - ($('#goliath-tex').css('padding') * 2) });
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();


             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'hera': {
             id: 'hera',
             name: 'Faith',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-hera');

                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + addSocialButtons(data, 10) + "</p>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure',
             pack: 'Single Image Accent Pack 2'
         },
         'selena': {
             id: 'selena',
             name: 'Selena',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-selena');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<center><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></center>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'terry': {
             id: 'terry',
             name: 'Terry',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-terry');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2 id='terry-h' class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + addSocialButtons(data, 2) + "</p>"); //+text_content.content+"</p>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'phoebe': {
             id: 'phoebe',
             name: 'Pheobe',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-phoebe');
                 $('#figure-overlay-on').css({
                     'width': '0',
                     'height': '0',
                     'border-style': 'solid',
                     'border-width': '0 ' + $(window).width() / 2 + 'px ' + $(window).height() + 'px ' + $(window).width() / 2 + 'px',
                     'border-color': 'transparent transparent #aaf transparent'
                 });

                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2>" + text_content.title + "</h2><p>" + addSocialButtons(data, 10) + "</p>"); //+text_content.content+"</p>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'kira': {
             id: 'kira',
             name: 'Kira',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-kira');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + addSocialButtons(data) + "</p>"); //+text_content.content+"</p>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'steve': {
             id: 'steve',
             name: 'Steve',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-steve');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'ming': {
             id: 'ming',
             name: 'Holly',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-ming');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<div><h2 class='figure-text'>" + text_content.title + "</h2><p class='figure-text'>" + text_content.content + "</p></div>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },
         'duke': {
             id: 'duke',
             name: 'Isobel',
             menus: ['start-tab', 'imageOff', 'heading-off', 'subheading-off',
                 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading', 'line-colour-0',
                 'overlay-off', 'overlay-on',
                 'end-tab', 'link-tab', 'link'
             ],
             on_load: function(data) {
                 default_figure_on_load(data);
                 var container = $('#figure'),
                     content_container = $('#figcaption'),
                     image = $('#figure-image');
                 // Add the effect too it
                 container.removeClass().addClass('effect-duke');
                 var text_content = default_figure_span_content(data);
                 content_container.html("<center><h2 class='figure-text'>" + text_content.title + "</h2><p id='duke_p' class='figure-text'>" + text_content.content + "</p></center>");
                 default_figure_off_text_style(data);
             },
             animation_script_on: function(data) {
                 default_figure_on_text_style(data);
                 $('#figure-overlay-on').show();
                 $('#figure-overlay-off').hide();
             },
             animation_script_off: function(data) {
                 default_figure_off_text_style(data);
                 $('#figure-overlay-off').show();
                 $('#figure-overlay-on').hide();
             },
             premium: true,
             display_method: 'figure'
         },

         'trad': {

             html: 'Classic Pack',

             visible: true

         },

         'alt': {
             id: 'alt',
             name: 'Crossfade',
             menus: ['peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: false,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true,

         },
         'greyscale': {
             id: 'greyscale',
             name: 'B&amp;W &rarr; Color',
             menus: ['peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: false,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'zoom': {
             id: 'zoom',
             name: 'Popout',
             menus: ['zoom', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'unzoom': {
             id: 'unzoom',
             name: 'Popin',
             menus: ['zoom', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'flipy': {
             id: 'flipy',
             name: 'Flip Vertically',
             menus: ['peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'flipx': {
             id: 'flipx',
             name: 'Flip Horizontally',
             menus: ['peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'slide': {
             id: 'slide',
             name: 'Slide',
             menus: ['direction', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'unblur': {
             id: 'unblur',
             name: 'Blur &rarr; Sharp',
             menus: ['blur', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: false,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'blur': {
             id: 'blur',
             name: 'Sharp &rarr; Blur',
             menus: ['blur', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
             },
             premium: false,
             display_method: 'card',
             pack: 'Classic effects',
             // default_text: 'Rollover to Preview FX',
             default_text: '',
             visible: true
         },
         'opaque': {
             id: 'opaque',
             name: 'Opaque &rarr; Trans',
             menus: ['opacity', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
                 //  $('#card').css('opacity', data.opacityLevel);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
                 // $('#card').css('opacity', 1);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             default_text: '',
             visible: true
         },
         'unopaque': {
             id: 'unopaque',
             name: 'Trans &rarr; Opaque',
             menus: ['opacity', 'peranent-effect', 'start-tab', 'imageOff', 'text-align-off', 'text-off', 'text-font-off', 'text-colour-off', 'background-colour-off',
                 'end-tab', 'imageOn', 'background-colour-on', 'text-align-on', 'text-on', 'text-font-on', 'text-colour-on', 'link-tab', 'link', 'overlay-off', 'overlay-on',
                 'textbtn-tab', 'textbtn-tablink', 'textbtn-off', 'textbtn-on', 'subtext-on', 'subtext-font-on', 'subtext-colour-on', 'subtext-off', 'subtext-font-off', 'subtext-colour-off', 'allowSubtextBtn'
             ],
             on_load: function(data) {
                 default_card_on_load(data);
                 //  $('#card').css('opacity', data.opacityLevel);
             },
             animation_script_on: function(data) {
                 default_on_transition(data);
                 //   $('#image0').css('opacity', 1);
             },
             animation_script_off: function(data) {
                 default_off_transition(data);
                 //  $('#card').css('opacity', data.opacityLevel);
             },
             premium: true,
             display_method: 'card',
             pack: 'Classic effects',
             default_text: '',
             visible: true
         },

         /*******CoolTips THumbnail Items***********************/

         'cooltips': {
             html: 'Cooltips',
             visible: true
         },
         'cora': {
             id: 'cora',
             name: 'Cora',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'

         },
         'smaug': {
             id: 'smaug',
             name: 'Smaug',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'

         },

         'uldor': {
                 id: 'uldor',
                 name: 'Uldor',
                 menus: ['start-tab', 'link-tab', 'link','text-on'],
                 on_load: function(data) {
                     default_cooltips_on_load(data);
                 },
                 animation_script_on: function(data) {
                     default_cooltips_on(data);
                 },
                 animation_script_off: function(data) {
                     default_cooltips_off(data);

                 },
                 premium: true,
                 visible: true,
                 display_method: 'cooltips'

         },

         'dori': {
                 id: 'dori',
                 name: 'Dori',
                 menus: ['start-tab', 'link-tab', 'link','text-on'],
                 on_load: function(data) {
                     default_cooltips_on_load(data);
                 },
                 animation_script_on: function(data) {
                     default_cooltips_on(data);
                 },
                 animation_script_off: function(data) {
                     default_cooltips_off(data);

                 },
                 premium: true,
                 visible: true,
                 display_method: 'cooltips'

         },
         'gram': {
             id: 'gram',
             name: 'Gram',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'indis': {
             id: 'indis',
             name: 'Indis',
             menus:['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'walda': {
             id: 'walda',
             name: 'Walda',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'narvi': {
             id: 'narvi',
             name: 'Narvi',
             menus:['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'amras': {
             id: 'amras',
             name: 'Amras',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'hador': {
             id: 'hador',
             name: 'Hador',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'malva': {
             id: 'malva',
             name: 'Malva',
             menus:['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },
         'sadoc': {
             id: 'sadoc',
             name: 'Sadoc',
             menus: ['start-tab', 'link-tab', 'link','text-on'],
             on_load: function(data) {
                 default_cooltips_on_load(data);
             },
             animation_script_on: function(data) {
                 default_cooltips_on(data);
             },
             animation_script_off: function(data) {
                 default_cooltips_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'cooltips'
         },

        /*******CoolTips THumbnail Items***********************/
         'particles': {
             html: 'Particle Buttons',
             visible: true
         },
         /*****Button Themes: Trying to set menu items for wix UI to match the wireframes *****/
         'theme-1': {
             id: 'theme-1',
             name: 'Theme-1',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             /*****using animation scripts because anime.js is needed in addition to the CSS *****/
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'

         },
         'theme-2': {
             id: 'theme-2',
             name: 'Theme-2',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'

         },

         'theme-3': {
                 id: 'theme-3',
                 name: 'Theme-3',
                 menus: ['link-tab', 'link','start-tab','textbtn-tab'],
                 on_load: function(data) {
                     default_particles_on_load(data);
                 },
                 animation_script_on: function(data) {
                     default_particles_on(data);
                 },
                 animation_script_off: function(data) {
                     default_particles_off(data);

                 },
                 premium: true,
                 visible: true,
                 display_method: 'particles'

         },

         'theme-4': {
                 id: 'theme-4',
                 name: 'Theme-4',
                 menus: ['link-tab', 'link','start-tab','textbtn-tab'],
                 on_load: function(data) {
                     default_particles_on_load(data);
                 },
                 animation_script_on: function(data) {
                     default_particles_on(data);
                 },
                 animation_script_off: function(data) {
                     default_particles_off(data);

                 },
                 premium: true,
                 visible: true,
                 display_method: 'particles'

         },
         'theme-5': {
             id: 'theme-5',
             name: 'Theme-5',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'
         },
         'theme-6': {
             id: 'theme-6',
             name: 'Theme-6',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'
         },
         'theme-9': {
             id: 'theme-9',
             name: 'Theme-9',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'
         },
         'theme-10': {
             id: 'theme-10',
             name: 'Theme-10',
             menus:['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'
         },
        /****Not working particle color */
         'theme-12': {
             id: 'theme-12',
             name: 'Theme-12',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
                 default_particles_on_load(data);
             },
             animation_script_on: function(data) {
                 default_particles_on(data);
             },
             animation_script_off: function(data) {
                 default_particles_off(data);

             },
             premium: true,
             visible: true,
             display_method: 'particles'
         },

         'bubbles': {
                     html: 'Bubble Buttons',
                     visible: true
                 },
        /*****Bubbles Button Themes: Trying to set menu items for wix UI to match the wireframes *****/
        'button--bubble': {
          id: 'button--bubble',
          name: 'Bubbles Button',
          menus: ['link-tab', 'link','start-tab','textbtn-tab'],
          on_load: function(data) {
            default_bubbles_on_load(data);
          },
          /*****using animation scripts because anime.js is needed in addition to the CSS *****/
          animation_script_on: function(data) {
            default_bubbles_on(data);
          },
          animation_script_off: function(data) {
            default_bubbles_off(data);

          },
          premium: true,
          visible: true,
          display_method: 'bubbles'

        },

        'fancy': {
                           html: 'Fancy Button',
                           visible: true
                       },
              /*****Button Themes *****/
              'fancy-button': {
                id: 'fancy-button',
                name: 'Fancy',
                menus: ['link-tab', 'link','start-tab','textbtn-tab'],
                on_load: function(data) {
                  default_fancy_on_load(data);
                },
                /*****using animation scripts because anime.js is needed in addition to the CSS *****/
                animation_script_on: function(data) {
                  default_fancy_on(data);
                },
                animation_script_off: function(data) {
                  default_fancy_off(data);

                },
                premium: true,
                visible: true,
                display_method: 'fancy'

              },

               'ripples': {
                            html: 'Ripple Buttons',
                            visible: true
                        },
               /*****Ripple Button Themes: Trying to set menu items for wix UI to match the wireframes *****/
               'ripples-1': {
                 id: 'ripples-1',
                 name: 'Circle',
                 menus: ['link-tab', 'link','start-tab','textbtn-tab'],
                 on_load: function(data) {
                   default_ripples_on_load(data);
                 },
                 /*****using animation scripts because anime.js is needed in addition to the CSS *****/
                 animation_script_on: function(data) {
                   default_ripples_on(data);
                 },
                 animation_script_off: function(data) {
                   default_ripples_off(data);

                 },
                 premium: true,
                 visible: true,
                 display_method: 'ripples'

               },
              'ripples-2': {
              id: 'ripples-2',
             name: 'Shape',
             menus: ['link-tab', 'link','start-tab','textbtn-tab'],
             on_load: function(data) {
            default_ripples_on_load(data);
            },
            animation_script_on: function(data) {
              default_ripples_on(data);
             },
            animation_script_off: function(data) {
            default_ripples_off(data);

            },
            premium: true,
            visible: true,
            display_method: 'ripples'

              },

               'ripples-3': {
                id: 'ripples-3',
                name: 'Polygon',
                menus: ['link-tab', 'link','start-tab','textbtn-tab'],
                on_load: function(data) {
                default_ripples_on_load(data);
              },
              animation_script_on: function(data) {
                  default_ripples_on(data);
              },
              animation_script_off: function(data) {
                  default_ripples_off(data);

              },
              premium: true,
              visible: true,
              display_method: 'ripples'

              },

              'ripples-4': {
              id: 'ripples-4',
              name: 'Gradient',
              menus: ['link-tab', 'link','start-tab','textbtn-tab'],
              on_load: function(data) {
                  default_ripples_on_load(data);
              },
              animation_script_on: function(data) {
                  default_ripples_on(data);
              },
              animation_script_off: function(data) {
                  default_ripples_off(data);

              },
              premium: true,
              visible: true,
              display_method: 'ripples'

      },

         'distortion': {
             html: 'Distortion Hover',
             visible: true
         },
         'distortion-1': {
             id: 'distortion-1',
             name: 'Jumping Around',
             menus: ['text-align-off','text-align-on','heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
             on_load: function(data) {
                 default_distortion_on_load(data);
             },
             animation_script_on: function(data) {
                 default_distortion_on(data);
             },
             animation_script_off: function(data) {
                 default_distortion_off(data);
             },
             premium: true,
             visible: true,
             display_method: 'distortion'
         }   ,
         'distortion-2': {
            id: 'distortion-2',
            name: 'Calm Serenity',
            menus: ['text-align-off','text-align-on','heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,

        'distortion-3': {
            id: 'distortion-3',
            name: 'Build it forever',
            menus: ['text-align-off','text-align-on','heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-4': {
            id: 'distortion-4',
            name: 'Water Wonders',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-5': {
            id: 'distortion-5',
            name: 'Holy House',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-6': {
            id: 'distortion-6',
            name: 'Future Proof',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-7': {
            id: 'distortion-7',
            name: 'Cool and Fresh',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
               on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-8': {
            id: 'distortion-8',
            name: 'My Cup of coffee',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-9': {
            id: 'distortion-9',
            name: 'French Geometry',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
             on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,
        'distortion-10': {
            id: 'distortion-10',
            name: 'Facades and bikes',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
               on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        }   ,

        'distortion-11': {
            id: 'distortion-11',
            name: 'Doors and Rooftops',
            menus: ['heading-off', 'subheading-off','start-tab', 'imageOff', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading','peranent-effect'],
            on_load: function(data) {
                default_distortion_on_load(data);
            },
            animation_script_on: function(data) {
                default_distortion_on(data);
            },
            animation_script_off: function(data) {
                default_distortion_off(data);
            },
            premium: true,
            visible: true,
            display_method: 'distortion'
        },

        'tilter': {
            html: 'Tilt effects',
            visible: true
        },
        /*****tilter Themes*****/
        'tilter': {
                     html: 'Tilt effects',
                     visible: true
                 },
        'tilter-1': {
          id: 'tilter-1',
          name: 'Tilter-1',
          menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
          on_load: function(data) {
            default_tilter_on_load(data);
          },
          /*****using animation scripts because anime.js is needed in addition to the CSS *****/
          animation_script_on: function(data) {
            default_tilter_on(data);
          },
          animation_script_off: function(data) {
            default_tilter_off(data);
          },
          premium: true,
          visible: true,
          display_method: 'tilter'
        },

        'tilter-2': {
        id: 'tilter-2',
        name: 'Tilter-2',
        menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
        on_load: function(data) {
          default_tilter_on_load(data);
        },
        /*****using animation scripts because anime.js is needed in addition to the CSS *****/
        animation_script_on: function(data) {
          default_tilter_on(data);
        },
        animation_script_off: function(data) {
          default_tilter_off(data);
        },
        premium: true,
        visible: true,
        display_method: 'tilter'
        },

        'tilter-3': {
         id: 'tilter-3',
         name: 'Tilter-3',
         menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
         on_load: function(data) {
           default_tilter_on_load(data);
         },
         /*****using animation scripts because anime.js is needed in addition to the CSS *****/
         animation_script_on: function(data) {
           default_tilter_on(data);
         },
         animation_script_off: function(data) {
           default_tilter_off(data);
         },
         premium: true,
         visible: true,
         display_method: 'tilter'
        },

        'tilter-4': {
         id: 'tilter-4',
         name: 'Tilter-4',
         menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
         on_load: function(data) {
           default_tilter_on_load(data);
         },
         /*****using animation scripts because anime.js is needed in addition to the CSS *****/
         animation_script_on: function(data) {
           default_tilter_on(data);
         },
         animation_script_off: function(data) {
           default_tilter_off(data);
         },
         premium: true,
         visible: true,
         display_method: 'tilter'

        },

        'tilter-5': {
         id: 'tilter-5',
         name: 'Tilter-5',
         menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
         on_load: function(data) {
           default_tilter_on_load(data);
         },
         /*****using animation scripts because anime.js is needed in addition to the CSS *****/
         animation_script_on: function(data) {
           default_tilter_on(data);
         },
         animation_script_off: function(data) {
           default_tilter_off(data);
         },
         premium: true,
         visible: true,
         display_method: 'tilter'
        },

        'tilter-6': {
         id: 'tilter-6',
         name: 'Tilter-6',
         menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
         on_load: function(data) {
           default_tilter_on_load(data);
         },
         /*****using animation scripts because anime.js is needed in addition to the CSS *****/
         animation_script_on: function(data) {
           default_tilter_on(data);
         },
         animation_script_off: function(data) {
           default_tilter_off(data);
         },
         premium: true,
         visible: true,
         display_method: 'tilter'

        },

        'tilter-7': {
         id: 'tilter-7',
         name: 'Tilter-7',
         menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
         on_load: function(data) {
           default_tilter_on_load(data);
         },
         /*****using animation scripts because anime.js is needed in addition to the CSS *****/
         animation_script_on: function(data) {
           default_tilter_on(data);
         },
         animation_script_off: function(data) {
           default_tilter_off(data);
         },
         premium: true,
         visible: true,
         display_method: 'tilter'
        },

        'tilter-8': {
         id: 'tilter-8',
         name: 'Tilter-8',
         menus: ['heading-off', 'subheading-off','start-tab', 'imageOff','end-tab', 'imageOn', 'link-tab', 'link', 'text-font-heading', 'text-colour-heading', 'text-font-subheading', 'text-colour-subheading'],
         on_load: function(data) {
           default_tilter_on_load(data);
         },
         /*****using animation scripts because anime.js is needed in addition to the CSS *****/
         animation_script_on: function(data) {
           default_tilter_on(data);
         },
         animation_script_off: function(data) {
           default_tilter_off(data);
         },
         premium: true,
         visible: true,
         display_method: 'tilter'
        },

        'pending': {
             html: 'NOT CURRENTLY AVAILABLE ON LIVE',
             visible: false,
         },
        'special': {

             html: 'Actions',
             visible: true

         },
     }
