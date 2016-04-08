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
    iframeEl.setAttribute('widget-id', config.id);
    iframeEl.setAttribute('src', 'https://www-dev.tablelist.com/book/' + config.venue + '?client=' + config.venue + '-widget&partner=' + (config.partner || 'venueWidget') + '&theme=' + (config.theme || 'tablelist') + '&widget_id=' + config.id + (config.date ? ('&date=' + config.date) : ''));
    iframeEl.className = 'tablelist-iframe';

    var poweredBy = '<p class="widget-powered-by">Powered by <a href="https://www.tablelist.com" target="_blank">Tablelist</a></p>';

    wrapperEl.appendChild(iframeEl);
    containerEl.appendChild(wrapperEl).innerHTML += poweredBy;

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
            var widgetId = frameEl.getAttribute('widget-id');
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
  partner: 'venue',
  theme: 'tablelist'
}, {
  id: 'tablelist-checkout-2',
  venue: 'storyville',
  partner: 'venueWidget',
  theme: 'tablelist-venue-widget'
}, {
  id: 'tablelist-checkout-3',
  venue: 'storyville',
  partner: 'eventWidget',
  theme: 'tablelist-event-widget',
  date: '1451594229000'
}, {
  id: 'tablelist-checkout-4',
  venue: 'storyville',
  partner: 'venue',
  theme: 'yelp'
}]);
