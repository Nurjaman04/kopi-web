# kopi-web
# Cara Install 
install proyek

    npm init 

install Jest

    npm install --save-dev jest
 


Menambahkan tdd

 Buat file pengujian

Contoh: 

sum.js 

scipt :
   // sum.js
function sum(a, b) {
    return a + b;
  }
  
  module.exports = sum;



// sum.test.js
const sum = require('./sum');

test('menjumlahkan 1 + 2 sama dengan 3', () => {
  expect(sum(1, 2)).toBe(3);
});




Install Babel 

    npm install --save-dev @babel/core @babel/cli @babel/preset-env

buat file : .babelrc

script : 
   {
      "presets": ["@babel/preset-env"]
   }





install Code Coverage

    npx jest --coverage   



Package.json

tambahkan 
script : 

      "scripts": {
      "test": "jest --coverage",
      "build": "babel src --out-dir dist"  
     },



Jalankan : 

    npm test




menyambungkan dengan GIT

install Git:

    git init


menambahkan semua file ke Git:


    git add .



Buat commit awal


    git commit -m "initial commit"
