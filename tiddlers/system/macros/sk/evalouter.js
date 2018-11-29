(function(){

"use strict";

exports.name = "eval1";

exports.params = [
    { name: "cell" },
{ name:"datatiddler" },
{ name:"format"}
];

/*
Run the macro
*/
exports.run = function(cell,datatiddler,format) {


return '<$reveal state="$:/state/formulas" type="match" text="yes">`'+cell+'`<$edit-text tiddler="'+datatiddler+'" field="'+cell+'" /></$reveal><$reveal state="$:/state/formulas" type="nomatch" text="yes"><$macrocall $name="eval" datatiddler="'+datatiddler+'" cell="'+cell+'" format="'+format+'"/></$reveal>';
};

})();
