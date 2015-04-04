(function(window, document, elementId, venueName) {
  createStylesheet();

  var wrapperEl = document.createElement('DIV');
  wrapperEl.className = 'tablelist-iframe-widget';

  var containerEl = document.getElementById(elementId);
  var iframeEl = document.createElement('IFRAME');
  iframeEl.setAttribute('src', 'https://venue.tablelist.com/book/' + venueName + '?client=' + venueName + '-widget');
  iframeEl.className = 'tablelist-iframe';

  wrapperEl.appendChild(iframeEl);
  containerEl.appendChild(wrapperEl);

  function createStylesheet() {
    var styles = '';

    styles += '.tablelist-iframe-widget { position: relative; }';
    styles += '.tablelist-iframe { border:none; position: absolute; top:0; left: 0; width: 100%; height: 100%; }';

    var styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.media = 'screen';

    if (styleEl.styleSheet) styleEl.styleSheet.cssText = styles; //IE only
    else styleEl.appendChild(document.createTextNode(styles));
    return document.getElementsByTagName('head')[0].appendChild(styleEl);
  }
})(window, document, 'checkout', 'tunnel');
