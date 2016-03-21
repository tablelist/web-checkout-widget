# Tablelist Web Widget

Embed the Tablelist checkout widget on client's websites, allowing customers to purchase through Tablelist without leaving the venue's website.

*Powered by Tablelist*

## Example

See a [Live Example](http://tablelist.com/widgets/storyville).

## Installation

1.) Add the following ``<div>`` to your website. The embedded Tablelist widget will get initialized at this location on the page.

```<div id="tablelist-checkout-1"></div>```

2.) Add one of the following scripts to your website. Place ``<script>`` right before the close of your page's ``<body>`` tag.

* [tablelistwidget.js](/release/tablelistwidget.js)
* [tablelistwidget.min.js](/release/tablelistwidget.min.js) (minified)

## Configuration

The configuration object support a number of customizable parameters.

For example, here's the demp configuration from ``tablelistwidget.js``:

``js 
[{
  id: 'tablelist-checkout-1',
  venue: 'storyville',
  partner: 'venue',
  theme: 'tablelist'
}, ....] 

``

## Customization Options

<br>**id** - Element ID on which widget will be placed.

*this must match the ``div`` from Installation Step #1*

<br>**venue** - Venue name for which venue will be loaded.

*This will be your tablelist "slug". If you don't know what value to use, please contact hello@tablelist.com and we'll provide it.*

<br>**partner** - Partner name.
 
*If you don't have a partner name, please leave default of "venueWidget".*

<br>**theme** - Color scheme the widget should use.  [See examples](https://www.tablelist.com/widgets/storyville)

*May be one of 'widget-theme-tablelist', 'widget-theme-light', or 'widget-theme-dark'*

<br>**date** - (optional) Unix Epoch time for what day the widget should default to. 

*If not provided, will default to the current date*

## Development

Development tools that you will need installed on your local computer:

* [Node Package Manager (npm)](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Getting Started

To start the setup of your local development environment, download dependencies:

``$ npm install``

## Coding style tests

``` sh
# Run JSHint
$ gulp jshint
```

## Release

To create a new release of the Tablelist Widget, build the project. The updated script will be created in the ``/release/`` folder. Use the command:

```$ gulp release```

## Deployment

Note: Deployment is currently a manual effort. Partners will copy & paste the required code into their website's source code. We have future plans to provide a CDN for loading the most recent version of the Tablelist widget.

*fill me in*

## Versioning

We use [SemVer](http://semver.org/) for versioning. Please remember to update ``package.json``
