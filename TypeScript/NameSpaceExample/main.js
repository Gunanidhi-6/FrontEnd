var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
/// <reference path="geometry.ts" />
var radius = 7;
console.log("Area of the circle: ".concat(Geometry.calculateArea(radius)));
