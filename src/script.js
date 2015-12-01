(function(window, document, elementId, venueName) {
  createStylesheet();
  addEventListener();

  var wrapperEl = document.createElement('DIV');
  wrapperEl.className = 'tablelist-iframe-widget';

  var containerEl = document.getElementById(elementId);
  if (!containerEl) throw new Error('Tablelist widget element not found for id : ' + elementId);

  var iframeEl = document.createElement('IFRAME');
  iframeEl.setAttribute('scrolling', 'no');
  iframeEl.setAttribute('src', '@@DOMAIN/book/' + venueName + '?client=' + venueName + '-widget&partner=eventWidget');
  iframeEl.className = 'tablelist-iframe';

  wrapperEl.appendChild(iframeEl);
  containerEl.appendChild(wrapperEl);

  function createStylesheet() {
    var styles = '';

    styles += '.tablelist-iframe-widget { position: relative; }';
    styles += '.tablelist-iframe { border:none; position: relative; top:0; left: 0; width: 100%; height: 100%; overflow:hidden; background:transparent; }';

    var styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.media = 'screen';

    if (styleEl.styleSheet) styleEl.styleSheet.cssText = styles; //IE only
    else styleEl.appendChild(document.createTextNode(styles));
    return document.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  function addEventListener() {
    window.addEventListener('message', function receiveMessage(event) {
      //if (event.origin !== 'https://www-dev.tablelist.com' && event.origin !== 'https://www-dev.tablelist.com') return;

      if (event && event.data) {
        var data = event.data;
        try {
          data = JSON.parse(event.data);
        } catch (err) {
          return;
        }

        if (!data) return;
        if (data.eventType === 'setHeight') {
          iframeEl.style.height = (data.height + 'px');
        } else if (data.eventType === 'checkoutRedirect') {
          window.location.href = data.url;
        }
      }
    }, false);
  }
})(window, document, 'checkout', '@@VENUE_SLUG');
