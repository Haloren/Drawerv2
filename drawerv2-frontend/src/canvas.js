// console.log("Canvas")

window.addEventListener('load', () => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    // const penColor = document.getElementById('color').value
    // const penWidth = document.getElementById('pen-tip').value

    canvas.height = window.innerHeight;//400; // 400 = 800px
    canvas.width = window.innerWidth;//400;

    let drawing = false;

    function startDraw(e){
        drawing = true;
        draw(e);
    }
    function endDraw(){
        drawing = false;
        context.beginPath(); //restart a new seperate line
    }
    function draw(e){
        if(!drawing) return;
        context.lineWidth = "5"; // THIS CHANGES THE LINE THICKNESS penWidth
        context.strokeStyle = "#000000"; // THIS CHANGES THE LINE COLOR penColor
        context.lineCap = "round";
        
        // console.log(e)
        // console.log(e.offsetX, e.offsetY);
        context.lineTo(e.offsetX, e.offsetY); //X 11, Y 12 
        // console.log(e.clientX, e.clientY);
        // context.lineTo(e.clientX, e.clientY); //X 830, Y 90
        // console.log(e.pageX, e.pageY);
        // context.lineTo(e.pageX/2, e.pageY/2); // X 496, Y 91
        //Figure out x and y by mouse position maybe?
            //xAxis = (window.innerWidth / 2 - e.pageX);
            //yAxis = (window.innerHeight / 2 - epageY);
            //https://stackoverflow.com/questions/30082590/mouse-cursor-doesnt-match-with-canvas  

        context.stroke();        
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);

    //BUTTON TO CLEAR THE CANVAS
    const clearCanvas = document.getElementById("clear-canvas");
    
    clearCanvas.addEventListener('click', function(){
        // console.log("Clear Canvas")
        context.clearRect(0,0, canvas.width, canvas.height)
    })

})