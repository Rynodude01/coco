            objectDetector = "";
            img = "";
            status = "";
            objects = [];
            function preload(){
                img = loadImage("bedroom.jpg")
            }
            function setup(){
                canvas = createCanvas(900,500);
                canvas.center();
                objectDetector = ml5.objectDetector("cocossd", modelloaded);
                document.getElementById("status").innerHTML = "status: detecting objects";
            }
            function modelloaded(){
                console.log("model has loaded");
                status = true;
                objectDetector.detect(img,gotresults);
            }
            function gotresults(error,result){
                if(error){
                    console.error(error);
                }
                console.log(result);
                objects = result;
            }
            function draw(){
                if(status != ""){
                    image(img,0,0,900,500);
                    for(var i = 0; i < objects.length; i++){
                        document.getElementById("status").innerHTML = "status: objects detected";
                        fill(255,0,0);
                        percent = floor(objects[i].confidence*100);
                        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
                        noFill();
                        stroke(255,0,0);
                        rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height)
                    }
                }
            }