# csSPLIT
#### Split your CSS into logical, small files

`csSPLIT.js` allows you to split your CSS into small, logical files. Every file holds one declaration and is named exactly the same. 

Let's say you want to add a class like `.my_super-bada55-cl4s5`. The file for this would be called `my_super-bada55-cl4s5.css` - easy as that! Once the script finds your class name in the DOM it will create a new `link` element containing a link to `assets/css/my_super-bada55-cl4s5.css`. **Awesome!**

This works for all pages, so you'll always get exactly the styles you need - no more, no less.

### Usage

#### Step 1: Include the script

Include the script (Best Practice: Inline the minified version from `cssplit.min.js`);
```html
<body>
  <!-- ALL YOUR DOM HERE -->
<script type="text/javascript">
!function(a,b){var d=b.querySelectorAll("*"),e=b.querySelector("head"),f=[],g=[],h="assets/css/";!function(a){[].forEach.call(a,function(a){""!==a.classList.toString()&&a.classList.toString().split(" ").forEach(function(a){f.push(a)})})}(d);var i=function(a){var c=b.createElement("link");c.rel="stylesheet",c.href=h+a,e.appendChild(c)},j=function(a){return a+".css"};f.forEach(function(a){g.push(j(a))}),g.forEach(function(a){i(a)})}(window,document);
</script>
</body>
```

#### Step 2: Create the CSS files!

Next, split your CSS in thousands of files and place them in the `assets/css` directory. 

#### Step 3: ????

#### Step 4: Profit!

Your CSS is now automatically loaded. csSPLIT.js is written as [immediately Invoked Function Expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), that is, it is calling itself!

Made with love by :cow::hankey: ~ 2015