/*
 * csSplit.JS
 * @author Kevin Gimbel
 * @demo <http://bullg.it/csSPLIT>
 * @year 2015
 * @ranominfo Corals are actually animals.
 */
(function(window, document, undefined) {
  // get all files
  var all = document.querySelectorAll('*');
  // get the head of the page
  var head = document.querySelector('head');
  // empty array to hold all classes collected
  var allClasses = [];
  // empty array to hold a "file list"
  var fileList = [];
  // path to your assets!
  var assetLink = 'assets/css';
// Get all Classses
// IIFE (Immediate-Invoked Function Expression) to get all classes
// and put them into the classes array
(function(all) {
  [].forEach.call(all, function(item) {
    if(item.classList.toString() !== '') {
        item.classList.toString().split(' ').forEach(function(actualClass) {
          allClasses.push(actualClass);    
        })
    }
  });
}(all)); // pass the all var to the function


// includeStyles
// include a stylesheet.
// @param {string} Stylesheet Name
var includeStyles = function(stylesheet) {
  // create a new Link
  var style = document.createElement('link');
  // set the rel
  href.rel = 'stylesheet';
  // set it's href attribute
  style.href = assetLink + stylesheet;
  // append it to the head
  head.appendChild(style);
  
}

// createFileFormat
// make classes an actuall file.
// @param {String} - File Name
// @return new File Name 
var createFileFormat = function(string) {
  return string + '.css';
}
// create the file format strings
allClasses.forEach(function(fileName) {
  fileList.push(createFileFormat(fileName));
})
// include ALL THE STYLES!
fileList.forEach(function(file) {
  includeStyles(file);
});
}(window, document));