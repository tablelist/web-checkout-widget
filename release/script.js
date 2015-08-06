(function(window, document, elementId, venueName) {
  createStylesheet();
  addResizeListener();

  var wrapperEl = document.createElement('DIV');
  wrapperEl.className = 'tablelist-iframe-widget';

  var containerEl = document.getElementById(elementId);
  if (!containerEl) throw new Error('Tablelist widget element not found for id : ' + elementId);

  var iframeEl = document.createElement('IFRAME');
  iframeEl.setAttribute('scrolling', 'no');
  iframeEl.setAttribute('src', 'https://www-dev.tablelist.com/book/' + venueName + '?client=' + venueName + '-widget&partner=venue');
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

  function addResizeListener() {
    window.addEventListener('message', function receiveMessage(event) {
      //if (event.origin !== 'https://www-dev.tablelist.com' && event.origin !== 'https://www-dev.tablelist.com') return;

      if (event && event.data) {
        var data = event.data;
        try {
          data = JSON.parse(event.data);
        } catch (err) {
          return;
        }

        if (!data || data.eventType !== 'setHeight') return;

        // console.log('resizing to ' + data.height);

        iframeEl.style.height = (data.height + 'px');
      }
    }, false);
  }
})(window, document, 'checkout', 'storyville');
