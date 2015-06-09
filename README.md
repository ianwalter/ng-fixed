# [ng-fixed](http://ianwalter.github.io/ng-fixed/)
*An AngularJS directive to display a context menu when a right-click event is triggered*

[![Code Climate](https://codeclimate.com/github/ianwalter/ng-fixed.png)](https://codeclimate.com/github/ianwalter/ng-fixed) [![Circle CI](https://circleci.com/gh/ianwalter/ng-fixed.svg?style=svg)](https://circleci.com/gh/ianwalter/ng-fixed)

This project was built using [ng-boilerplate](https://github.com/ianwalter/ng-boilerplate)!

---

### Implementation steps

#### Step 1: Install ng-fixed

Install using Bower:

```
bower install ng-fixed --save
```

Include ng-fixed.min.js in your app.

#### Step 2: Load the ng-fixed module

```javascript
var app = angular.module('menu-demo', ['ngRoute', 'ng-fixed'])
```

#### Step 3: Add the context-menu directive to a DOM element
Note that the `data-target` attribute value must match the `id` of the menu in the next step.
```html
<div context-menu class="panel panel-default position-fixed"
     data-target="menu-{{ $index }}"
     ng-class="{ 'highlight': highlight, 'expanded' : expanded }">
  ...
</div>
```
#### Step 4: Add the markup of the menu you want to be displayed

Customize the menu to your needs. It may look something like:

```html
<div class="dropdown position-fixed" id="menu-{{ $index }}">
  <ul class="dropdown-menu" role="menu">
    <li>
      <a class="pointer" role="menuitem" tabindex="1"
         ng-click="panel.highlight = true">
         Select Panel {{ $index + 1 }}
      </a>
    </li>
    <li>
      <a class="pointer" role="menuitem" tabindex="2"
         ng-click="panel.highlight = false">
         Deselect Panel  {{ $index + 1 }}
      </a>
    </li>
    <li>
      <a class="pointer" role="menuitem" tabindex="3"
         ng-click="panel.expanded = true">
         Expand Panel {{ $index + 1 }}
      </a>
    </li>
    <li>
      <a class="pointer" role="menuitem" tabindex="4"
         ng-click="panel.expanded = false">
         Contract Panel {{ $index + 1 }}
      </a>
    </li>
    <li>
      <a class="pointer" role="menuitem" tabindex="5"
         ng-click="addPanel()">
         Add a panel
      </a>
    </li>
    <li>
      <a href="https://github.com/ianwalter/ng-fixed"
         role="menuitem"
         tabindex="-1">
         ng-fixed on GitHub
      </a>
    </li>
  </ul>
</div>
```

#### Step 5: Make sure your menu is has the ```position: fixed``` CSS property

As you can see in the demo, I just created a class called position-fixed and added the property:

```css
.position-fixed {
  position: fixed;
}
```

---

### Options

#### Disabling the contextmenu

If you need to disable the contextmenu in certain circumstances, you can add an expression to the
 ```context-menu-disabled``` attribute. If the expression evaluates to true, the contextmenu will be
 disabled, for example, ```context-menu-disabled="1 === 1"```

#### Open callback

You can add a callback function to the `context-menu` property which will be
called when the menu is opened:

```html
<div context-menu="onShow()">
<!-- ... -->
</div>
```

#### Close callback

Add the following attribute to the `context-menu` element: `context-menu-close` which should be a function
that will be called whenever the context menu is closed.

```html
<div context-menu context-menu-close="onClose()">
<!-- ... -->
</div>
```

#### Margin bottom

Add the following attribute to the `context-menu` element: `context-menu-margin-bottom` to keep the context menu
away from the bottom of the page at least by this attribute value in pixels.

```html
<div context-menu context-menu-margin-bottom="10">
<!-- ... -->
</div>
```

---

---

I hope you find this useful!  
⌁ [Ian](http://ianvonwalter.com)
