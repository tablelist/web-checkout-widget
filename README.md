# Tablelist Web Widget

Embed the Tablelist checkout widget on client's websites, allowing customers to purchase through Tablelist without leaving the venue's website.

*Powered by Tablelist*

## Example

See a [Live Example](http://tablelist.com/widgets/storyville).

## Installation

See our [Installation Instructions](https://www.tablelist.com/widgets).

Add the following ``<div>`` to your website. This is where the Tablelist Widget will initialize.

```<div id="tablelist-checkout-1"></div>```

Add the following script to your website. Copy and paste the code into a ``<script>`` tag that lives right before your page's ``</body>`` tag.

* [tablelistwidget.min.js](/release/tablelistwidget.min.js) (minified)

## Configuration

The configuration object support a number of customizable parameters.

For example, here's the demp configuration from ``tablelistwidget.js``:

```js 
[{
  id: 'tablelist-checkout-1',
  venue: 'storyville',
  partner: 'venue',
  theme: 'tablelist',
  date: ....
}, ....] 

```

## Customization Options

We recommend Use our [Widget Creation Tool](https://www.tablelist.com/widgets).

For advanced configuration, the supported parameters are as seen below:

<br>**id** - Element ID on which widget will be placed.

*this must match the ``div`` from Installation Step #1*

<br>**venue** - Venue name for which venue will be loaded.

*This will be your tablelist "slug". 

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

## Local Server

``sh
# Start local server
$ node server.js
``

*Widget demo should now be running locally at ``localhost:2001``*

## Release

To create a new release of the Tablelist Widget, build the project. The updated script will be created in the ``/release/`` folder. Use the command:

``sh
# Build Release
$ gulp release
``

## Deployment

Note: Deployment is currently a manual effort. Partners will copy & paste the required code into their website's source code. We have future plans to provide a CDN for loading the most recent version of the Tablelist widget.

*The widget is currently manually deployed. Users must copy and paste the code snippets into their website's source code.*

## Versioning

We use [SemVer](http://semver.org/) for versioning. Please remember to update ``package.json``
