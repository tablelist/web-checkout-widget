# Tablelist Web Widget

Embed the Tablelist checkout widget on client's websites, allowing customers to purchase through Tablelist without leaving the venue's website.

*Powered by Tablelist*

## Example

See a [Live Example](tablelist.com/widgets/storyville).

## Installation

1.) Add the following ``<div>`` to the location on your website where you wish the embedded Tablelist booking widget to appear. Our script will automatically replace this element with the venue's widget.

```html <div id="tablelist-checkout-1"></div>```

2.) Add the widget Javascript to your website. Place the Tablelist widget ``<script>`` right before the close of the web page's ``<body>`` tag.

The widget code can be found at [/release/tablelistwidget.js](/release/tablelistwidget.js) or [/release/tablelistwidget.min.js](/release/tablelistwidget.min.js)

Note: Replace **storyville** with whatever venue name you are setting up. 

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
