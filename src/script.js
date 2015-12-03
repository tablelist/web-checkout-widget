(function(window, document, venueConfigs) {
  createStylesheet();

  var iframeEls = [];
  for (var i = 0; i < venueConfigs.length; i++) {
    var iframeEl = createIframe(venueConfigs[i]);
    iframeEls.push(iframeEl);
  }

  addEventListener(iframeEls);

  function createStylesheet() {
    var styles = '';

    styles += '.tablelist-iframe-widget {position:relative;}';
    styles += '.tablelist-iframe {border:none;position:relative;top:0;left:0;width:100%;height:100%;overflow:hidden;background:transparent;}';

    var styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.media = 'screen';

    if (styleEl.styleSheet) styleEl.styleSheet.cssText = styles; //IE only
    else styleEl.appendChild(document.createTextNode(styles));
    return document.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  function createIframe(config) {
    var wrapperEl = document.createElement('DIV');
    wrapperEl.className = 'tablelist-iframe-widget';

    var containerEl = document.getElementById(config.id);
    if (!containerEl) throw new Error('Tablelist widget element not found for id : ' + config.id);

    var iframeEl = document.createElement('IFRAME');
    iframeEl.setAttribute('scrolling', 'no');
    iframeEl.setAttribute('src', '@@DOMAIN/book/' + config.venue + '?client=' + config.venue + '-widget&partner=' + (config.partner || 'venueWidget') + '&widget_id=' + config.id);
    iframeEl.className = 'tablelist-iframe';

    wrapperEl.appendChild(iframeEl);
    containerEl.appendChild(wrapperEl);

    return iframeEl;
  }

  function addEventListener(iframes) {
    window.addEventListener('message', function receiveMessage(event) {
      if (event && event.data) {
        var data = event.data;
        try {
          data = JSON.parse(event.data);
        } catch (err) {
          return;
        }

        if (!data) return;
        if (data.eventType === 'setHeight') {
          for (var j = 0; j < iframes.length; j++) {
            var frameEl = iframes[j];
            if (!frameEl) continue;
            var widgetId = frameEl.getAttribute('id');
            if (widgetId === data.widgetId) {
              frameEl.style.height = (data.height + 'px');
            }
          }
        } else if (data.eventType === 'checkoutRedirect') {
          window.location.href = data.url;
        }
      }
    }, false);
  }
})(window, document, [{
  id: 'tablelist-checkout-1',
  venue: 'storyville',
  partner: 'eventWidget'
}, {
  id: 'tablelist-checkout-2',
  venue: 'bijou',
  partner: 'eventWidget'
}]);
