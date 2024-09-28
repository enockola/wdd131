const PI = 3.14;
let radius = 3;
let area = 0;


function circleArea(radius) {
    const area = radius * PI;
    return area
}

area = circleArea(3);
console.log("If radius = 3, area of circle =", area);

area = circleArea(4);
console.log("If radius = 4, area of circle =", area);
