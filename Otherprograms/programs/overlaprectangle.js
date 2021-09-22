class rectangle
{constructor(x, y)
    {
      this.x=x;
      this.y=y;
   }
}
function overlapcheck(l1,l2,r1,r2)
{
    if(l1.x>=r2.x||l2.x>=r1.x){
        return false;
    }
    else if(r1.y>=l2.y||r2.y>=l1.y){
        return false;
    }
    return true;
}

var l1=new rectangle(20,50);
var r1=new rectangle(30,30);
var l2=new rectangle(10,20);
var r2=new rectangle(40,10);
if(overlapcheck(l1,l2,r2,r2)){
    console.log("The rectangles do  overlap");
}
else{
    console.log("The rectangles do not overlap")
}
