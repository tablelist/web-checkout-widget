# Tablelist Web Widget

Embeddable checkout widget for creating reservations. Powered by Tablelist. Embed the Tablelist checkout flow on client's websites, allowing customers to purchase on Tablelist directly through the client website. 

## Example

Script to easily add the Tablelist checkout flow to any webpage.

See a [Live Example](tablelist.com/widgets/storyville).

## Installation

Add the following script right before the closing body tag

```javascript
<script>
  ! function(e, t, a, i) {
    function l() {
      var e = "";
      e += ".tablelist-iframe-widget { position: relative; }", e += ".tablelist-iframe { border:none; position: absolute; top:0; left: 0; width: 100%; height: 100%; }";
      var a = t.createElement("style");
      return a.type = "text/css", a.media = "screen", a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), t.getElementsByTagName("head")[0].appendChild(a)
    }
    l();
    var n = t.createElement("DIV");
    n.className = "tablelist-iframe-widget";
    var s = t.getElementById(a),
      r = t.createElement("IFRAME");
    r.setAttribute("src", "https://venue.tablelist.com/book/" + i + "?client=" + i + "-widget"), r.className = "tablelist-iframe", n.appendChild(r), s.appendChild(n)
  }(window, document, "checkout", "storyville");
  </script>
```

Replace "storyville" with whatever venue name you are setting up.

## Getting Started

Download dependencies:

``npm install``

## Release

Make Build

``gulp release``
