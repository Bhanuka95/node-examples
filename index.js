var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l, b){
    if(l<=0 || b<=0){
        console.log("Not a valid rectangle");
    }
    else{
        console.log("The area = " + rect.area(l,b));
        console.log("The perimeter = " + rect.perimeter(l,b));
    }
}

solveRect(3,5);
solveRect(-3,5);