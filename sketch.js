function setup() {
createCanvas(850, 550);
}

function draw() {
   background("#fff");
  
  
  
  
  fill(21, 133, 21);
    rect(0, 500, 900, 100);
    fill("0");
      rect(340,40,0,150)
      
      rect(340,40,50,30)
  

  
    triangle(10, 105, 100, 10, 170, 105);//left top
    rect(40, 105, 100, 400);//left side wall
   rect(300, 105, 100, 400);//centre wall
    rect(140 ,240,450,265);//main wall
    rect(570, 105, 100, 400);//right wall
    triangle(540, 105, 650, -5, 700, 105);//right top
    
  
  //small squares
    rect(140, 210, 30, 30);
    rect(220, 210, 30, 30);
    rect(300, 210, 30, 30);
    rect(380, 210, 30, 30);
    rect(460, 210, 30, 30);
    rect(540, 210, 30, 30);
  
  
  
  
   //Windows
    //fill(200, 229, 247);
//rect(250, 200, 60, 60);
    rect(590, 150, 60, 60);
    //rect(90, 370, 90, 60);
    
    //fill(0);
        rect(60, 150, 60, 60);
   // rect(50, 300, 60, 60);
   // rect(70, 370, 90, 60);
    
  
   //Door 
    fill(66, 43, 1);
   arc(400, 505, 150,350 ,PI,degrees(0))
   fill(0);
   ellipse(400,440,20,40)
  
  
  
  
  
  
  
}