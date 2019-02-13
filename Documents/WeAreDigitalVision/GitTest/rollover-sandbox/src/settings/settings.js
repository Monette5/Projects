 require('./css/main.scss')
 require('./css/fontFace.scss')
 require('./css/animations.scss')
 require('./css/settings.scss')
 require('./css/support.scss')

var Wix = require('Wix')
var $ = require('jquery')

var origCompId = Wix.Utils.getOrigCompId();

function onUpdate(key, value) {
  Wix.Settings.triggerSettingsUpdatedEvent({key: key, value: value}, origCompId);
}

function attachListeners() { console.log('asasasas');
  $('[wix-ctrl]').each(function (index, element) {
    var $element = $(element);
    var ctrl = $element.getCtrl();
    if ($.isFunction(ctrl.onChange)) {
      ctrl.onChange(function (value) {
        onUpdate($element.attr('wix-param'), value);
      })
    }
  });
}

$(attachListeners);
