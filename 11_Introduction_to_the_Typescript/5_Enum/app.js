var Navy;
(function (Navy) {
    Navy[Navy["Engine"] = 2] = "Engine";
    Navy[Navy["Bow"] = 1] = "Bow";
    Navy[Navy["Stern"] = 4] = "Stern";
})(Navy || (Navy = {}));
;
var numberOfEngine = Navy.Engine;
console.log(numberOfEngine);
//I can't set values, it's a contant, just READ ONLY
//Navy.Engine = 4;
console.log(Navy);
