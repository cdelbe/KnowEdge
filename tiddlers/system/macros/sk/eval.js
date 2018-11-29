(function(){

"use strict";

exports.name = "eval";

exports.params = [
    { name: "cell" },
{ name:"datatiddler" },
{name:"target"},
{name:"format"}
];

/*
Run the macro
*/

exports.run = function(cell,datatiddler,target,format) {

// If no datatiddler supplied, use current instead
if (datatiddler=="") {
var c=this.getVariable("currentTiddler");
datatiddler = c;
}
var a=datatiddler+"!!"+cell;

//the the cell contents
var formula =-1;
var b =$tw.wiki.getTextReference(a);

if (b==undefined) {
b=cell;
} 

formula = b.indexOf("=");

if (formula < 0) {
var sk=b;
} else {
//its a formula
var re = /(.*?)!!(.*?)([&\-+*\/,\)]|$)(.*?)$/; 

do {

var bhold=b;
var subst = '!!$2'; 

//find the last referenced cell
var refcell = b.replace(re, subst);
var tempcell = "!!"+cell;

if (refcell===tempcell) {return "Circular Ref ";}

//get the value of the referenced cell and substitute it

a=datatiddler+refcell.toLowerCase();
//a=a.toLowerCase(); 

var subst ="$1("+$tw.wiki.getTextReference(a)+")$3$4";

var b = b.replace(re, subst);

} while (bhold!=b);

re = /=/g; 
var subst = ''; 
b = b.replace(re, subst);

re=/@/g;
subst ="Math.";
b = b.replace(re, subst);

re = /math/g; 
subst = 'Math'; 
b = b.replace(re, subst);
re = /pi/; 
subst = 'PI'; 
b= b.replace(re, subst);

var f=b.indexOf("&");

if (f>0) {
//string concatenation
//remove parenthesis

re = /[\(\)]/g; 
subst = ''; 
b= b.replace(re, subst);

//change & to space
re = /&/g; 
var subst = ' '; 
b = b.replace(re, subst);

// end of concatenation
} 

try {var sk=eval(b);}

catch(err) {sk = b;}

// Number formatting here

//end of formula
}
if (format != "") {

try{
b=Number(sk);
if (isNaN(b)) {return sk;}
sk=b;
sk=sk.toFixed(format).replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,');}
catch(err) {}


}

if (target!=="") {

var skeleton=$tw.wiki.setText(datatiddler,target,'',sk);
}

return sk;

};

})();
