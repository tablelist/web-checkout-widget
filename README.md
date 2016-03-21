# Tablelist Web Widget

Embeddable checkout widget for creating reservations. Embed the Tablelist checkout flow on client's websites, allowing customers to purchase on Tablelist directly through the client website. 

*Powered by Tablelist.*

## Example

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

## Prerequisities

Development tools that you will need installed on your local computer:

* [Node Package Manager (npm)](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Getting Started

To start the setup of your local development environment, download dependencies:

```sh $ npm install```

## Coding style tests

``` sh
# Run JSHint
$ gulp jshint
```

## Release

Make Build

```sh $ gulp release```

## Deployment

*fill me in*

## Versioning

We use [SemVer](http://semver.org/) for versioning. Please remember to update ``package.json``

## TODO:

1. Ability to auto resize the iFrame - to do this we need to be able to communicate between the tablelist web code and the iframe to tell it to resize whenever something in the webpage resizes (ex. a drop down is opened up, increasing the inner pages height)
  * https://github.com/davidjbradshaw/iframe-resizer

=======
``gulp release``
>>>>>>> 2ccbf4362d5a23bfa791bae52892ab7451e8dfd7