const fs = require('fs');
const path = require('path');

const getHeadAndHero = require('./hero');
const getSectionsP1 = require('./sections_p1');
const getSectionsP2 = require('./sections_p2');
const getSectionsP3 = require('./sections_p3');
const getCssP1 = require('./css_p1');
const getCssP2 = require('./css_p2');
const getMainJs = require('./js');

// 1. Build index.html
const fullHtml = getHeadAndHero() + getSectionsP1() + getSectionsP2() + getSectionsP3();
fs.writeFileSync('index.html', fullHtml.trim() + '\n', 'utf8');
console.log('Built index.html (size: ' + fs.statSync('index.html').size + ' bytes)');

// 2. Build styles.css
const fullCss = getCssP1() + '\n' + getCssP2();
fs.writeFileSync('styles.css', fullCss.trim() + '\n', 'utf8');
console.log('Built styles.css (size: ' + fs.statSync('styles.css').size + ' bytes)');

// 3. Build main.js
const fullJs = getMainJs();
fs.writeFileSync('main.js', fullJs.trim() + '\n', 'utf8');
console.log('Built main.js (size: ' + fs.statSync('main.js').size + ' bytes)');

console.log('All files built successfully!');
