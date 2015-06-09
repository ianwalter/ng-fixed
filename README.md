# [ng-fixed](http://ianwalter.github.io/ng-fixed/)
*An AngularJS directive that changes an element's position to fixed when scrolled to a given point*

[![Code Climate](https://codeclimate.com/github/ianwalter/ng-fixed.png)](https://codeclimate.com/github/ianwalter/ng-fixed)

## Implementation steps

### Step 1: Install ng-fixed

Install using Bower:

```
bower install ng-fixed --save
```

Include ng-fixed.min.js in your app.

### Step 2: Load the ng-fixed module

```javascript
angular.module('menu-demo', ['ng-fixed'])
```

### Step 3: Add the ng-fixed directive to the desired DOM element

```html
<div ng-fixed fixed-element-selector="#trigger-fixed" fixed-class="position-fixed top-30">
  ...
</div>
```

## API

### `ng-fixed {boolean}`

ng-fixed will evaluate the value of this property. If it evaluates to `false` 
the the directive will be disabled.

Example: `ng-fixed="navigationService.enableFixed"`

### `fixed-element-selector {string}`

A query selector string which will be used to find an element that will cause 
the fixed classes to be added to the ng-fixed element when the page is scrolled 
beyond the y-offset of the element selected.

Example: `fixed-element-selector="#trigger-fixed"`
 
### `fixed-class {string}`

A string of classes that will be applied to the ng-fixed element once it has
been "triggered" by the page scrolling beyond the y-offset of the element
specified in the `fixed-element-selector`.

Example: `fixed-class="position-fixed top-30"`
 
### `unfixed-element-selector {string}`

A query selector string which will be used to find an element that will cause 
the fixed classes to be removed from the ng-fixed element when the two elements 
come into contact with each other. By default, the ng-fixed element also has 
styles applied to it that keep it in place at the point of interaction.

Example: `unfixed-element-selector="footer"`


I hope you find this useful!  
&#9875; [Ian](http://iankwalter.com)
