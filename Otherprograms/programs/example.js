// JavaScript program to check if rectangles overlap
class rectangle {

    constructor(val) {
        this.x = val;
        this.y = val;
    }
}

// Returns true if two rectangles
// (l1, r1) and (l2, r2) overlap
function doOverlap(l1, r1, l2, r2) {

    // To check if either rectangle is actually a line
    // For example : l1 ={-1,0} r1={1,1} l2={0,-1} r2={0,1}

    if (l1.x == r1.x || l1.y == r1.y ||
        l2.x == r2.x || l2.y == r2.y) {
        // the line cannot have positive overlap
        return false;
    }

    // If one rectangle is on left side of other
    if (l1.x >= r2.x || l2.x >= r1.x) {
        return false;
    }

    // If one rectangle is above other
    if (r1.y >= l2.y || r2.y >= l1.y) {
        return false;
    }

    return true;
}

/* Driver program to test above function */

var l1 = new rectangle();
var r1 = new rectangle();
var l2 = new rectangle();
var r2 = new rectangle();
l1.x = 0;
l1.y = 10;
r1.x = 10;
r1.y = 0;
l2.x = 5;
l2.y = 5;
r2.x = 15;
r2.y = 0;

if (doOverlap(l1, r1, l2, r2)) {
    console.log("Rectangles Overlap");
} else {
    console.log("Rectangles Don't Overlap");
}




