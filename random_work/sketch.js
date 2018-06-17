var w           = null;
var point_color = null;
function setup()
{
    createCanvas(600,600);
    w = new Walker();
    background(51);
} 

function draw()
{
    w.walk();
    w.display();
}

var Walker = function()
{
    this.x = width/2;
    this.y = height/2;
}

Walker.prototype.display = function()
{
    point_color = color(random(255),random(255),random(255),100);//,0.5);
    stroke(point_color);
    strokeWeight(4);
    point(this.x,this.y);
};
Walker.prototype.walk = function()
{
    /*
    var choice = floor(random(4));
    if(choice === 0) this.x+=4;
    else if(choice === 1) this.x-=4;
    else if(choice === 2) this.y+=4;
    else if(choice === 3) this.y-=4;
    */
    var stepx = random(-1, 1);
    var stepy = random(-1, 1);
    this.x += 4*stepx;
    this.y += 4*stepy;
    point(this.x,this.y);
};

